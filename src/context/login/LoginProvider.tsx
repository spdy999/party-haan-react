import { createContext, useContext, useReducer } from 'react';
import loginInitialState, { LoginStateI } from './state';
import loginReducer from './reducer';
import axios from 'axios';

export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResp {
  access_token: string;
  userId: number;
}
export interface IDispatch {
  dispatch: () => void;
}

interface IContextProps {
  state: LoginStateI;
  login: (payload: ILoginPayload) => Promise<void>;
}

const LoginContext = createContext({} as IContextProps);

export function LoginContextWrapper({ children }: { children: any }) {
  const [state] = useReducer(loginReducer, loginInitialState);

  const login = async (payload: ILoginPayload): Promise<void> => {
    const { data }: { data: ILoginResp } = await axios.post(
      '/auth/login',
      payload,
    );
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('userId', data.userId.toString());
  };

  return (
    <LoginContext.Provider value={{ state, login }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
