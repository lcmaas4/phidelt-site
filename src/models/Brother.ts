import mongoose, { Schema, Document, Model } from 'mongoose';

export type BrotherCategory = 'exec' | 'council' | 'active' | 'alumni';

export interface IBrother extends Document {
  name: string;
  role?: string;
  category: BrotherCategory;
  classSymbol?: string;
  imageUrl: string;
  cloudinaryPublicId?: string;
  alt: string;
  hometown?: string;
  major?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BrotherSchema = new Schema<IBrother>(
  {
    name: {
      type: String,
      required: [true, 'Brother name is required'],
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      default: '',
    },
    category: {
      type: String,
      enum: ['exec', 'council', 'active', 'alumni'],
      default: 'active',
      index: true,
    },
    classSymbol: {
      type: String,
      trim: true,
      default: '',
      index: true,
    },
    imageUrl: {
      type: String,
      default: '',
      trim: true,
    },
    cloudinaryPublicId: {
      type: String,
      trim: true,
      default: '',
    },
    alt: {
      type: String,
      trim: true,
      default: '',
    },
    hometown: {
      type: String,
      trim: true,
      default: '',
    },
    major: {
      type: String,
      trim: true,
      default: '',
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for efficient class/category querying & ordering
BrotherSchema.index({ category: 1, classSymbol: 1, order: 1 });

const Brother: Model<IBrother> =
  (mongoose.models.Brother as Model<IBrother>) ||
  mongoose.model<IBrother>('Brother', BrotherSchema);

export default Brother;
