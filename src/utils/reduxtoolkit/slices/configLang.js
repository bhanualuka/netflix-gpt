import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    changeName: "en",
  },

  reducers: {
    addChangeName: (state, action) => {
      state.changeName = action.payload;
    },
  },
});

export const { addChangeName } = configSlice.actions;

export default configSlice.reducer;
