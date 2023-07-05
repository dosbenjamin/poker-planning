import { createRoomAction, joinRoomAction } from 'features/rooms/actions';
import { mutationKeys, queryKeys, subscriptionKeys } from 'shared';
import useSWR, { type SWRConfiguration, type SWRResponse } from 'swr';
import useSWRMutation, { type SWRMutationConfiguration, type SWRMutationResponse } from 'swr/mutation';
import useSWRSubscription, { type SWRSubscriptionResponse } from 'swr/subscription';
import type { ReadManyParticipantsOutputSchema } from 'features/participants';
import type { SubscribeRoomOutputSchema } from 'features/rooms';
import { readManyParticipants } from 'features/participants/client';
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

export const useReadManyParticipants = (
  participantIds: string[],
  config?: SWRConfiguration<ReadManyParticipantsOutputSchema, void, typeof readManyParticipants>,
): SWRResponse<
  ReadManyParticipantsOutputSchema,
  void,
  SWRConfiguration<ReadManyParticipantsOutputSchema, void, typeof readManyParticipants>
> => {
  return useSWR(
    queryKeys.getReadManyParticipants(participantIds),
    ([, ...participantIds]) => readManyParticipants(participantIds),
    // @ts-expect-error overload
    config,
  );
};
