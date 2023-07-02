import { JoinRoomForm } from 'features/rooms/client';
import { JoinRoomPageParamsSchema } from 'features/rooms';
import { container } from 'styled-system/patterns';
import { en } from 'locales';
import { readRoom } from 'features/rooms/server';
import { styled } from 'styled-system/jsx';

type JoinRoomPageParams = {
  roomId: string;
};

type JoinRoomPageProps = {
  params: JoinRoomPageParams;
};

const JoinRoomPage = async ({ params }: JoinRoomPageProps): Promise<JSX.Element> => {
  const { roomId } = JoinRoomPageParamsSchema.parse(params);
  const room = await readRoom(roomId);

  return (
    <styled.main className={container()}>
      <header>
        <styled.h1 textStyle="heading.page">{en.rooms.join.title}</styled.h1>
        <styled.h2 textStyle="description.small" color="slate.600">
          {en.rooms.join.roomName} <styled.strong fontVariationSettings='"wght" 600'>{room.name}</styled.strong>
        </styled.h2>
      </header>
      <JoinRoomForm />
    </styled.main>
  );
};

export default JoinRoomPage;
