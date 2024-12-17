import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    toogoleGptSearch: false,
  },
  reducers: {
    addGptSearch: (state) => {
      state.toogoleGptSearch = !state.toogoleGptSearch;
    },
  },
});

export const { addGptSearch } = GptSlice.actions;

export default GptSlice.reducer;
