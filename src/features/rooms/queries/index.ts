import { ReadRoomInputSchema, ReadRoomOutputSchema } from 'features/rooms/schemas';
import { Collections } from 'lib/pocketbase';
import { pocketbase } from 'lib/pocketbase/server';

export const readRoom = async (id: string): Promise<ReadRoomOutputSchema> => {
  const validatedId = ReadRoomInputSchema.parse(id);

  const room = await pocketbase.collection(Collections.Rooms).getOne(validatedId);

  return ReadRoomOutputSchema.parse(room);
};
