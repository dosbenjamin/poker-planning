import { CREATE_ROOM_FORM_KEYS } from 'features/rooms';
import { z } from 'zod';

export const CreateRoomFormSchema = z.object({
  [CREATE_ROOM_FORM_KEYS.roomName]: z.string().min(1),
  [CREATE_ROOM_FORM_KEYS.ownerName]: z.string().min(1),
});
export type CreateRoomFormSchema = z.infer<typeof CreateRoomFormSchema>;

export const CreateRoomInputSchema = z.object({
  name: z.string().min(1),
  owner: z.string().min(1),
});
export type CreateRoomInputSchema = z.infer<typeof CreateRoomInputSchema>;

export const CreateRoomOutputSchema = z.object({
  id: z.string().min(1),
});
export type CreateRoomOutputSchema = z.infer<typeof CreateRoomOutputSchema>;
