import { ADD_NEW_ARTICLE, SET_ARTICLES } from '../types';

const initialState = {
  articles: [],
  article: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, ...action.payload]
      };
    default:
      return state;
  }
};
