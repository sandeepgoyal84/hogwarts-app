import { call, put, all, takeEvery, select } from "redux-saga/effects";
import * as slice from "./studentRoasterSlice";
import * as Api from "./api";
import { Student } from "src/types";
import * as selectors from "./studentRoasterSelector";

export function* fetchStudentRoasterSaga() {
  const students: ReadonlyArray<Student> = yield select(
    selectors.selectStudents
  );
  if (students && students.length > 0) {
    return;
  }
  // set status pending in state
  yield put(slice.pending());
  try {
    // trigger fetch api call to get student records
    const result: {
      response: ReadonlyArray<Student>;
    } = yield call(Api.fetchStudentRoasterApi);

    // set student reords and status as success in state
    yield put(
      slice.add({
        students: result.response,
      })
    );
  } catch {
    // set status as error in state
    yield put(slice.error());
  }
}
function* onFetchStudentRoasterSaga() {
  yield takeEvery(
    "studentRoaster/fetchStudentRoaster",
    fetchStudentRoasterSaga
  );
}
export default function* rootSaga() {
  yield all([onFetchStudentRoasterSaga()]);
}
