import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import connectToDatabase from '@/lib/db';
import Brother from '@/models/Brother';
import { groupBrothersByClass } from '@/lib/brothers';
import { verifyAdminAuth, unauthorizedResponse } from '@/lib/auth';

const BrotherInputSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().optional(),
  category: z.enum(['exec', 'council', 'active', 'alumni']).default('active'),
  classSymbol: z.string().optional(),
  imageUrl: z.string().url('A valid image URL is required'),
  cloudinaryPublicId: z.string().optional(),
  alt: z.string().optional(),
  hometown: z.string().optional(),
  major: z.string().optional(),
  order: z.number().optional().default(0),
  isActive: z.boolean().optional().default(true),
});

/**
 * GET /api/brothers
 * Retrieves brothers from MongoDB, optionally filtered by category or class,
 * or grouped by Executive Board, Council, and Classes.
 *
 * @param request - Incoming NextRequest with query parameters (grouped, category, class).
 * @returns NextResponse with JSON payload of brothers data.
 */
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const grouped = searchParams.get('grouped') === 'true';
    const category = searchParams.get('category');
    const classSymbol = searchParams.get('class');

    // If specific filter requested
    const filter: Record<string, unknown> = { isActive: true };
    if (category) filter.category = category;
    if (classSymbol) filter.classSymbol = classSymbol;

    const brothers = await Brother.find(filter).sort({ order: 1, createdAt: 1 }).lean();

    if (!grouped) {
      return NextResponse.json({ success: true, count: brothers.length, data: brothers });
    }

    // Return grouped format matching frontend requirements
    const execBoard = brothers
      .filter((b) => b.category === 'exec')
      .map((b) => ({
        _id: b._id,
        name: b.name,
        role: b.role || '',
        src: b.imageUrl || '',
        alt: b.alt || b.name,
        hometown: b.hometown || '',
        major: b.major || '',
      }));

    const council = brothers
      .filter((b) => b.category === 'council')
      .map((b) => ({
        _id: b._id,
        name: b.name,
        role: b.role || '',
        src: b.imageUrl || '',
        alt: b.alt || b.name,
        hometown: b.hometown || '',
        major: b.major || '',
      }));

    const activeBrothers = brothers.filter((b) => b.category === 'active');
    const classes = groupBrothersByClass(activeBrothers);

    return NextResponse.json({
      success: true,
      data: {
        execBoard,
        council,
        classes,
      },
    });
  } catch (error: unknown) {
    console.error('Error fetching brothers:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/brothers
 * Protected administrator endpoint to create a new brother document in MongoDB.
 *
 * @param request - Incoming NextRequest with JSON payload of brother properties.
 * @returns NextResponse with created brother document or validation/auth error.
 */
export async function POST(request: NextRequest) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return unauthorizedResponse(auth.error);
  }

  try {
    await connectToDatabase();

    const body = await request.json();
    const validatedData = BrotherInputSchema.parse(body);

    const brother = await Brother.create({
      ...validatedData,
      alt: validatedData.alt || validatedData.name,
    });

    return NextResponse.json(
      { success: true, data: brother, message: 'Brother created successfully' },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error creating brother:', error);
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
