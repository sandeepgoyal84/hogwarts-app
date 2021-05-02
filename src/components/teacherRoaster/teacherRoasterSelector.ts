import _ from "lodash";
import { RootState } from "src/app/store";
import { Teacher } from "./type";

export const selectTeachers = (state: RootState): ReadonlyArray<Teacher> =>
  _.sortBy(state.teacherRoaster.teachers, ["level", "subject", "name"]);

export const isTeacherStatePending = (state: RootState): boolean =>
  state.teacherRoaster.status === "pending";

export const isTeacherStateError = (state: RootState): boolean =>
  state.teacherRoaster.status === "error";
