import React, { useState, Fragment } from 'react';
import useStyles from '../../utils/styles';
// MUI stuff
import CssBaseline from '@material-ui/core/CssBaseline';
// components
import Header from '../../components/layout/header/backend/Header';
import Footer from '../../components/layout/footer/Footer';
import Sidebar from '../../components/layout/sidebar/Sidebar';

export default ({ children, title }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Fragment>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} title={title} />
      <div className={classes.root}>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
      <Footer open={open} />
    </Fragment>
  );
};
