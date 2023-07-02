'use client';

import { Button, FormControl, FormInput, FormLabel } from 'styled-system/jsx';
import { CREATE_ROOM_FORM_KEYS, CreateRoomFormSchema } from 'features/rooms';
import { en } from 'locales';
import { stack } from 'styled-system/patterns';
import { useCreateRoom } from 'features/rooms/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const CreateRoomForm = (): JSX.Element => {
  const { isMutating: isCreatingRoom, trigger: createRoom } = useCreateRoom();

  const { handleSubmit, register } = useForm<CreateRoomFormSchema>({
    resolver: zodResolver(CreateRoomFormSchema),
  });

  const handleCreateRoom = handleSubmit(async (_, event) => {
    const form = event?.target as HTMLFormElement;
    const formData = new FormData(form);
    await createRoom(formData);
  });

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleCreateRoom}
      className={stack({ gap: '4' })}
    >
      <FormControl>
        <FormLabel>{en.rooms.fields.roomName.label}</FormLabel>
        <FormInput placeholder={en.rooms.fields.roomName.placeholder} {...register(CREATE_ROOM_FORM_KEYS.ROOM_NAME)} />
      </FormControl>
      <FormControl>
        <FormLabel>{en.rooms.fields.participantName.label}</FormLabel>
        <FormInput
          placeholder={en.rooms.fields.participantName.placeholder}
          {...register(CREATE_ROOM_FORM_KEYS.OWNER_NAME)}
        />
      </FormControl>
      <Button disabled={isCreatingRoom} aria-busy={isCreatingRoom}>
        {en.rooms.create.submit}
      </Button>
    </form>
  );
};
