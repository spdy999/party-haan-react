import { createContext, Dispatch, useContext, useReducer } from 'react';
import appReducer from './reducer';
import appInitialState from './state';
import { IAppState } from './state';
import { IAppAction } from './reducer';
interface IContextProps {
  state: IAppState;
  dispatch: Dispatch<IAppAction>;
}

const AppContext = createContext({} as IContextProps);

export function AppWrapper({ children }: { children: any }) {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
