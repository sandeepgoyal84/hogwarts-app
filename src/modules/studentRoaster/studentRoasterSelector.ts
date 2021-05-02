import { RootState } from "src/app/store";
import { Student } from "./type";
import * as TeacherSelector from "src/modules/teacherRoaster/teacherRoasterSelector";
import * as  Queries from './queries';

export const selectStudents = (state: RootState): ReadonlyArray<Student> =>{
 const students= state.studentRoaster.students;
 const teachers= TeacherSelector.selectTeachers(state);
 return Queries.updateStudentRoaster(teachers, students);
}


export const isStudentStatePending = (state: RootState): boolean =>
  state.studentRoaster.status === "pending";
export const isStudentStateError = (state: RootState): boolean =>
  state.studentRoaster.status === "error";
