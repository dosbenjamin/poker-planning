import { CreateRoomForm } from 'features/rooms/client';
import { container } from 'styled-system/patterns';
import { en } from 'locales';
import { styled } from 'styled-system/jsx';

export const metadata = {
  title: en.rooms.create.title,
};

const CreateRoomPage = (): JSX.Element => (
  <main className={container()}>
    <styled.h1 textStyle="heading.page">{en.rooms.create.title}</styled.h1>
    <CreateRoomForm />
  </main>
);

export default CreateRoomPage;
