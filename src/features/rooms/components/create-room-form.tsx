'use client';

import { Button, FormControl, FormInput, FormLabel } from 'styled-system/jsx';
import { CREATE_ROOM_INPUT_NAMES } from 'features/rooms';
import { createRoom } from 'features/rooms/actions';
import { stack } from 'styled-system/patterns';

export const CreateRoomForm = (): JSX.Element => {
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={createRoom}
      className={stack({ gap: '4' })}
    >
      <FormControl>
        <FormLabel>Room name</FormLabel>
        <FormInput name={CREATE_ROOM_INPUT_NAMES.roomName} placeholder="Insert a name for your new room" />
      </FormControl>
      <FormControl>
        <FormLabel>Your name</FormLabel>
        <FormInput name={CREATE_ROOM_INPUT_NAMES.ownerName} placeholder="Insert your name" />
      </FormControl>
      <Button>Let&apos;s plan!</Button>
    </form>
  );
};
