import { createSlice } from "@reduxjs/toolkit";
import DataUsers from "../data/users.json";

export const dataSlice = createSlice({
  name: "data",
  initialState: { users: DataUsers },
  reducers: {
    AddUsers: (state, action) => {
      state.users.push(action.payload);
    },
    Purge: (state) => {
      state.users = [];
    },
  },
});
export const { AddUsers, Purge } = dataSlice.actions;
export default dataSlice.reducer;
