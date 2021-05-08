import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import loginInitialState from './state';
import loginReducer from './reducer';
// import { LoginStateI } from './state';
// import { LoginRespBody } from './reducer';
// import axios from 'axios';
import { LOGIN } from './action';

const LoginContext = createContext(loginInitialState);

export function LoginContextWrapper({ children }: { children: any }) {
  const [loginMessage, setLoginMessage] = useState<string>(
    loginInitialState.loginMessage,
  );
  const [loggedIn] = useState<boolean>(loginInitialState.loggedIn);
  const [, dispatch] = useReducer(loginReducer, loginInitialState);

  useEffect(() => {
    setLoginMessage('Hello from use effect');
  }, []);

  return (
    <LoginContext.Provider
      value={{
        loginMessage,
        loggedIn,
        On: () => dispatch({ type: LOGIN, payload: {} }),
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
