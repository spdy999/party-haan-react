import { SET_PARTIES } from './action';
import { IParty, IPartyState } from './state';

export interface Action {
  type: 'SET_PARTIES';
  payload: IParty[];
}

export interface PartyRespBody {
  body: IParty[];
}

const partyReducer = (state: IPartyState, action: Action): IPartyState => {
  switch (action.type) {
    case SET_PARTIES:
      return {
        ...state,
        parties: action.payload,
      };
    default:
      return state;
  }
};

export default partyReducer;
