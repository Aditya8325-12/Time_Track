import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
  name: "userSlice",
  initialState: localStorage.getItem("userData") || [],
  reducers: {
    insertData() {},
    // updateData() {},
    // deleteData() {},
  },
});

export const { insertData, updateData, deleteData } = UserSlice.actions;
export default UserSlice.reducers;
