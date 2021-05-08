export interface LoginStateI {
  loggedIn: boolean;
  loginMessage: string;
}

const loginInitialState: LoginStateI = {
  loggedIn: false,
  loginMessage: 'Login msg initial state!',
};

export default loginInitialState;
