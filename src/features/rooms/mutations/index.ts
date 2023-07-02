import { Collections, type RoomsRecord, type RoomsResponse } from 'shared';
import {
  CreateRoomInputSchema,
  CreateRoomOutputSchema,
  UpdateRoomInputSchema,
  UpdateRoomOutputSchema,
} from 'features/rooms';
import { pocketbase } from 'lib/pocketbase/server';

export const createRoom = async (values: Record<keyof RoomsRecord, unknown>): Promise<CreateRoomOutputSchema> => {
  const validatedValues = CreateRoomInputSchema.parse(values);

  const room = await pocketbase.collection(Collections.Rooms).create<RoomsResponse>(validatedValues);

  return CreateRoomOutputSchema.parse(room);
};

export const updateRoom = async (
  id: unknown,
  values: Partial<Record<keyof RoomsRecord, unknown>>,
): Promise<UpdateRoomOutputSchema> => {
  const { id: validatedId, ...validatedValues } = UpdateRoomInputSchema.parse({ id, ...values });

  const room = await pocketbase.collection(Collections.Rooms).update<RoomsResponse>(validatedId, validatedValues);

  return UpdateRoomOutputSchema.parse(room);
};
