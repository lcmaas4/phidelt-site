import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { z } from 'zod';
import connectToDatabase from '@/lib/db';
import Brother from '@/models/Brother';
import { deleteCloudinaryAsset } from '@/lib/cloudinary';
import { verifyAdminAuth, unauthorizedResponse } from '@/lib/auth';

interface RouteContext {
  params: Promise<{ id: string }>;
}

const BrotherUpdateSchema = z
  .object({
    name: z.string().min(1, 'Name cannot be empty').optional(),
    role: z.string().optional(),
    category: z.enum(['exec', 'council', 'active', 'alumni']).optional(),
    classSymbol: z.string().optional(),
    imageUrl: z.string().url('A valid image URL is required').optional(),
    cloudinaryPublicId: z.string().optional(),
    alt: z.string().optional(),
    hometown: z.string().optional(),
    major: z.string().optional(),
    order: z.number().optional(),
    isActive: z.boolean().optional(),
  })
  .strict();

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    await connectToDatabase();
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid Brother ID' }, { status: 400 });
    }

    const brother = await Brother.findById(id).lean();

    if (!brother) {
      return NextResponse.json({ success: false, error: 'Brother not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: brother });
  } catch (error: unknown) {
    console.error('Error fetching brother by id:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return unauthorizedResponse(auth.error);
  }

  try {
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid Brother ID' }, { status: 400 });
    }

    const rawBody = await request.json();
    const validatedUpdates = BrotherUpdateSchema.parse(rawBody);

    await connectToDatabase();

    const updatedBrother = await Brother.findByIdAndUpdate(id, validatedUpdates, {
      new: true,
      runValidators: true,
    });

    if (!updatedBrother) {
      return NextResponse.json({ success: false, error: 'Brother not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: updatedBrother,
      message: 'Brother updated successfully',
    });
  } catch (error: unknown) {
    console.error('Error updating brother:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return unauthorizedResponse(auth.error);
  }

  try {
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid Brother ID' }, { status: 400 });
    }

    await connectToDatabase();
    const brother = await Brother.findById(id);

    if (!brother) {
      return NextResponse.json({ success: false, error: 'Brother not found' }, { status: 404 });
    }

    // Clean up associated Cloudinary image with retries if present
    if (brother.cloudinaryPublicId) {
      let cleanedUp = false;
      let lastError: Error | null = null;

      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const res = await deleteCloudinaryAsset(brother.cloudinaryPublicId);
          if (res?.result === 'ok' || res?.result === 'not found') {
            cleanedUp = true;
            break;
          }
        } catch (err: unknown) {
          lastError = err instanceof Error ? err : new Error('Cloudinary deletion failed');
        }
      }

      if (!cleanedUp) {
        console.error('Failed to clean up Cloudinary asset after 3 attempts:', lastError);
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to delete associated media asset from Cloudinary. Deletion aborted.',
          },
          { status: 502 }
        );
      }
    }

    await Brother.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: 'Brother and associated media deleted successfully',
      data: { _id: brother._id, name: brother.name },
    });
  } catch (error: unknown) {
    console.error('Error deleting brother:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
