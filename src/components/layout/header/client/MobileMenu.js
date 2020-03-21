import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';

// config
import menus from './menus';

const useStyles = makeStyles(theme => ({
  menuIcon: {
    marginRight: theme.spacing(2)
  },
  drawerPaper: {
    width: 250
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const result = (
    <Fragment>
      <IconButton
        aria-label='account of current user'
        aria-controls='authentication-menu'
        aria-haspopup='true'
        color='inherit'
        className={classes.menuIcon}
        onClick={handleToggle}
      >
        <MenuIcon color='inherit' />
      </IconButton>
      <Drawer
        anchor='left'
        open={open}
        onClose={handleToggle}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleToggle}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <Divider />

        <List>
          {menus.map((menu, index) => (
            <ListItem key={index} button component={Link} to={menu.path}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );

  return result;
};
