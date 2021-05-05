import { call, put, all, takeEvery } from "redux-saga/effects";
import * as slice from "./teacherRoasterSlice";
import * as Api from "./api";
import { Teacher } from "src/types";
import * as actionTypes from "./teacherRoasterSagaActionType";
import * as studentActionTypes from "src/modules/studentRoaster/studentRoasterSagaActionType";

export function* fetchTeacherRoasterSaga() {
  // set status pending in state
  yield put(slice.pending());
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

    // call to update student state
    yield put({ type: studentActionTypes.REFRESH_STUDENET_ROASTER });
  } catch {
    // set status as error in state
    yield put(slice.error());
  }
}

export function* updateTeacherStatusSaga({
  name,
  isPresent,
}: {
  type: string;
  name: string;
  isPresent: boolean;
}) {
  yield put(
    slice.update({
      name,
      isPresent,
    })
  );
  // call to update student state
  yield put({ type: studentActionTypes.REFRESH_STUDENET_ROASTER });
}
function* onUpdateTeacherStatusSaga() {
  yield takeEvery(actionTypes.UPDATE_TEACHER_STATUS, updateTeacherStatusSaga);
}

function* onFetchTeacherRoasterSaga() {
  yield takeEvery(actionTypes.FETCH_TEACHER_ROASTER, fetchTeacherRoasterSaga);
}
export default function* rootSaga() {
  yield all([onFetchTeacherRoasterSaga(), onUpdateTeacherStatusSaga()]);
}
