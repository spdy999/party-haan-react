export interface LoginStateI {
  loggedIn: boolean;
  //   username: string;
  //   message: string;
  loginMessage: string;
  On: () => any;
}

const loginInitialState: LoginStateI = {
  loggedIn: false,
  //   username: '',
  //   message: 'Test from login state',
  loginMessage: 'Login msg initial state!',
  On: () => null,
};

export default loginInitialState;
