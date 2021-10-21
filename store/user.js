import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  name: "",
  email: "",
  userPicture: "",
  phoneNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state = { ...action.payload, login: true };
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    },
    logout(state) {
      state = {
        login: false,
      };
      return state;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
