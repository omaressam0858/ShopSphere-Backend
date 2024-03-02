import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DATABASE_URL = process.env.DATABASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;

export const CLOUDINARY_CLOUDNAME = process.env.CLOUDINARY_CLOUDNAME;
export const CLOUDINARY_APIKEY = process.env.CLOUDINARY_APIKEY;
export const CLOUDINARY_APISECRET = process.env.CLOUDINARY_APISECRET;

export const STRIPE_APIKEY = process.env.STRIPE_APIKEY;
export const STRIPE_WEBHOOK = process.env.STRIPE_WEBHOOK;