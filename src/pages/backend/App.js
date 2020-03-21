import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/authentication/PrivateRoute';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
// Redux
import store from '../../redux/store';
// Actions
import { logout, getUserData } from '../../redux/actions/user.actions';
// Pages
import BlogPage from './blog/BlogPage';
import RecipePage from './recipe/RecipePage';
import ReviewRecipePage from './review-recipe/ReviewRecipePage';
import HomePage from './homepage/HomePage';
import UserPage from './user/UserPage';
import LoginPage from './authentication/LoginPage';
import SignupPage from './authentication/Signup';

const area = 'admin';

const token = localStorage.getItem('FBIdToken');
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout());
    window.location.href = '/admin/login';
  } else {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    store.dispatch(getUserData());
  }
}

export default () => {
  return (
    <Switch>
      <PrivateRoute area='admin' exact path='/admin' component={HomePage} />
      <PrivateRoute
        area={area}
        exact
        path='/admin/blogs'
        component={BlogPage}
      />
      <PrivateRoute
        area={area}
        exact
        path='/admin/recipes'
        component={RecipePage}
      />
      <PrivateRoute
        area={area}
        exact
        path='/admin/review-recipes'
        component={ReviewRecipePage}
      />
      <PrivateRoute
        area={area}
        exact
        path='/admin/users'
        component={UserPage}
      />
      <Route path='/admin/login' component={LoginPage} />
      <Route path='/admin/signup' component={SignupPage} />
    </Switch>
  );
};
