import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import evsearchReducer from '../features/evSearch/evsearchSlice';

const logger = createLogger();

// turn off redux-logger in production
const store = import.meta.env.PROD
  ? configureStore({
      reducer: {
        evsearchResult: evsearchReducer,
      },
    })
  : configureStore({
      reducer: {
        evsearchResult: evsearchReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
