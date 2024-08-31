import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userReducers";
const store = configureStore({
  reducer: { user: UserSlice },
});

export default store;
