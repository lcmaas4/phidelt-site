import connectToDatabase from './db';
import Brother from '@/models/Brother';
import {
  execBoard as staticExec,
  council as staticCouncil,
  classes as staticClasses,
  Brother as BrotherType,
  Class as ClassType,
} from '@/app/brothers/brothersData';

export interface BrothersPageData {
  execBoard: BrotherType[];
  council: BrotherType[];
  classes: ClassType[];
  source: 'database' | 'static';
}

/**
 * Server-side helper to fetch brothers data for Server Components.
 * Seamlessly falls back to static data if MongoDB is not configured or unavailable.
 */
export async function getBrothersData(): Promise<BrothersPageData> {
  if (!process.env.MONGODB_URI) {
    return {
      execBoard: staticExec,
      council: staticCouncil,
      classes: staticClasses,
      source: 'static',
    };
  }

  try {
    await connectToDatabase();

    const brothers = await Brother.find({ isActive: true })
      .sort({ order: 1, createdAt: 1 })
      .lean();

    if (!brothers || brothers.length === 0) {
      return {
        execBoard: staticExec,
        council: staticCouncil,
        classes: staticClasses,
        source: 'static',
      };
    }

    const execBoard: BrotherType[] = brothers
      .filter((b) => b.category === 'exec')
      .map((b) => ({
        name: b.name,
        role: b.role,
        src: b.imageUrl,
        alt: b.alt || b.name,
        hometown: b.hometown,
        major: b.major,
      }));

    const council: BrotherType[] = brothers
      .filter((b) => b.category === 'council')
      .map((b) => ({
        name: b.name,
        role: b.role,
        src: b.imageUrl,
        alt: b.alt || b.name,
        hometown: b.hometown,
        major: b.major,
      }));

    const classBrothers = brothers.filter((b) => b.category === 'active' && b.classSymbol);
    const classesMap = new Map<string, BrotherType[]>();

    for (const b of classBrothers) {
      const sym = b.classSymbol || 'Active';
      if (!classesMap.has(sym)) {
        classesMap.set(sym, []);
      }
      classesMap.get(sym)!.push({
        name: b.name,
        src: b.imageUrl,
        alt: b.alt || b.name,
        role: b.role,
        hometown: b.hometown,
        major: b.major,
      });
    }

    const classes: ClassType[] = Array.from(classesMap.entries()).map(
      ([symbol, brothersList]) => ({
        symbol,
        brothers: brothersList,
      })
    );

    return {
      execBoard: execBoard.length > 0 ? execBoard : staticExec,
      council: council.length > 0 ? council : staticCouncil,
      classes: classes.length > 0 ? classes : staticClasses,
      source: 'database',
    };
  } catch (error) {
    console.warn('Failed to fetch brothers from MongoDB, falling back to static data:', error);
    return {
      execBoard: staticExec,
      council: staticCouncil,
      classes: staticClasses,
      source: 'static',
    };
  }
}
