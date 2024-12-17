import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import gptReducer from "./slices/GptSlice";
import configReducer from "./slices/configLang";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptReducer,
    configLang: configReducer,
  },
});

export default appStore;
