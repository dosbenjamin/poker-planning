import { PocketBaseContext } from 'lib/pocketbase/client';
import { useContext } from 'react';

export const usePocketBase = (): PocketBaseContext => {
  const context = useContext(PocketBaseContext);

  if (!context) {
    throw new Error('usePocketBase must be used within PocketBaseProvider');
  }

  return context;
};
