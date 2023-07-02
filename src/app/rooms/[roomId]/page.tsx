import { HStack, styled } from 'styled-system/jsx';
import { container, hstack } from 'styled-system/patterns';
import { CopyURLButton } from 'shared/client';
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
    <main className={container({ w: '2xl' })}>
      <header className={hstack()}>
        <div>
          <styled.h1 textStyle="heading.page" whiteSpace="nowrap" textOverflow="ellipsis" overflowX="hidden">
            {room.name}
          </styled.h1>
          <HStack textStyle="description.small">
            <CopyURLButton url={''} />
            <p>5 connected</p>
          </HStack>
        </div>
        <styled.div></styled.div>
      </header>
    </main>
  );
};

export default RoomPage;
