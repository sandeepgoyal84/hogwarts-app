import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import StudentRoasterReducer from "src/components/studentRoaster/studentRoasterSlice";
import TeacherRoasterReducer from "src/components/teacherRoaster/teacherRoasterSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    studentRoaster: StudentRoasterReducer,
    teacherRoaster: TeacherRoasterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
