'use client';

import { Button, FormControl, FormInput, FormLabel } from 'styled-system/jsx';
import { en } from 'locales';
import { stack } from 'styled-system/patterns';

export const JoinRoomForm = (): JSX.Element => {
  return (
    <form className={stack({ gap: '4' })}>
      <FormControl>
        <FormLabel>{en.rooms.fields.participantName.label}</FormLabel>
        <FormInput placeholder={en.rooms.fields.participantName.placeholder} />
      </FormControl>
      <Button>{en.rooms.join.submit}</Button>
    </form>
  );
};
