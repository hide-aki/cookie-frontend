import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../pages/backend/Layout';

const getTitle = path => {
  const type = path.split('/admin/')[1];
  switch (type) {
    case '':
      return 'Dashboard';
    case 'users':
      return 'Manage User';
    case 'recipes':
      return 'Manage Recipe';
    case 'review-recipes':
      return 'Manage Review';
    case 'blogs':
      return 'Blogs';
    default:
      return 'Dashboard';
  }
};

export default ({ area, component: Component, ...rest }) => {
  const user = useSelector(state => state.user);

  const { authenticated } = user;
  const { path } = rest;
  const title = getTitle(path);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Layout title={title}>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={`/${area}/login`} />
        )
      }
    />
  );
};
