import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import formDataReducers from "./formData";
import socketReducers from "./socket";
import loadingReducers from "./loading";

const store = configureStore({
  reducer: {
    user: userReducer,
    formData: formDataReducers,
    socket: socketReducers,
    loading: loadingReducers,
  },
});

export default store;
