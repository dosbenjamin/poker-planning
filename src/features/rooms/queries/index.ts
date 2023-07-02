import { ReadRoomInputSchema, ReadRoomOutputSchema } from 'features/rooms';
import { Collections } from 'shared';
import { pocketbase } from 'lib/pocketbase/server';

export const readRoom = async (id: unknown): Promise<ReadRoomOutputSchema> => {
  const validatedId = ReadRoomInputSchema.parse(id);

  const room = await pocketbase.collection(Collections.Rooms).getOne(validatedId);

  return ReadRoomOutputSchema.parse(room);
};
