import { createSelector } from "reselect";

import type { RootState } from "../store";

const projects = (state: RootState) => state.projects;

export const projectsSelector = createSelector(
  projects,
  projects => projects.value
);
