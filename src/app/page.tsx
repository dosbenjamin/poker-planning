import { css } from 'styled-system/css';

const HomePage = (): JSX.Element => {
  return (
    <main
      className={css({
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'screen',
        justifyContent: 'center',
      })}
    >
      <h1>Homepage</h1>
      <h2>Coming soon!</h2>
    </main>
  );
};

export default HomePage;
