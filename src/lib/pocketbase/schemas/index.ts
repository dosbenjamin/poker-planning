import { z } from 'zod';

export const PocketBaseIdSchema = z.string().trim().length(15);
export type PocketBaseIdSchema = z.infer<typeof PocketBaseIdSchema>;
