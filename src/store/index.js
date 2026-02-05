import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import selectedDevicesReducer from '../reducers/selectedDevicesReducer';
import sendMethodReducer from '../reducers/sendMethodReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    selectedDevices: selectedDevicesReducer,
    sendMethod: sendMethodReducer,
  },
});

store.subscribe(() => console.log(store.getState()));