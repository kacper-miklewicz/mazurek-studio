import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowMenuState {
  value: boolean;
}

const initialState: ShowMenuState = {
  value: false,
};

export const showMenuSlice = createSlice({
  name: "showMenu",
  initialState,
  reducers: {
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },

    changeShowMenu: state => {
      state.value = !state.value;
    },
  },
});

export const { setShowMenu, changeShowMenu } = showMenuSlice.actions;

export default showMenuSlice.reducer;
