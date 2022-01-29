import {
  createSlice,
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import socket from "socket.io-client";

// import socket from "../socket/socket";

const initialState = {
  socket: "",
  requestData: "",
  messageData: "",
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    assignSocket(state, action) {
      console.log(action.payload, "payload");
      return { ...state, socket: action.payload };
    },
  },
});

export default socketSlice.reducer;
export const socketActions = socketSlice.actions;
