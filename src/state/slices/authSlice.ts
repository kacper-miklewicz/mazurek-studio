import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  email: string | null;
  uid: string;
}

interface AuthState {
  user: UserData | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
