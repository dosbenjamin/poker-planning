import type PocketBase from 'pocketbase';
import { createContext } from 'react';

export type PocketBaseContext = PocketBase;
export const PocketBaseContext = createContext<PocketBaseContext | null>(null);
