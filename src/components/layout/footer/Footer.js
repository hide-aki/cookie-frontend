import React from 'react';
import clsx from 'clsx';
// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Components
import Copyright from './Copyright';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

export default ({ open }) => {
  const classes = useStyles();

  return (
    <footer
      className={clsx(classes.footer, {
        [classes.appBarShift]: open
      })}
    >
      <Typography variant='body1'>My stickey footer can found here</Typography>
      <Copyright />
    </footer>
  );
};
