import * as dotenv from 'dotenv';
import path from 'path';

// Load .env and .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import mongoose from 'mongoose';
import Brother from '../src/models/Brother';
import { execBoard, council, classes } from '../src/app/brothers/brothersData';

/**
 * CLI Seeding Routine
 * Replaces the entire MongoDB brothers collection in a single atomic transaction
 * using the static brothersData definition.
 */
async function seed() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error('❌ Error: MONGODB_URI environment variable is missing.');
    console.error('👉 Please set MONGODB_URI in your .env or .env.local file.');
    process.exit(1);
  }

  // Explicit safeguard against accidental production overwrites
  const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production' || process.env.CONTEXT === 'production';
  const allowProdSeed = process.env.ALLOW_PROD_SEED === 'true';

  if (isProd && !allowProdSeed) {
    console.error('⛔ Safeguard: Seeding against production environment is blocked.');
    console.error('👉 To force execution, set ALLOW_PROD_SEED=true in your environment.');
    process.exit(1);
  }

  console.log('🔄 Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected to MongoDB.');

  const brothersToInsert: Array<Record<string, unknown>> = [];

  // 1. Executive Board
  console.log(`📌 Processing ${execBoard.length} Exec Board members...`);
  execBoard.forEach((b, index) => {
    brothersToInsert.push({
      name: b.name,
      role: b.role || '',
      category: 'exec',
      classSymbol: '',
      imageUrl: b.src,
      alt: b.alt || b.name,
      hometown: b.hometown || '',
      major: b.major || '',
      order: index,
      isActive: true,
    });
  });

  // 2. Council
  console.log(`📌 Processing ${council.length} Council members...`);
  council.forEach((b, index) => {
    brothersToInsert.push({
      name: b.name,
      role: b.role || '',
      category: 'council',
      classSymbol: '',
      imageUrl: b.src,
      alt: b.alt || b.name,
      hometown: b.hometown || '',
      major: b.major || '',
      order: index,
      isActive: true,
    });
  });

  // 3. Classes
  let classBrotherCount = 0;
  classes.forEach((cls) => {
    cls.brothers.forEach((b, index) => {
      classBrotherCount++;
      brothersToInsert.push({
        name: b.name,
        role: b.role || '',
        category: 'active',
        classSymbol: cls.symbol,
        imageUrl: b.src,
        alt: b.alt || b.name,
        hometown: b.hometown || '',
        major: b.major || '',
        order: index,
        isActive: true,
      });
    });
  });
  console.log(`📌 Processing ${classBrotherCount} Class members across ${classes.length} classes...`);

  console.log('🔒 Starting database transaction for atomic roster replacement...');
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log('🧹 Clearing existing brothers collection in transaction...');
    await Brother.deleteMany({}, { session });

    console.log(`💾 Inserting ${brothersToInsert.length} total brother records into MongoDB...`);
    const result = await Brother.insertMany(brothersToInsert, { session });

    await session.commitTransaction();
    console.log(`🎉 Successfully seeded ${result.length} brothers into MongoDB atomically!`);
  } catch (error) {
    console.error('⚠️ Transaction failed! Rolling back changes...');
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB.');
  }
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
