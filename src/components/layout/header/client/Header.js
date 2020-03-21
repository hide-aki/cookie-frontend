import React from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Components
import UserHeader from '../UserHeader';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  navbarDesktop: {
    width: 90,
    color: 'inherit',
    textDecoration: 'none'
  },
  navbarMobile: {
    flexGrow: 1,
    color: 'inherit',
    textDecoration: 'none'
  }
});

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          {!matches && <MobileMenu />}
          <Typography
            variant='h6'
            component={Link}
            to='/'
            className={matches ? classes.navbarDesktop : classes.navbarMobile}
          >
            Cookie
          </Typography>

          {matches && <DesktopMenu />}
          <UserHeader />
        </Toolbar>
      </AppBar>
    </div>
  );
};
