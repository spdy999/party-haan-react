import { createContext, useContext, useEffect, useReducer } from 'react';
import partyInitialState, { IPartyState } from './state';
import partyReducer from './reducer';
import { IParty } from './state';
import { SET_PARTIES } from './action';
import axios from 'axios';

interface IJoinPartyPayload {
  partyId: number;
}

interface IContextProps {
  state: IPartyState;
  joinParty: (payload: IJoinPartyPayload) => Promise<void>;
}

const PartyContext = createContext({} as IContextProps);

export function PartyContextWrapper({ children }: { children: any }) {
  const [state, dispatch] = useReducer(partyReducer, partyInitialState);

  const getParties = async (): Promise<void> => {
    const { data }: { data: IParty[] } = await axios.get('/parties');
    dispatch({ type: SET_PARTIES, payload: data });
  };
  const accessToken = localStorage.getItem('access_token') || '';
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const joinParty = async (payload: IJoinPartyPayload): Promise<void> => {
    try {
      await axios.post('/parties/join', payload, config);
      await getParties();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    void getParties();
  }, []);

  return (
    <PartyContext.Provider value={{ state, joinParty }}>
      {children}
    </PartyContext.Provider>
  );
}

export function usePartyContext() {
  return useContext(PartyContext);
}
