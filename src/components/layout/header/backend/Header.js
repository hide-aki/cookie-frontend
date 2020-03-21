import React from 'react';
import clsx from 'clsx';
import useStyles from '../../../../utils/styles';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

// components
import UserHeader from '../UserHeader';

export default ({ open, handleDrawerOpen, title }) => {
  const classes = useStyles();
  const handleOpen = () => handleDrawerOpen();

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleOpen}
          edge='start'
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          {title}
        </Typography>
        <UserHeader />
      </Toolbar>
    </AppBar>
  );
};
