import { createSlice } from "@reduxjs/toolkit";

export const currentUser = createSlice({
  name: "current-user",
  initialState: {
    currentuserid: "",
  },
  reducers: {
    setCurrentUserID: (state, action) => {
      state.currentuserid = action.payload;
    },
  },
});
export const { setCurrentUserID } = currentUser.actions;
export default currentUser.reducer;
