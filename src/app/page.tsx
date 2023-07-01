import { FormControl, FormInput, FormLabel, styled } from 'styled-system/jsx';
import { container } from 'styled-system/patterns';

const HomePage = (): JSX.Element => {
  return (
    <main className={container()}>
      <styled.h1 textStyle="heading.page">Create a room</styled.h1>
      <form>
        <FormControl>
          <FormLabel>Display name</FormLabel>
          <FormInput placeholder="Insert a name for your new room" />
        </FormControl>
      </form>
    </main>
  );
};

export default HomePage;
