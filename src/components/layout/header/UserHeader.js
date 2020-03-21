import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

// icons
import NotificationsIcon from '@material-ui/icons/Notifications';

// actions
import { logout } from '../../../redux/actions/user.actions';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#fff'
  }
});

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const {
    authenticated,
    credentials: { imageUrl, username }
  } = user;

  const handleOpen = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogin = () => {};

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  const result = authenticated ? (
    <Fragment>
      <IconButton color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Tooltip placement='top' title={username ? username : ''}>
        <IconButton
          onClick={handleOpen}
          aria-label='account of current user'
          aria-controls='authentication-menu'
          aria-haspopup='true'
        >
          <Avatar
            alt={username}
            src={imageUrl}
            className={username ? classes.avatar : null}
          />
        </IconButton>
      </Tooltip>

      <Menu
        id='authentication-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        elevation={0}
        getContentAnchorEl={null}
      >
        <MenuItem>Edit profile</MenuItem>
        <MenuItem button onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  ) : (
    <Button color='inherit' onClick={handleLogin}>
      Login
    </Button>
  );

  return result;
};
