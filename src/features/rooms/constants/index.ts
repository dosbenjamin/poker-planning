import { RoomsModeOptions, type RoomsRecord } from 'shared';

export const ROOM_ID_COOKIE_NAME = 'room_id';

export const CREATE_ROOM_FORM_KEYS = Object.freeze({
  ownerName: 'ownerName',
  roomName: 'roomName',
});

export const JOIN_ROOM_FORM_KEYS = Object.freeze({
  participantName: 'participantName',
  roomId: 'roomId',
});

export const ROOM_DEFAULT_VALUES = Object.freeze<Required<Pick<RoomsRecord, 'isRevealed' | 'mode'>>>({
  isRevealed: false,
  mode: RoomsModeOptions.Point,
});
