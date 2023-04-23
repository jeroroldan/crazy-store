import { createContext } from 'react';

interface ContextProps{
  hasBeenSeen: boolean,
  showState: (value: boolean) => void
}
export const OfferContext = createContext({} as ContextProps);