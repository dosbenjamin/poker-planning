import { type SWRMutation, mutationKeys } from 'lib/swr';
import { createRoomAction } from 'features/rooms/actions';
import useMutation from 'swr/mutation';
import { useTransition } from 'react';

export const useCreateRoom: SWRMutation<void, void, string, FormData> = (options) => {
  const [, startTransition] = useTransition();
  return useMutation(
    mutationKeys.getCreateRoom(),
    (_, { arg: formData }) => {
      startTransition(() => createRoomAction(formData));
    },
    options,
  );
};
