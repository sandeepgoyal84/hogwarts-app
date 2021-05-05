import _ from "lodash";
import * as selectors from "./teacherRoasterSelector";
import { TeacherRoasterStateSlice } from "./teacherRoasterSlice";
import dummyData from "./mockData.json";
import { Teacher } from "src/types";
import { RootState } from "src/app/store";

describe("src/frontend/modules/insights/selectors", () => {
  it("should return teachers when  data is loaded", () => {
    // @ts-ignore-error partial state
    const state: RootState = {
      // @ts-ignore-error partial state
      teacherRoaster: {
        teachers: dummyData as ReadonlyArray<Teacher>,
        status: "success",
      } as TeacherRoasterStateSlice,
    };

    const teachers = selectors.selectTeachers(state);

    expect(teachers).toEqual(dummyData as Array<Teacher>);
  });

  it("should return true when state is in pending mode", () => {
    // @ts-ignore-error partial state
    const state: RootState = {
      teacherRoaster: {
        teachers: [],
        status: "pending",
      } as TeacherRoasterStateSlice,
    };

    const isPending = selectors.isTeacherStatePending(state);

    expect(isPending).toEqual(true);
  });

  it("should return true when state is in error mode", () => {
    // @ts-ignore-error partial state
    const state: RootState = {
      teacherRoaster: {
        teachers: [],
        status: "error",
      } as TeacherRoasterStateSlice,
    };

    const isError = selectors.isTeacherStateError(state);

    expect(isError).toEqual(true);
  });
});
