import { createSelector } from "reselect";

import type { RootState } from "../store";

const showMenu = (state: RootState) => state.showMenu;

export const showMenuSelector = createSelector(
  showMenu,
  showMenu => showMenu.value
);
