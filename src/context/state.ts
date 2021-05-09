export interface IAppState {
  loggedIn: boolean;
  registerMessage: string;
  appBarTitle: string;
}

const appInitialState: IAppState = {
  loggedIn: false,
  registerMessage: 'Register msg initial state!',
  appBarTitle: 'Title',
};

export default appInitialState;
