import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import HomePage from './homepage/HomePage';
import BlogPage from './blog/BlogPage';

// layout
import Header from '../../components/layout/header/client/Header';
import Footer from '../../components/layout/footer/Footer';

export default () => (
  <Fragment>
    <Header />
    <div className='client-app' style={{ marginTop: 64, marginBottom: 32 }}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/blog' component={BlogPage} />
      </Switch>
    </div>
    <Footer />
  </Fragment>
);
