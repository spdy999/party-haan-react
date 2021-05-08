import { SET_REGISTER } from './action-types';
import { RegisterStateI } from './state';

export interface Action {
  type: 'SET_REGISTER';
  payload: any;
}

export interface RegisterRespBody {
  body: {
    access_token: string;
  };
}

const registerReducer = (
  state: RegisterStateI,
  action: Action,
): RegisterStateI => {
  switch (action.type) {
    case SET_REGISTER:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default registerReducer;
