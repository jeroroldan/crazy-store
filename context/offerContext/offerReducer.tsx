import { type } from "os"
import { OfferState } from "."

export interface showOfferMessage {
  hasBeenSeen: boolean;
}



type CartActionType =  
    | { type: '[Offer]- update state' , payload: boolean  }
  
  
  


export const offerReducer = ( state: OfferState, action: CartActionType ): OfferState => {

  switch (action.type) {
    case '[Offer]- update state':
      return {
        ...state,
        hasBeenSeen: action.payload
      }
  }

}
