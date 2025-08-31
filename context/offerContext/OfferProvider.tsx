import React, { useReducer, useEffect, ReactNode } from "react";
import { OfferContext } from './OfferContext';

export interface OfferState {
  hasBeenSeen: boolean;
}

interface Props {
  children: ReactNode;
}

const OFFER_INITIAL_STATE: OfferState = {
  hasBeenSeen: false,
};

const offerReducer = (state: OfferState, action: { type: string }) => {
  switch (action.type) {
    case "SHOW_OFFER":
      return { ...state, hasBeenSeen: true };
    default:
      return state;
  }
};

export const OfferProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(offerReducer, OFFER_INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "SHOW_OFFER" });
  }, []);

  const showState = (value: boolean) => {
    dispatch({ type: "SHOW_OFFER" });
  };

  return (
    <OfferContext.Provider value={{ ...state, showState }}>
      {children}
    </OfferContext.Provider>
  );
};
export default OfferProvider;
