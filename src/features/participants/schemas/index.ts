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

// Queries
export const ReadParticipantInputSchema = PocketBaseIdSchema;
export type ReadParticipantInputSchema = z.infer<typeof ReadParticipantInputSchema>;

export const ReadParticipantOutputSchema = z.object({
  isConnected: z.boolean(),
  isOwner: z.boolean(),
  name: z.string().nonempty(),
});
export type ReadParticipantOutputSchema = z.infer<typeof ReadParticipantOutputSchema>;

export const ReadManyParticipantsInputSchema = ReadParticipantInputSchema.array();
export type ReadManyParticipantsInputSchema = z.infer<typeof ReadManyParticipantsInputSchema>;

export const ReadManyParticipantsOutputSchema = ReadParticipantOutputSchema.array();
export type ReadManyParticipantsOutputSchema = z.infer<typeof ReadManyParticipantsOutputSchema>;
