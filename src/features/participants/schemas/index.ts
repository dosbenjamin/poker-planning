import { PocketBaseIdSchema } from 'lib/pocketbase';
import { z } from 'zod';

// Mutations
export const CreateParticipantInputSchema = z.object({
  isConnected: z.boolean(),
  isOwner: z.boolean(),
  name: z.string().nonempty(),
});
export type CreateParticipantInputSchema = z.infer<typeof CreateParticipantInputSchema>;

export const CreateParticipantOutputSchema = z.object({
  id: PocketBaseIdSchema,
});
export type CreateParticipantOutputSchema = z.infer<typeof CreateParticipantOutputSchema>;
