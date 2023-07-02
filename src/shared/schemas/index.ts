import { z } from 'zod';

export const UrlSchema = z.string().trim().nonempty().url();
export type UrlSchema = z.infer<typeof UrlSchema>;
