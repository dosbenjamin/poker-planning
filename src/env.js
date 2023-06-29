import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_POCKETBASE_URL: z.string().min(1).url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_POCKETBASE_URL: process.env['NEXT_PUBLIC_POCKETBASE_URL'],
    POCKETBASE_URL: process.env['POCKETBASE_URL'],
  },
  server: {
    POCKETBASE_URL: z.string().min(1).url(),
  },
});
