import { createContext, useContext, useReducer } from 'react';
import loginInitialState, { LoginStateI } from './state';
import loginReducer from './reducer';
import axios from 'axios';
import { SET_LOGIN } from './action-types';

export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResp {
  access_token: string;
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
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);

  const login = async (payload: ILoginPayload): Promise<void> => {
    const { data }: { data: ILoginResp } = await axios.post(
      '/auth/login',
      payload,
    );

    dispatch({ type: SET_LOGIN, payload: data });
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
