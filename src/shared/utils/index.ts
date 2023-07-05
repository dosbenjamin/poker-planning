export const nextRoutes = {
  getCreateRoom: (): string => '/',
  getJoinRoom: (roomId: string): string => `/rooms/${roomId}/join`,
  getRoom: (roomId: string): string => `/rooms/${roomId}`,
};

export const mutationKeys = {
  getCreateRoom: (): string => 'create-room',
  getJoinRoom: (roomId: string): [string, string] => ['join-room', roomId],
};

export const subscriptionKeys = {
  getSubscribeRoom: (roomId: string): [string, string] => ['subscribe-room', roomId],
};

export const queryKeys = {
  getReadManyParticipants: (participantIds: string[]): string[] => ['read-many-participants', ...participantIds],
};
