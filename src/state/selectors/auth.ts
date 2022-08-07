import { createSelector } from "reselect";

import type { RootState } from "../store";

const auth = (state: RootState) => state.auth;

export const authSelector = createSelector(auth, auth => auth.user);
