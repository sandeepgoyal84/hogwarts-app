import { all } from "redux-saga/effects";
import StudentRoasterSaga from "src/components/studentRoaster/studentRoasterSaga";
import TeacherRoasterSaga from "src/components/teacherRoaster/teacherRoasterSaga";

export default function* rootSaga() {
  yield all([TeacherRoasterSaga(), StudentRoasterSaga()]);
}
