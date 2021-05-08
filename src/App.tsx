import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

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
      <BrowserRouter>
        {/* <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/user/:id">User</Link>
          </div>
        </nav> */}
        <Switch>
          {/* <Route path="/user/:id">
            <User />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
