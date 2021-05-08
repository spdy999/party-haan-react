import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { AppWrapper } from './context/state';
import { PartyContextWrapper } from './context/party/PartyProvider';
import Party from './components/Party';
import { LoginContextWrapper } from './context/login/LoginProvider';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <LoginContextWrapper>
          <PartyContextWrapper>
            <BrowserRouter>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
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
        </LoginContextWrapper>
      </AppWrapper>
    </div>
  );
}

export default App;
