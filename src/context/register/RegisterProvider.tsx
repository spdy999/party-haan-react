import { createContext, useContext, useReducer } from 'react';
import registerInitialState, { RegisterStateI } from './state';
import registerReducer from './reducer';
import axios from 'axios';

export interface IRegisterPayload {
  email: string;
  password: string;
}
export interface IRegisterResp {
  access_token: string;
  userId: number;
}

interface IContextProps {
  state: RegisterStateI;
  register: (payload: IRegisterPayload) => Promise<void>;
}

const RegisterContext = createContext({} as IContextProps);

export function RegisterContextWrapper({ children }: { children: any }) {
  const [state] = useReducer(registerReducer, registerInitialState);

  const register = async (payload: IRegisterPayload): Promise<void> => {
    const { data }: { data: IRegisterResp } = await axios.post(
      '/auth/signup',
      payload,
    );
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('userId', data.userId.toString());
  };

  return (
    <RegisterContext.Provider value={{ state, register }}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegisterContext() {
  return useContext(RegisterContext);
}
