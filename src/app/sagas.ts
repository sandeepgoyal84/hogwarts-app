import { all } from "redux-saga/effects";
import StudentRoasterSaga from "src/modules/studentRoaster/studentRoasterSaga";
import TeacherRoasterSaga from "src/modules/teacherRoaster/teacherRoasterSaga";

export default function* rootSaga() {
  yield all([TeacherRoasterSaga(), StudentRoasterSaga()]);
}
