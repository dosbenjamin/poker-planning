'use server';

import { CREATE_ROOM_FORM_KEYS, ROOM_ID_COOKIE_NAME } from 'features/rooms';
import { cookies } from 'next/headers';
import { createParticipant } from 'features/participants/server';
import { createRoom } from 'features/rooms/server';

export const createRoomAction = async (formData: FormData): Promise<void> => {
  const room = await createRoom({
    name: formData.get(CREATE_ROOM_FORM_KEYS.roomName),
  });

  await createParticipant({
    isOwner: true,
    name: formData.get(CREATE_ROOM_FORM_KEYS.ownerName),
    room: room.id,
  });

  cookies().set(ROOM_ID_COOKIE_NAME, room.id);
};
