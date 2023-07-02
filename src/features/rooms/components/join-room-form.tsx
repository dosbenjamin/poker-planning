'use client';

import { Button, FormControl, FormInput, FormLabel } from 'styled-system/jsx';
import { JOIN_ROOM_FORM_KEYS, JoinRoomFormSchema, JoinRoomPageParamsSchema } from 'features/rooms';
import { en } from 'locales';
import { mutationKeys } from 'shared';
import { stack } from 'styled-system/patterns';
import { useForm } from 'react-hook-form';
import { useJoinRoom } from 'features/rooms/client';
import { useParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

export const JoinRoomForm = (): JSX.Element => {
  const params = useParams();
  const { roomId } = JoinRoomPageParamsSchema.parse(params);

  const { isMutating: isJoiningRoom, trigger: joinRoom } = useJoinRoom(mutationKeys.getJoinRoom(roomId));

  const { handleSubmit, register, getValues } = useForm<JoinRoomFormSchema>({
    defaultValues: { roomId },
    resolver: zodResolver(JoinRoomFormSchema),
  });

  const handleJoinRoom = handleSubmit(async (_, event) => {
    const form = event?.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append(JOIN_ROOM_FORM_KEYS.roomId, getValues(JOIN_ROOM_FORM_KEYS.roomId));
    await joinRoom(formData);
  });

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleJoinRoom}
      className={stack({ gap: '4' })}
    >
      <FormControl>
        <FormLabel>{en.rooms.fields.participantName.label}</FormLabel>
        <FormInput
          placeholder={en.rooms.fields.participantName.placeholder}
          {...register(JOIN_ROOM_FORM_KEYS.participantName)}
        />
      </FormControl>
      <Button disabled={isJoiningRoom} aria-busy={isJoiningRoom}>
        {en.rooms.join.submit}
      </Button>
    </form>
  );
};
