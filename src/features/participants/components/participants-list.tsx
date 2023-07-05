'use client';

import { css, cx } from 'styled-system/css';
import { hstack, stack } from 'styled-system/patterns';
import type { ReadRoomOutputSchema } from 'features/rooms';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useReadManyParticipants } from 'features/participants/client';
import { useSubscribeRoom } from 'features/rooms/hooks';

type ParticipantsListProps = {
  room: ReadRoomOutputSchema;
};

export const ParticipantsList = ({ room }: ParticipantsListProps): JSX.Element => {
  const [parent] = useAutoAnimate();

  const { data: realTimeRoom } = useSubscribeRoom(room.id, {
    fallbackData: room,
  });

  const { data: participants } = useReadManyParticipants(realTimeRoom?.participants, {
    keepPreviousData: true,
  });

  return (
    <ul ref={parent} className={stack({ flex: '1', gap: '2' })}>
      {participants?.map(({ id, name, isConnected, isOwner }) => (
        <li
          key={id}
          className={cx(
            hstack({ bg: 'slate.200', gap: '4', h: '1/6', p: '4', rounded: 'lg' }),
            css({
              '&[data-connected="false"]': {
                opacity: '0.5',
              },
            }),
          )}
          data-connected={isConnected}
        >
          {name} {isOwner ? '(Owner)' : null}
        </li>
      ))}
    </ul>
  );
};
