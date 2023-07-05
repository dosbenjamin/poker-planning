import { Collections, type RoomsRecord, type RoomsResponse } from 'shared';
import {
  CreateRoomInputSchema,
  CreateRoomOutputSchema,
  UpdateRoomInputSchema,
  UpdateRoomOutputSchema,
} from 'features/rooms';
import { pocketbase } from 'lib/pocketbase/server';

export const createRoom = async (roomValues: Record<keyof RoomsRecord, unknown>): Promise<CreateRoomOutputSchema> => {
  const validatedRoomValues = CreateRoomInputSchema.parse(roomValues);

  const room = await pocketbase.collection(Collections.Rooms).create<RoomsResponse>(validatedRoomValues);

  return CreateRoomOutputSchema.parse(room);
};

export const updateRoom = async (
  roomId: unknown,
  roomValues: Partial<Record<keyof RoomsRecord, unknown>>,
): Promise<UpdateRoomOutputSchema> => {
  const { id: validatedRoomId, ...validatedRoomValues } = UpdateRoomInputSchema.parse({ id: roomId, ...roomValues });

  const room = await pocketbase
    .collection(Collections.Rooms)
    .update<RoomsResponse>(validatedRoomId, validatedRoomValues);

  return UpdateRoomOutputSchema.parse(room);
};
