export const nextRoutes = {
  getCreateRoom: (): string => '/',
  getJoinRoom: (id: string): string => `/rooms/${id}/join`,
  getRoom: (id: string): string => `/rooms/${id}`,
};

export const mutationKeys = {
  getCreateRoom: (): string => 'create-room',
  getJoinRoom: (id?: string): [string, string | undefined] => ['join-room', id],
};
