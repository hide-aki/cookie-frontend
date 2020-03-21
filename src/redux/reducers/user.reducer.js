import { SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED } from '../types';

const initialState = {
  authenticated: false,
  credentials: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        credentials: {
          ...state.credentials,
          ...action.payload
        }
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    default:
      return state;
  }
};
