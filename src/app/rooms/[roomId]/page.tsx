import { Flex, styled } from 'styled-system/jsx';
import { container, hstack } from 'styled-system/patterns';
import { ParticipantsList } from 'features/participants/client';
import { RoomPageParamsSchema } from 'features/rooms';
import { readRoom } from 'features/rooms/server';

type RoomPageParams = {
  roomId: string;
};

type RoomPageProps = {
  params: RoomPageParams;
};

const RoomPage = async ({ params }: RoomPageProps): Promise<JSX.Element> => {
  const { roomId } = RoomPageParamsSchema.parse(params);
  const room = await readRoom(roomId);

  return (
    <main className={container({ h: 'md', w: '2xl' })}>
      <header className={hstack()}>
        <div>
          <styled.h1 textStyle="heading.page" whiteSpace="nowrap" textOverflow="ellipsis" overflowX="hidden">
            {room.name}
          </styled.h1>
        </div>
        <styled.div></styled.div>
      </header>
      <Flex flex="1" gap="4">
        <styled.div flexBasis="2/3">Game</styled.div>
        <ParticipantsList room={room} />
      </Flex>
    </main>
  );
};

export default RoomPage;
