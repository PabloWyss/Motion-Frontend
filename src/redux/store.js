import { configureStore } from "@reduxjs/toolkit";
import sliceName from "./slices/myslice";

export default configureStore({
  reducer: {
    myslicename: sliceName,
  },
});
