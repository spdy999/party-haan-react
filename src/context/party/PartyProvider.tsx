import { createContext, useContext, useEffect, useReducer } from 'react';
import partyInitialState from './state';
import partyReducer from './reducer';
import { IParty } from './state';
import { SET_PARTIES } from './action';
import axios from 'axios';

const PartyContext = createContext(partyInitialState);

export function PartyContextWrapper({ children }: { children: any }) {
  const [state, dispatch] = useReducer(partyReducer, partyInitialState);

  const getParties = async (): Promise<void> => {
    await axios.get('http://localhost:4000/parties');
    const { data }: { data: IParty[] } = await axios.get(
      'http://localhost:4000/parties',
    );
    dispatch({ type: SET_PARTIES, payload: data });
  };
  useEffect(() => {
    void getParties();
  }, []);

  return (
    <PartyContext.Provider value={state}>{children}</PartyContext.Provider>
  );
}

export function usePartyContext() {
  return useContext(PartyContext);
}
