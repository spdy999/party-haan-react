import { createContext, useContext, useReducer } from 'react';
import appReducer from './reducer';
import appInitialState from './state';
import { IAppState } from './state';
interface IContextProps {
  state: IAppState;
}

const AppContext = createContext({} as IContextProps);

export function AppWrapper({ children }: { children: any }) {
  const [state] = useReducer(appReducer, appInitialState);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
