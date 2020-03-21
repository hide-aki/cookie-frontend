import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import uiReducer from './reducers/ui.reducer';
import userReducer from './reducers/user.reducer';
import articleReducer from './reducers/article.reducer';

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  ui: uiReducer,
  user: userReducer,
  article: articleReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
