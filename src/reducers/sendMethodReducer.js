import { createSlice } from "@reduxjs/toolkit";

const initialState = "sms";

export const sendMethodSlice = createSlice({
  name: "sendMethod",
  initialState,
  reducers: {
    changeSendMethod: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSendMethod } = sendMethodSlice.actions;

export default sendMethodSlice.reducer;
