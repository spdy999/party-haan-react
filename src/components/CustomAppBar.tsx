import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core';
import { useAppContext } from '../context/AppProvider';
import { ArrowBackIos } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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

const CustomAppBar = () => {
  const classes = useStyles();
  const { state } = useAppContext();
  const { appBarTitle, lastPage } = state;
  const history = useHistory();
  const location = useLocation();
  const currentPathName = location.pathname;
  const isLoginPage = currentPathName === '/login';
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userId');
    history.push('/login');
  };

  const access_token = localStorage.getItem('access_token');
  return (
    <AppBar position="static">
      <Toolbar>
        {!isLoginPage && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push(lastPage)}
          >
            {lastPage !== '' && <ArrowBackIos />}
            {currentPathName === '/' && <Avatar src="/images/logo.png" />}
          </IconButton>
        )}
        <Typography variant="h6" className={classes.title}>
          {appBarTitle}
        </Typography>
        {access_token && !isLoginPage && (
          <Button color="inherit" onClick={logout}>
            LOGOUT
          </Button>
        )}
        {!access_token && !isLoginPage && (
          <Button color="inherit" onClick={() => history.push('/login')}>
            LOGIN
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default CustomAppBar;
