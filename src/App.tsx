import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { AppWrapper } from './context/state';
import { PartyContextWrapper } from './context/party/PartyProvider';
import Party from './components/Party';
import { LoginContextWrapper } from './context/login/LoginProvider';
import Register from './components/Register';
import { RegisterContextWrapper } from './context/register/RegisterProvider';

const App = () => {
  return (
    <div className="App">
      <AppWrapper>
        <RegisterContextWrapper>
          <LoginContextWrapper>
            <PartyContextWrapper>
              <BrowserRouter>
                <Switch>
                  <Route
                    path="/login"
                    render={(props) => <Login {...props} />}
                  />
                  <Route
                    path="/register"
                    render={(props) => <Register {...props} />}
                  />
                  <Route path="/" exact>
                    <Party />
                  </Route>
                  <Route path="/parties" exact>
                    <Party />
                  </Route>
                </Switch>
              </BrowserRouter>
            </PartyContextWrapper>
          </LoginContextWrapper>
        </RegisterContextWrapper>
      </AppWrapper>
    </div>
  );
};

export default App;
