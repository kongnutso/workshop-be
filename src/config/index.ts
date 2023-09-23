import dotenv from 'dotenv';

dotenv.config();

export const DB_HOST: string = process.env.DB_HOST || '';
export const DB_PORT: string = process.env.DB_PORT || '';
export const DB_NAME: string = process.env.DB_NAME || '';
export const DB_USERNAME: string = process.env.DB_USERNAME || '';
export const DB_PASSWORD: string = process.env.DB_PASSWORD || '';