export interface RegisterStateI {
  loggedIn: boolean;
  registerMessage: string;
}

const registerInitialState: RegisterStateI = {
  loggedIn: false,
  registerMessage: 'Register msg initial state!',
};

export default registerInitialState;
