import {
  LOADING_UI,
  LOADING_SUCCESS,
  CLEAR_ERRORS,
  SET_ERRORS,
  STOP_LOADING_UI
} from '../types';

const initialState = {
  loading: false,
  success: false,
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
        success: false
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
        success: false
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      };
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};
