import { runSaga } from "redux-saga";
import * as api from "./api";
import dummyData from "./mockData.json";
import { Teacher } from "src/types";
import * as slice from "./teacherRoasterSlice";
import { fetchTeacherRoasterSaga } from "./teacherRoasterSaga";
import { RootState } from "src/app/store";
import { StudentRoasterStateSlice } from "src/modules/studentRoaster/studentRoasterSlice";
import { TeacherRoasterStateSlice } from "./teacherRoasterSlice";

describe("fetchTeacherRoasterSaga", () => {
  let state: RootState;
  beforeEach(() => {
    state = {
      // @ts-ignore-error partial state
      studentRoaster: {
        students: [],
        status: "idle",
      } as StudentRoasterStateSlice,
      teacherRoaster: {
        teachers: [],
        status: "idle",
      } as TeacherRoasterStateSlice,
    };
  });
  it("should call api and dispatch success action", async () => {
    const fakeData = dummyData as ReadonlyArray<Teacher>;
    const fetchTeachers = jest
      .spyOn(api, "fetchTeacherRoasterApi")
      .mockImplementation((): any => Promise.resolve({ response: fakeData }));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => state,
      },
      // @ts-ignore-error
      fetchTeacherRoasterSaga
    );

    expect(fetchTeachers).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(slice.pending());
    expect(dispatched[1]).toEqual(slice.add({ teachers: fakeData }));
    fetchTeachers.mockClear();
  });

  it("should call api and dispatch error action", async () => {
    const fetchTeachers = jest
      .spyOn(api, "fetchTeacherRoasterApi")
      .mockImplementation((): any => Promise.reject({ error: "error" }));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => state,
      },
      // @ts-ignore-error
      fetchTeacherRoasterSaga
    );

    expect(fetchTeachers).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(slice.pending());
    expect(dispatched[1]).toEqual(slice.error());
    fetchTeachers.mockClear();
  });
  it("if data exists it should not call api ", async () => {
    // @ts-ignore-error partial state
    const filledState: RootState = {
      // @ts-ignore-error partial state
      teacherRoaster: {
        teachers: dummyData as ReadonlyArray<Teacher>,
        status: "success",
      } as TeacherRoasterStateSlice,
    };
    const fetchTeachers = jest
      .spyOn(api, "fetchTeacherRoasterApi")
      .mockImplementation((): any => Promise.reject({ error: "error" }));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => filledState,
      },
      // @ts-ignore-error
      fetchTeacherRoasterSaga
    );

    expect(fetchTeachers).toHaveBeenCalledTimes(0);
    fetchTeachers.mockClear();
  });
});
