import { RootState } from "src/app/store";
import { Student } from "src/types";

export const selectStudents = (state: RootState): ReadonlyArray<Student> =>
  state.studentRoaster.students;

export const isStudentStatePending = (state: RootState): boolean =>
  state.studentRoaster.status === "pending";
export const isStudentStateError = (state: RootState): boolean =>
  state.studentRoaster.status === "error";
