import { SET_APP_BAR_NAME } from './action-types';
import { IAppState } from './state';

export interface IAppAction {
  type: 'SET_APP_BAR_NAME';
  payload: IAppState;
}

export interface RegisterRespBody {
  body: {
    access_token: string;
  };
}

const appReducer = (state: IAppState, action: IAppAction): IAppState => {
  switch (action.type) {
    case SET_APP_BAR_NAME:
      return {
        ...state,
        appBarTitle: action.payload.appBarTitle,
      };
    default:
      return state;
  }
};

export default appReducer;
