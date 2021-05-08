import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { AppWrapper } from './context/state';
import { PartyContextWrapper } from './context/party/PartyProvider';
import Party from './components/Party';

export interface IParty {
  capacity: number;
  id: number;
  imgUrl: string;
  name: string;
}

function App() {
  const getParties = async (): Promise<void> => {
    const { data }: { data: IParty[] } = await axios.get('/parties');
    console.log(data);
  };
  useEffect(() => {
    void getParties();
  }, []);
  return (
    <div className="App">
      <AppWrapper>
        {/* <LoginContextWrapper> */}
        <PartyContextWrapper>
          {/* <Component {...pageProps} /> */}
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/parties" exact>
                <Party />
              </Route>
            </Switch>
          </BrowserRouter>
        </PartyContextWrapper>
        {/* </LoginContextWrapper> */}
      </AppWrapper>
    </div>
  );
}

export default App;
