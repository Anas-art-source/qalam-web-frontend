import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  path: "",
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading(state, action) {
      return {
        ...state,
        loading: action.payload.loading,
        path: action.payload.path,
      };
    },
  },
});

export default loadingSlice.reducer;
export const loadingActions = loadingSlice.actions;
