import React from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import Button from '@material-ui/core/Button';

// config
import menus from './menus';

export default () => (
  <div style={{ flexGrow: 1 }}>
    {menus.map((menu, index) => (
      <Button key={index} color='inherit' component={Link} to={menu.path}>
        {menu.label}
      </Button>
    ))}
  </div>
);
