import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/mode/themeSlice";
import { authApiSlice } from "../services/authApiSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});
