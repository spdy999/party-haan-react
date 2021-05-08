import { LOGIN } from './action';
import { LoginStateI } from './state';

export interface Action {
  type: 'LOGIN';
  payload: any;
}

export interface LoginRespBody {
  body: {
    access_token: string;
  };
}

const loginReducer = (state: LoginStateI, action: Action): LoginStateI => {
  switch (action.type) {
    case LOGIN:
      console.log('Login reducer');
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
