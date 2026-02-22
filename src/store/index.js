import { configureStore } from '@reduxjs/toolkit';
import sendMethodReducer from '../reducers/sendMethodReducer';

export const store = configureStore({
  reducer: {
    sendMethod: sendMethodReducer,
  },
});

store.subscribe(() => console.log(store.getState()));