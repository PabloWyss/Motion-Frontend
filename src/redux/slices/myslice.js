import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "testslice",
  initialState: {
    statename: "",
  },
  reducers: {
    myreducer: (state, action) => {
      state.statename = action.payload;
    },
  },
});
export const { myreducer } = Slice.actions;
export default Slice.reducer;
