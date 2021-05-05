import { runSaga } from "redux-saga";
import * as api from "./api";
import dummyData from "./mockData.json";
import { Student, Teacher } from "src/types";
import * as slice from "./studentRoasterSlice";
import { refreshStudentRoasterSaga } from "./studentRoasterSaga";
import { RootState } from "src/app/store";
import { StudentRoasterStateSlice } from "./studentRoasterSlice";
import { TeacherRoasterStateSlice } from "src/modules/teacherRoaster/teacherRoasterSlice";
import teacherDummyData from "src/modules/teacherRoaster/mockData.json";

describe("src/modules/studentRoaster/StudentRoasterSaga", () => {
  describe("refreshStudentRoasterSaga", () => {
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
      const fakeData = dummyData as ReadonlyArray<Student>;

      const refreshStudents = jest
        .spyOn(api, "fetchStudentRoasterApi")
        .mockImplementation((): any => Promise.resolve({ response: fakeData }));
      const dispatched: any[] = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
          getState: () => state,
        },
        // @ts-ignore-error
        refreshStudentRoasterSaga
      );

      expect(refreshStudents).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(slice.pending());
      expect(dispatched[1]).toEqual(slice.add({ students: fakeData }));
      refreshStudents.mockClear();
    });

    it("should call api and dispatch error action", async () => {
      const refreshStudents = jest
        .spyOn(api, "fetchStudentRoasterApi")
        .mockImplementation((): any => Promise.reject({ error: "error" }));
      const dispatched: any[] = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
          getState: () => state,
        },
        // @ts-ignore-error
        refreshStudentRoasterSaga
      );

      expect(refreshStudents).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(slice.pending());
      expect(dispatched[1]).toEqual(slice.error());
      refreshStudents.mockClear();
    });
  });
});
