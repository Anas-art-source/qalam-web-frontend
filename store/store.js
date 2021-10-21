import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import formDataReducers from "./formData";

const store = configureStore({
  reducer: { user: userReducer, formData: formDataReducers },
});

export default store;
