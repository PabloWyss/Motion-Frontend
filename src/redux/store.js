import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./slices/currentUser";
import signUpEmailAddress from "./slices/signUpEmailAddress";

export default configureStore({
  reducer: {
    signupemail: signUpEmailAddress,
    currentuser: currentUser,
  },
});
