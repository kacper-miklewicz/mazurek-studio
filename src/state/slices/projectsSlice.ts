import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../types/project";

interface ProjectsState {
  value: Project[];
}

const initialState: ProjectsState = {
  value: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
