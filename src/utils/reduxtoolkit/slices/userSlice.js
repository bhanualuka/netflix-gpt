import { createSlice } from "@reduxjs/toolkit";

const userSlilce = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },

    removeUSer: () => {
      return null;
    },
  },
});

export const { addUser, removeUSer } = userSlilce.actions;
export default userSlilce.reducer;
