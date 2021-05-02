import { call, put, all, takeEvery, select } from "redux-saga/effects";
import * as slice from "./teacherRoasterSlice";
import * as Api from "./api";
import { Teacher } from "./type";
import * as selectors from "./teacherRoasterSelector";

export function* fetchTeacherRoasterSaga() {
  // set status pending in state
  yield put(slice.pending());
  const teachers: ReadonlyArray<Teacher> = yield select(
    selectors.selectTeachers
  );
  if (teachers && teachers.length > 0) {
    return;
  }
  try {
    // trigger fetch api call to get teacher records
    const result: {
      response: ReadonlyArray<Teacher>;
    } = yield call(Api.fetchTeacherRoasterApi);

    // set teacher reords and status as success in state
    yield put(
      slice.add({
        teachers: result.response,
      })
    );
  } catch {
    // set status as error in state
    yield put(slice.error());
  }
}
function* onFetchTeacherRoasterSaga() {
  yield takeEvery(
    "teacherRoaster/fetchTeacherRoaster",
    fetchTeacherRoasterSaga
  );
}
export default function* rootSaga() {
  yield all([onFetchTeacherRoasterSaga()]);
}
