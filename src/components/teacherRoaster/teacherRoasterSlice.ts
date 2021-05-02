import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Teacher } from "./type";

export type TeacherRoasterStateSlice = {
  teachers: ReadonlyArray<Teacher>;
  status: string;
};
const initialState: TeacherRoasterStateSlice = {
  teachers: [],
  status: "idle",
};
export const teacherRoasterSlice = createSlice({
  name: "teacherRoaster",
  initialState,
  reducers: {
    add: (
      state: TeacherRoasterStateSlice,
      action: PayloadAction<{ teachers: ReadonlyArray<Teacher> }>
    ) => {
      state.status = "success";
      state.teachers = state.teachers.concat(action.payload.teachers);
    },
    pending: (state: TeacherRoasterStateSlice) => {
      state.status = "pending";
    },
    error: (state: TeacherRoasterStateSlice) => {
      state.status = "error";
    },
    update: (
      state: TeacherRoasterStateSlice,
      action: PayloadAction<{ name: string; isPresent: boolean }>
    ) => {
      const index = state.teachers.findIndex(
        (t: Teacher) => t.name === action.payload.name
      );
      state.teachers[index].isPresent=action.payload.isPresent;
    },
  },
});

export const { add, pending, error, update } = teacherRoasterSlice.actions;

export default teacherRoasterSlice.reducer;
