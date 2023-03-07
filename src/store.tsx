import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./redux/rootSlice";

export const store = configureStore({
  reducer: {
    root: rootSlice,
  },
});
