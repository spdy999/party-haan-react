import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { useAppContext } from '../context/AppProvider';
import { ArrowBackIos } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

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

  return (
    <AppBar position="static">
      <Toolbar>
        {lastPage !== '' && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push(lastPage)}
          >
            <ArrowBackIos />
          </IconButton>
        )}
        <Typography variant="h6" className={classes.title}>
          {appBarTitle}
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};
export default CustomAppBar;
