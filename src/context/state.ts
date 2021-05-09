export interface IAppState {
  appBarTitle: string;
  lastPage: string;
}

const appInitialState: IAppState = {
  appBarTitle: 'Title',
  lastPage: '',
};

export default appInitialState;
