import { FC, useReducer } from 'react';
import { OfferContext, offerReducer } from './';
import { JsxElement } from 'typescript';




export interface OfferState {
  hasBeenSeen: boolean;
}

interface Props {
  children: JSX.Element | JsxElement[]
}




const OFFER_INITIAL_STATE: OfferState = {
  hasBeenSeen: false,
}

export const OfferProvider: FC<Props> = ( { children }: any ) => {

  

const [state, dispatch] = useReducer(offerReducer, OFFER_INITIAL_STATE)

  const showState = (value: boolean) => {
    dispatch({ type:'[Offer]- update state', payload: value})
  }


  return (
    <OfferContext.Provider value={{
      ...state,
      showState
      
    }}>
      { children }
    </OfferContext.Provider>
  )
}
export default OfferProvider;