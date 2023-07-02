import { SWRKeys, type SWRMutation } from 'lib/swr';
import { createRoomAction } from 'features/rooms/actions';
import useMutation from 'swr/mutation';

export const useCreateRoom: SWRMutation<void, void, typeof SWRKeys.createRoom, FormData> = (options) => {
  return useMutation(SWRKeys.createRoom, (_, { arg: formData }) => createRoomAction(formData), options);
};
