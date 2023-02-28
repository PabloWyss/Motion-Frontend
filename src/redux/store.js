import { configureStore } from "@reduxjs/toolkit";
import signUpEmailAddress from "./slices/signUpEmailAddress";

export default configureStore({
  reducer: {
    signupemail: signUpEmailAddress,
  },
});
