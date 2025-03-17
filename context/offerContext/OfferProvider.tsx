import { FC, useReducer, ReactNode } from "react";
import { OfferContext, offerReducer } from "./";

export interface OfferState {
  hasBeenSeen: boolean;
}

interface Props {
  children: ReactNode;
}

const OFFER_INITIAL_STATE: OfferState = {
  hasBeenSeen: false,
};

export const OfferProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(offerReducer, OFFER_INITIAL_STATE);

  const showState = (value: boolean) => {
    console.log(value)
    dispatch({ type: "[Offer]- update state", payload: value });
  };

  return (
    <OfferContext.Provider
      value={{
        ...state,
        showState,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
};

export default OfferProvider;
