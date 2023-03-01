import { createSlice } from "@reduxjs/toolkit";

export const currentUser = createSlice({
  name: "current-user",
  initialState: {
      currentuser: {},
    },
    reducers: {
      setCurrentUser: (state, action) => {
        state.currentuser = action.payload;
      },
    },
});
export const { setCurrentUser } = currentUser.actions;
export default currentUser.reducer;

