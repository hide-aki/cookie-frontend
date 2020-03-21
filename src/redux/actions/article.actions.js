import {
  ADD_NEW_ARTICLE,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_SUCCESS,
  SET_ARTICLES
} from '../types';
import { apiUrl } from '../../utils/config';
import axios from 'axios';

export const addNewArticle = article => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
  const { name, shortDescription, content, image } = article;
  const formData = new FormData();
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };

  formData.append('image', image);
  formData.append('name', name);
  formData.append('shortDescription', shortDescription);
  formData.append('content', content);

  dispatch({ type: LOADING_UI });
  axios
    .post(`${apiUrl}/articles`, formData, config)
    .then(res => {
      dispatch({ type: LOADING_SUCCESS });
      dispatch({ type: ADD_NEW_ARTICLE, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
      console.log(err.response.data);
    });
};

export const getAllArticle = (page = 1, limit = 4) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${apiUrl}/articles/?${page}&limit=${limit}`)
    .then(res => {
      dispatch({ type: LOADING_SUCCESS });
      dispatch({ type: SET_ARTICLES, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
