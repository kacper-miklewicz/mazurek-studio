import { configureStore } from "@reduxjs/toolkit";

import showMenuReducer from "./slices/showMenuSlice";
import authReducer from "./slices/authSlice";
import projectsReducer from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    showMenu: showMenuReducer,
    auth: authReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
