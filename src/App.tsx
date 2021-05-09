import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { AppWrapper } from './context/AppProvider';
import { PartyContextWrapper } from './context/party/PartyProvider';
import Party from './components/Party';
import { LoginContextWrapper } from './context/login/LoginProvider';
import Register from './components/Register';
import { RegisterContextWrapper } from './context/register/RegisterProvider';
import CreateParty from './components/party/CreateParty';
import CustomAppBar from './components/CustomAppBar';

const App = () => {
  return (
    <div className="App">
      <AppWrapper>
        <RegisterContextWrapper>
          <LoginContextWrapper>
            <PartyContextWrapper>
              <CustomAppBar />
              <BrowserRouter>
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props) => <Party {...props} />}
                  />
                  <Route
                    path="/parties/create"
                    render={(props) => <CreateParty {...props} />}
                  />
                  <Route
                    path="/login"
                    render={(props) => <Login {...props} />}
                  />
                  <Route
                    path="/register"
                    render={(props) => <Register {...props} />}
                  />
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
