import { Collections, type RoomsRecord, type RoomsResponse } from 'lib/pocketbase';
import { CreateRoomInputSchema, CreateRoomOutputSchema } from 'features/rooms';
import { pocketbase } from 'lib/pocketbase/server';

export const createRoom = async (values: Record<keyof RoomsRecord, unknown>): Promise<CreateRoomOutputSchema> => {
  const validatedValues = CreateRoomInputSchema.parse(values);

  const room = await pocketbase
    .collection(Collections.Rooms)
    .create<RoomsResponse>(CreateRoomInputSchema.parse(validatedValues));

  return CreateRoomOutputSchema.parse(room);
};
