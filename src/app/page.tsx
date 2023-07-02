import { CreateRoomForm } from 'features/rooms/client';
import { container } from 'styled-system/patterns';
import { styled } from 'styled-system/jsx';

export const metadata = {
  title: 'Create a new room',
};

const HomePage = (): JSX.Element => (
  <main className={container()}>
    <styled.h1 textStyle="heading.page">Create a new room</styled.h1>
    <CreateRoomForm />
  </main>
);

export default HomePage;
