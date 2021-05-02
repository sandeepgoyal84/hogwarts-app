import { runSaga } from "redux-saga";
import * as api from "./api";
import dummyData from "./mockData.json";
import { Teacher } from "./type";
import * as slice from "./teacherRoasterSlice";
import { fetchTeacherRoasterSaga } from "./teacherRoasterSaga";

describe("fetchTeacherRoasterSaga", () => {
  it("should call api and dispatch success action", async () => {
    const fakeData = dummyData as ReadonlyArray<Teacher>;
    const fetchTeachers = jest
      .spyOn(api, "fetchTeacherRoasterApi")
      .mockImplementation((): any => Promise.resolve({ response: fakeData }));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
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
      },
      // @ts-ignore-error
      fetchTeacherRoasterSaga
    );

    expect(fetchTeachers).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(slice.pending());
    expect(dispatched[1]).toEqual(slice.error());
    fetchTeachers.mockClear();
  });
});
