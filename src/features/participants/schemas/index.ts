import { z } from 'zod';

export const CreateParticipantInputSchema = z.object({
  isOwner: z.boolean(),
  name: z.string().min(1),
  room: z.string().min(1),
});
export type CreateParticipantInputSchema = z.infer<typeof CreateParticipantInputSchema>;

export const CreateParticipantOutputSchema = z.object({
  id: z.string().min(1),
});
export type CreateParticipantOutputSchema = z.infer<typeof CreateParticipantOutputSchema>;
