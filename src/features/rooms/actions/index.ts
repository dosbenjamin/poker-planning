'use server';

import { CREATE_ROOM_FORM_KEYS, JOIN_ROOM_FORM_KEYS, ROOM_DEFAULT_VALUES, ROOM_ID_COOKIE_NAME } from 'features/rooms';
import { OWNER_PARTICIPANT_DEFAULT_VALUES, REGULAR_PARTICIPANT_DEFAULT_VALUES } from 'features/participants';
import { createRoom, readRoom, updateRoom } from 'features/rooms/server';
import { cookies } from 'next/headers';
import { createParticipant } from 'features/participants/server';
import { nextRoutes } from 'shared';
import { redirect } from 'next/navigation';

export const createRoomAction = async (formData: FormData): Promise<void> => {
  const participant = await createParticipant({
    isConnected: OWNER_PARTICIPANT_DEFAULT_VALUES.isConnected,
    isOwner: OWNER_PARTICIPANT_DEFAULT_VALUES.isOwner,
    name: formData.get(CREATE_ROOM_FORM_KEYS.ownerName),
  });

  const room = await createRoom({
    isRevealed: ROOM_DEFAULT_VALUES.isRevealed,
    mode: ROOM_DEFAULT_VALUES.mode,
    name: formData.get(CREATE_ROOM_FORM_KEYS.roomName),
    participants: [participant.id],
  });

  cookies().set(ROOM_ID_COOKIE_NAME, room.id);
  redirect(nextRoutes.getRoom(room.id));
};

export const joinRoomAction = async (formData: FormData): Promise<void> => {
  const [{ participants }, participant] = await Promise.all([
    readRoom(formData.get(JOIN_ROOM_FORM_KEYS.roomId)),
    createParticipant({
      isConnected: REGULAR_PARTICIPANT_DEFAULT_VALUES.isConnected,
      isOwner: REGULAR_PARTICIPANT_DEFAULT_VALUES.isOwner,
      name: formData.get(JOIN_ROOM_FORM_KEYS.participantName),
    }),
  ]);

  const room = await updateRoom(formData.get(JOIN_ROOM_FORM_KEYS.roomId), {
    participants: [...participants, participant.id],
  });

  cookies().set(ROOM_ID_COOKIE_NAME, room.id);
  redirect(nextRoutes.getRoom(room.id));
};
