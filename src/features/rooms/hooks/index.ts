import { createRoomAction, joinRoomAction } from 'features/rooms/actions';
import { mutationKeys, subscriptionKeys } from 'shared';
import useSWRMutation, { type SWRMutationConfiguration, type SWRMutationResponse } from 'swr/mutation';
import useSWRSubscription, { type SWRSubscriptionResponse } from 'swr/subscription';
import type { SWRConfiguration } from 'swr';

import type { SubscribeRoomOutputSchema } from 'features/rooms';
import { subscribeRoom } from 'features/rooms/client';
import { useTransition } from 'react';

export const useCreateRoom = (
  options?: SWRMutationConfiguration<void, void, ReturnType<typeof mutationKeys.getCreateRoom>, FormData, void>,
): SWRMutationResponse<void, void, ReturnType<typeof mutationKeys.getCreateRoom>, FormData> => {
  const [, startTransition] = useTransition();
  return useSWRMutation(
    mutationKeys.getCreateRoom(),
    (_, { arg: formData }) => {
      startTransition(() => createRoomAction(formData));
    },
    options,
  );
};

export const useJoinRoom = (
  roomId: string,
  options?: SWRMutationConfiguration<void, void, ReturnType<typeof mutationKeys.getJoinRoom>, FormData, void>,
): SWRMutationResponse<void, void, ReturnType<typeof mutationKeys.getJoinRoom>, FormData> => {
  const [, startTransition] = useTransition();
  return useSWRMutation(
    mutationKeys.getJoinRoom(roomId),
    (_, { arg: formData }) => {
      startTransition(() => joinRoomAction(formData));
    },
    options,
  );
};

export const useSubscribeRoom = (
  roomId: string,
  config?: SWRConfiguration<SubscribeRoomOutputSchema, void, typeof subscribeRoom>,
): SWRSubscriptionResponse<SubscribeRoomOutputSchema, void> => {
  return useSWRSubscription(
    subscriptionKeys.getSubscribeRoom(roomId),
    ([, roomId], { next }) => {
      const unsubscribe = subscribeRoom(roomId, (room) => {
        next(null, room);
      });
      return () => unsubscribe;
    },
    config,
  );
};
