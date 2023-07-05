import { Collections, type RoomsResponse } from 'shared';
import { SubscribeRoomInputSchema, SubscribeRoomOutputSchema } from 'features/rooms';
import type { UnsubscribeFunc } from 'pocketbase';
import { pocketbase } from 'lib/pocketbase/client';

export const subscribeRoom = async (
  roomId: unknown,
  onRoomChange: (room: SubscribeRoomOutputSchema) => void,
): Promise<UnsubscribeFunc> => {
  const validatedRoomId = SubscribeRoomInputSchema.parse(roomId);

  const unsubscribe = await pocketbase
    .collection(Collections.Rooms)
    .subscribe<RoomsResponse>(validatedRoomId, (roomSubscription) => {
      onRoomChange(SubscribeRoomOutputSchema.parse(roomSubscription.record));
    });

  return unsubscribe;
};
