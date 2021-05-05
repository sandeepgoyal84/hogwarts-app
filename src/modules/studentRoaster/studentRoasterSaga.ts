import { call, put, all, takeEvery, select } from "redux-saga/effects";
import * as slice from "./studentRoasterSlice";
import * as Api from "./api";
import { Student, Teacher } from "src/types";
import * as actionTypes from "./studentRoasterSagaActionType";
import * as teacherSelectors from "src/modules/teacherRoaster/teacherRoasterSelector";
import * as queries from "./queries";

export function* refreshStudentRoasterSaga() {
  const teachers: ReadonlyArray<Teacher> = yield select(
    teacherSelectors.selectTeachers
  );

  // set status pending in state
  yield put(slice.pending());
  try {
    // trigger fetch api call to get student records
    const result: {
      response: ReadonlyArray<Student>;
    } = yield call(Api.fetchStudentRoasterApi);

    const data = queries.updateStudentRoaster(teachers, result.response);
    // set student reords and status as success in state
    yield put(
      slice.add({
        students: data,
      })
    );
  } catch {
    // set status as error in state
    yield put(slice.error());
  }
}

function* onRefreshStudentRoasterSaga() {
  yield takeEvery(
    actionTypes.REFRESH_STUDENET_ROASTER,
    refreshStudentRoasterSaga
  );
}
export default function* rootSaga() {
  yield all([onRefreshStudentRoasterSaga()]);
}
