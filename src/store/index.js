import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const setupStore = () => {
  const middlewares = [thunk];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
};

export default setupStore;
