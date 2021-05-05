import { runSaga } from "redux-saga";
import * as api from "./api";
import dummyData from "./mockData.json";
import { Teacher } from "src/types";
import * as slice from "./teacherRoasterSlice";
import {
  fetchTeacherRoasterSaga,
  updateTeacherStatusSaga,
} from "./teacherRoasterSaga";
import { RootState } from "src/app/store";
import { StudentRoasterStateSlice } from "src/modules/studentRoaster/studentRoasterSlice";
import { TeacherRoasterStateSlice } from "./teacherRoasterSlice";

describe("src/modules/teacherRoaster/teacherRoasterSaga", () => {
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
    it("should call api and dispatch error action2", async () => {
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
  });

  describe("updateTeacherStatusSaga", () => {
    it("should call to reducer to update state", async () => {
      const dispatched: any[] = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
          getState: () => state,
        },
        updateTeacherStatusSaga,
        { type: "any", name: "dummy", isPresent: false }
      );

      expect(dispatched[0]).toEqual(
        slice.update({ name: "dummy", isPresent: false })
      );
    });
  });
});
