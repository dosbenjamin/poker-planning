import { ReadRoomInputSchema, ReadRoomOutputSchema } from 'features/rooms';
import { Collections } from 'shared';
import { pocketbase } from 'lib/pocketbase/server';

export const readRoom = async (roomId: unknown): Promise<ReadRoomOutputSchema> => {
  const validatedRoomId = ReadRoomInputSchema.parse(roomId);

  const room = await pocketbase.collection(Collections.Rooms).getOne(validatedRoomId);

  return ReadRoomOutputSchema.parse(room);
};
