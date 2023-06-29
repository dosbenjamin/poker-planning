'use client';

import { PocketBaseContext, pocketbase } from 'libs/pocketbase/client';
import type { PropsWithChildren } from 'react';

type PocketBaseProviderProps = PropsWithChildren;

export const PocketBaseProvider = (props: PocketBaseProviderProps): JSX.Element => (
  <PocketBaseContext.Provider value={pocketbase} {...props} />
);
