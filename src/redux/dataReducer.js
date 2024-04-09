import { createSlice } from "@reduxjs/toolkit";
import Users from "../data/users.json";

export const dataSlice = createSlice({
  name: "data",
  initialState: { users: Users },
  reducers: {
    AddUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
export const { AddUsers } = dataSlice.actions;
export default dataSlice.reducer;
