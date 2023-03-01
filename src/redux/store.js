import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./slices/currentUser";
import signUpEmailAddress from "./slices/signUpEmailAddress";
import friendReuqestReducer from "./slices/friendReuqestSlice"

export default configureStore({
  reducer: {
    signupemail: signUpEmailAddress,
    currentuser: currentUser,
    friendRequests : friendReuqestReducer,
  },
});
