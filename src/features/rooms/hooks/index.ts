import { createRoomAction, joinRoomAction } from 'features/rooms/actions';
import type { SWRMutationHook } from 'lib/swr';
import { mutationKeys } from 'shared';
import useMutation from 'swr/mutation';
import { useTransition } from 'react';

export const useCreateRoom: SWRMutationHook<void, void, ReturnType<typeof mutationKeys.getCreateRoom>, FormData> = (
  key = mutationKeys.getCreateRoom(),
  options,
) => {
  const [, startTransition] = useTransition();
  return useMutation(
    key,
    (_, { arg: formData }) => {
      startTransition(() => createRoomAction(formData));
    },
    options,
  );
};

export const useJoinRoom: SWRMutationHook<void, void, ReturnType<typeof mutationKeys.getJoinRoom>, FormData> = (
  key = mutationKeys.getJoinRoom(),
  options,
) => {
  const [, startTransition] = useTransition();
  return useMutation(
    key,
    (_, { arg: formData }) => {
      startTransition(() => joinRoomAction(formData));
    },
    options,
  );
};
