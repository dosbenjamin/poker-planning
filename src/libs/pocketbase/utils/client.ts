import PocketBase from 'pocketbase';
import { env } from 'env';

export const pocketbase = new PocketBase(env.NEXT_PUBLIC_POCKETBASE_URL);
