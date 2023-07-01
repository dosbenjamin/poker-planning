'use server';

import { CREATE_ROOM_INPUT_NAMES, ROOM_ID_COOKIE_NAME } from 'features/rooms';
import { Collections, type ParticipantsResponse, type RoomsResponse } from 'lib/pocketbase';
import { cookies } from 'next/headers';
import { pocketbase } from 'lib/pocketbase/server';

export const createRoom = async (formData: FormData): Promise<void> => {
  const owner = await pocketbase.collection(Collections.Participants).create<ParticipantsResponse>({
    name: formData.get(CREATE_ROOM_INPUT_NAMES.ownerName),
  });

  const room = await pocketbase.collection(Collections.Rooms).create<RoomsResponse>({
    name: formData.get(CREATE_ROOM_INPUT_NAMES.roomName),
    owner: owner.id,
  });

  cookies().set(ROOM_ID_COOKIE_NAME, room.id);
};
