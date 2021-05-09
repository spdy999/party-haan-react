import React from 'react';
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { AppWrapper } from './context/state';
import { PartyContextWrapper } from './context/party/PartyProvider';
import Party from './components/Party';
import { LoginContextWrapper } from './context/login/LoginProvider';
import Register from './components/Register';
import { RegisterContextWrapper } from './context/register/RegisterProvider';
import CreateParty from './components/party/CreateParty';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <AppWrapper>
        <RegisterContextWrapper>
          <LoginContextWrapper>
            <PartyContextWrapper>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    News
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
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
