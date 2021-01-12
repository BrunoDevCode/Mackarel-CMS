import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: '../../.env' });

export const {
  MONGO_URI
}: any = process.env;