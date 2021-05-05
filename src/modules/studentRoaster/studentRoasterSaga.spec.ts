import { runSaga } from "redux-saga";
import * as api from "./api";
import dummyData from "./mockData.json";
import { Student, Teacher } from "src/types";
import * as slice from "./studentRoasterSlice";
import { fetchStudentRoasterSaga } from "./studentRoasterSaga";
import { RootState } from "src/app/store";
import { StudentRoasterStateSlice } from "./studentRoasterSlice";
import { TeacherRoasterStateSlice } from "src/modules/teacherRoaster/teacherRoasterSlice";
import teacherDummyData from "src/modules/teacherRoaster/mockData.json";

describe("src/modules/studentRoaster/StudentRoasterSaga", () => {
  describe("fetchStudentRoasterSaga", () => {
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

      const fetchStudents = jest
        .spyOn(api, "fetchStudentRoasterApi")
        .mockImplementation((): any => Promise.resolve({ response: fakeData }));
      const dispatched: any[] = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
          getState: () => state,
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
          getState: () => state,
        },
        // @ts-ignore-error
        fetchStudentRoasterSaga
      );

      expect(fetchStudents).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(slice.pending());
      expect(dispatched[1]).toEqual(slice.error());
      fetchStudents.mockClear();
    });

    it("if data exists it should not call api ", async () => {
      const filledState: RootState = {
        // @ts-ignore-error partial state
        studentRoaster: {
          students: dummyData as ReadonlyArray<Student>,
          status: "success",
        } as StudentRoasterStateSlice,
        teacherRoaster: {
          teachers: teacherDummyData as ReadonlyArray<Teacher>,
          status: "success",
        } as TeacherRoasterStateSlice,
      };

      const fetchStudents = jest
        .spyOn(api, "fetchStudentRoasterApi")
        .mockImplementation((): any => Promise.reject({ error: "error" }));
      const dispatched: any[] = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
          getState: () => filledState,
        },
        // @ts-ignore-error
        fetchStudentRoasterSaga
      );

      expect(fetchStudents).toHaveBeenCalledTimes(0);
      fetchStudents.mockClear();
    });
  });
});
