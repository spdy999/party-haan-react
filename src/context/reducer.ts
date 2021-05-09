import { SET_APP_BAR_NAME } from './action-types';
import { IAppState } from './state';

export interface Action {
  type: 'SET_APP_BAR_NAME';
  payload: any;
}

export interface RegisterRespBody {
  body: {
    access_token: string;
  };
}

const appReducer = (state: IAppState, action: Action): IAppState => {
  switch (action.type) {
    case SET_APP_BAR_NAME:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default appReducer;
