import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/db';
import Brother from '@/models/Brother';
import { deleteCloudinaryAsset } from '@/lib/cloudinary';

interface RouteContext {
  params: Promise<{ id: string }>;
}

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
    const errMessage = error instanceof Error ? error.message : 'Failed to fetch brother';
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    await connectToDatabase();
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid Brother ID' }, { status: 400 });
    }

    const updates = await request.json();

    const updatedBrother = await Brother.findByIdAndUpdate(id, updates, {
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
    const errMessage = error instanceof Error ? error.message : 'Failed to update brother';
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    await connectToDatabase();
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid Brother ID' }, { status: 400 });
    }

    const brother = await Brother.findByIdAndDelete(id);

    if (!brother) {
      return NextResponse.json({ success: false, error: 'Brother not found' }, { status: 404 });
    }

    // Clean up associated Cloudinary image if it exists
    if (brother.cloudinaryPublicId) {
      try {
        await deleteCloudinaryAsset(brother.cloudinaryPublicId);
      } catch (cloudErr) {
        console.warn('Failed to delete Cloudinary asset for brother:', cloudErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Brother deleted successfully',
      data: brother,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Failed to delete brother';
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    );
  }
}
