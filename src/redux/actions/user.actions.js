import {
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED
} from '../types';
import { apiUrl } from '../../utils/config';
import axios from 'axios';

export const login = (loginInfo, history) => dispatch => {
  dispatch({ type: LOADING_UI });

  axios
    .post(`${apiUrl}/auth/login`, loginInfo)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/admin');
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logout = () => dispatch => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const signup = (signupInfo, history) => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_UI });
  axios
    .post(`${apiUrl}/auth/signup`, signupInfo)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/admin/');
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', token);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export const getUserData = () => dispatch => {
  dispatch({ type: SET_AUTHENTICATED });
  axios
    .get(`${apiUrl}/users`)
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
