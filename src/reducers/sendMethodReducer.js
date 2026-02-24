import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "send_method";
const storedSendMethod = localStorage.getItem(STORAGE_KEY);
const initialState = storedSendMethod || "sms";

export const sendMethodSlice = createSlice({
  name: "sendMethod",
  initialState,
  reducers: {
    changeSendMethod: (state, action) => {
      localStorage.setItem(STORAGE_KEY, action.payload);
      return action.payload;
    },
  },
});

export const { changeSendMethod } = sendMethodSlice.actions;

export default sendMethodSlice.reducer;
