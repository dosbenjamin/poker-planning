import 'styles/globals.css';
import { PocketBaseProvider } from 'lib/pocketbase/client';
import type { PropsWithChildren } from 'react';
import { center } from 'styled-system/patterns';
import { inter } from 'styles/fonts';

type RootLayoutProps = PropsWithChildren;

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => (
  <html lang="en" className={inter.variable}>
    <body className={center({ bg: 'slate.900', fontFamily: 'body', h: 'screen' })}>
      <PocketBaseProvider>{children}</PocketBaseProvider>
    </body>
  </html>
);

export default RootLayout;
