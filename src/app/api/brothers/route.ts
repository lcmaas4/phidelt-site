import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import connectToDatabase from '@/lib/db';
import Brother from '@/models/Brother';

const BrotherInputSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().optional(),
  category: z.enum(['exec', 'council', 'active', 'alumni']).default('active'),
  classSymbol: z.string().optional(),
  imageUrl: z.string().default(''),
  cloudinaryPublicId: z.string().optional(),
  alt: z.string().optional(),
  hometown: z.string().optional(),
  major: z.string().optional(),
  order: z.number().optional().default(0),
  isActive: z.boolean().optional().default(true),
});

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
    const execBoard = brothers.filter((b) => b.category === 'exec');
    const council = brothers.filter((b) => b.category === 'council');
    
    // Group classes
    const classBrothers = brothers.filter((b) => b.category === 'active' && b.classSymbol);
    const classesMap = new Map<string, typeof classBrothers>();

    for (const b of classBrothers) {
      const sym = b.classSymbol || 'Other';
      if (!classesMap.has(sym)) {
        classesMap.set(sym, []);
      }
      classesMap.get(sym)!.push(b);
    }

    const classes = Array.from(classesMap.entries()).map(([symbol, brothersList]) => ({
      symbol,
      brothers: brothersList.map((b) => ({
        _id: b._id,
        name: b.name,
        src: b.imageUrl,
        alt: b.alt || b.name,
        role: b.role,
        hometown: b.hometown,
        major: b.major,
      })),
    }));

    return NextResponse.json({
      success: true,
      data: {
        execBoard: execBoard.map((b) => ({
          _id: b._id,
          name: b.name,
          role: b.role,
          src: b.imageUrl,
          alt: b.alt || b.name,
          hometown: b.hometown,
          major: b.major,
        })),
        council: council.map((b) => ({
          _id: b._id,
          name: b.name,
          role: b.role,
          src: b.imageUrl,
          alt: b.alt || b.name,
          hometown: b.hometown,
          major: b.major,
        })),
        classes,
      },
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Failed to fetch brothers';
    console.error('Error fetching brothers:', error);
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    const errMessage = error instanceof Error ? error.message : 'Failed to create brother';
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    );
  }
}
