import { configureStore } from "@reduxjs/toolkit";
import showMenuReducer from "./slices/showMenuSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    showMenu: showMenuReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
