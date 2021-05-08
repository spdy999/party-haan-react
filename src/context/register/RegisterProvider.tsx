import { createContext, useContext, useReducer } from 'react';
import registerInitialState, { RegisterStateI } from './state';
import registerReducer from './reducer';
import axios from 'axios';
import { SET_REGISTER } from './action-types';

export interface IRegisterPayload {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface IRegisterResp {
  access_token: string;
}

interface IContextProps {
  state: RegisterStateI;
  register: (payload: IRegisterPayload) => Promise<void>;
}

const RegisterContext = createContext({} as IContextProps);

export function RegisterContextWrapper({ children }: { children: any }) {
  const [state, dispatch] = useReducer(registerReducer, registerInitialState);

  const register = async (payload: IRegisterPayload): Promise<void> => {
    const { data }: { data: IRegisterResp } = await axios.post(
      '/auth/register',
      payload,
    );

    dispatch({ type: SET_REGISTER, payload: data });
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
