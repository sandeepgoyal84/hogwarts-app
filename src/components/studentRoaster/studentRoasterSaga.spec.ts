import { runSaga } from "redux-saga";
import * as api from "./api";
import dummyData from "./mockData.json";
import { Student } from "./type";
import * as slice from "./studentRoasterSlice";
import { fetchStudentRoasterSaga } from "./studentRoasterSaga";

describe("fetchStudentRoasterSaga", () => {
  it("should call api and dispatch success action", async () => {
    const fakeData = dummyData as ReadonlyArray<Student>;
    const fetchStudents = jest
      .spyOn(api, "fetchStudentRoasterApi")
      .mockImplementation((): any => Promise.resolve({ response: fakeData }));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      // @ts-ignore-error
      fetchStudentRoasterSaga
    );

    expect(fetchStudents).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(slice.pending());
    expect(dispatched[1]).toEqual(slice.add({ students: fakeData }));
    fetchStudents.mockClear();
  });

  it("should call api and dispatch error action", async () => {
    const fetchStudents = jest
      .spyOn(api, "fetchStudentRoasterApi")
      .mockImplementation((): any => Promise.reject({ error: "error" }));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      // @ts-ignore-error
      fetchStudentRoasterSaga
    );

    expect(fetchStudents).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(slice.pending());
    expect(dispatched[1]).toEqual(slice.error());
    fetchStudents.mockClear();
  });
});
