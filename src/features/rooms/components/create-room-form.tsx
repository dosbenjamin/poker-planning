'use client';

import { Button, FormControl, FormInput, FormLabel } from 'styled-system/jsx';
import { CREATE_ROOM_FORM_KEYS, CreateRoomFormSchema, createRoomAction } from 'features/rooms';
import { stack } from 'styled-system/patterns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const CreateRoomForm = (): JSX.Element => {
  const { handleSubmit, register } = useForm<CreateRoomFormSchema>({
    resolver: zodResolver(CreateRoomFormSchema),
  });

  const handleCreateRoom = handleSubmit(async (_, event) => {
    const form = event?.target as HTMLFormElement;
    const formData = new FormData(form);
    await createRoomAction(formData);
  });

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleCreateRoom}
      className={stack({ gap: '4' })}
    >
      <FormControl>
        <FormLabel>Room name</FormLabel>
        <FormInput placeholder="Insert a name for your new room" {...register(CREATE_ROOM_FORM_KEYS.roomName)} />
      </FormControl>
      <FormControl>
        <FormLabel>Your name</FormLabel>
        <FormInput placeholder="Insert your name" {...register(CREATE_ROOM_FORM_KEYS.ownerName)} />
      </FormControl>
      <Button>Let&apos;s plan!</Button>
    </form>
  );
};
