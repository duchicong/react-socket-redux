import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

  // create saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  // create and configure reducers and middleware
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(...middlewares);
    },
    // preloadedState,
    // enhancers: []
  });

  sagaMiddleware.run(rootSaga);

  export default store;