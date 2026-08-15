import mongoose, { Schema, Document, Model } from 'mongoose';

export type AssetCategory = 'composite' | 'background' | 'rush' | 'impact' | 'general';

export interface IAsset extends Document {
  publicId: string;
  url: string;
  secureUrl: string;
  format?: string;
  resourceType: 'image' | 'video' | 'raw';
  folder?: string;
  category: AssetCategory;
  bytes?: number;
  width?: number;
  height?: number;
  originalFilename?: string;
  altText?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const AssetSchema = new Schema<IAsset>(
  {
    publicId: {
      type: String,
      required: [true, 'Cloudinary public_id is required'],
      unique: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    secureUrl: {
      type: String,
      required: true,
      trim: true,
    },
    format: {
      type: String,
      trim: true,
    },
    resourceType: {
      type: String,
      enum: ['image', 'video', 'raw'],
      default: 'image',
    },
    folder: {
      type: String,
      default: 'phidelt-site',
      trim: true,
    },
    category: {
      type: String,
      enum: ['composite', 'background', 'rush', 'impact', 'general'],
      default: 'general',
      index: true,
    },
    bytes: {
      type: Number,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    originalFilename: {
      type: String,
      trim: true,
    },
    altText: {
      type: String,
      trim: true,
      default: '',
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Asset: Model<IAsset> =
  (mongoose.models.Asset as Model<IAsset>) ||
  mongoose.model<IAsset>('Asset', AssetSchema);

export default Asset;
