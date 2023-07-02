import type { ParticipantsRecord } from 'shared';

export const REGULAR_PARTICIPANT_DEFAULT_VALUES = Object.freeze<
  Required<Pick<ParticipantsRecord, 'isConnected' | 'isOwner'>>
>({
  isConnected: true,
  isOwner: false,
});

export const OWNER_PARTICIPANT_DEFAULT_VALUES = Object.freeze<
  Required<Pick<ParticipantsRecord, 'isConnected' | 'isOwner'>>
>({
  isConnected: true,
  isOwner: true,
});
