import { SET_LOGIN } from './action-types';
import { LoginStateI } from './state';

export interface Action {
  type: 'SET_LOGIN';
  payload: any;
}

export interface LoginRespBody {
  body: {
    access_token: string;
  };
}

const loginReducer = (state: LoginStateI, action: Action): LoginStateI => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
