import { CREATE_ROOM_FORM_KEYS, JOIN_ROOM_FORM_KEYS } from 'features/rooms';
import { PocketBaseIdSchema } from 'lib/pocketbase';
import { z } from 'zod';

// Macros
export const RoomModeSchema = z.enum(['Point', 'T-shirt']);
export type RoomModeSchema = z.infer<typeof RoomModeSchema>;

// Forms
export const CreateRoomFormSchema = z.object({
  [CREATE_ROOM_FORM_KEYS.roomName]: z.string().trim().nonempty(),
  [CREATE_ROOM_FORM_KEYS.ownerName]: z.string().trim().nonempty(),
});
export type CreateRoomFormSchema = z.infer<typeof CreateRoomFormSchema>;

export const JoinRoomFormSchema = z.object({
  [JOIN_ROOM_FORM_KEYS.participantName]: z.string().trim().nonempty(),
  [JOIN_ROOM_FORM_KEYS.roomId]: PocketBaseIdSchema,
});
export type JoinRoomFormSchema = z.infer<typeof JoinRoomFormSchema>;

// Mutations
export const CreateRoomInputSchema = z.object({
  isRevealed: z.boolean(),
  mode: RoomModeSchema,
  name: z.string().trim().nonempty(),
  participants: PocketBaseIdSchema.array(),
});
export type CreateRoomInputSchema = z.infer<typeof CreateRoomInputSchema>;

export const CreateRoomOutputSchema = z.object({
  id: PocketBaseIdSchema,
});
export type CreateRoomOutputSchema = z.infer<typeof CreateRoomOutputSchema>;

export const UpdateRoomInputSchema = z.object({
  id: PocketBaseIdSchema,
  isRevealed: z.boolean().optional(),
  mode: RoomModeSchema.optional(),
  name: z.string().trim().nonempty().optional(),
  participants: PocketBaseIdSchema.array().optional(),
});
export type UpdateRoomInputSchema = z.infer<typeof UpdateRoomInputSchema>;

export const UpdateRoomOutputSchema = z.object({
  id: PocketBaseIdSchema,
});
export type UpdateRoomOutputSchema = z.infer<typeof UpdateRoomOutputSchema>;

// Queries
export const ReadRoomInputSchema = PocketBaseIdSchema;
export type ReadRoomInputSchema = z.infer<typeof ReadRoomInputSchema>;

export const ReadRoomOutputSchema = z.object({
  id: PocketBaseIdSchema,
  name: z.string().trim().nonempty(),
  participants: PocketBaseIdSchema.array(),
});
export type ReadRoomOutputSchema = z.infer<typeof ReadRoomOutputSchema>;

// Params
export const JoinRoomPageParamsSchema = z.object({
  roomId: PocketBaseIdSchema,
});
export type JoinRoomPageParamsSchema = z.infer<typeof JoinRoomPageParamsSchema>;

export const RoomPageParamsSchema = z.object({
  roomId: PocketBaseIdSchema,
});
export type RoomPageParamsSchema = z.infer<typeof RoomPageParamsSchema>;
