import { RootState } from "src/app/store";
import { Teacher } from "src/types";

export const selectTeachers = (state: RootState): ReadonlyArray<Teacher> =>
  state.teacherRoaster.teachers;

export const isTeacherStatePending = (state: RootState): boolean =>
  state.teacherRoaster.status === "pending";

export const isTeacherStateError = (state: RootState): boolean =>
  state.teacherRoaster.status === "error";
