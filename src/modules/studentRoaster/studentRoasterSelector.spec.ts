import * as selectors from "./studentRoasterSelector";
import { StudentRoasterStateSlice } from "./studentRoasterSlice";
import { TeacherRoasterStateSlice } from "src/modules/teacherRoaster/teacherRoasterSlice";
import dummyData from "./mockData.json";
import { Student, Teacher } from "src/types";
import teacherDummyData from "src/modules/teacherRoaster/mockData.json";
import { RootState } from "src/app/store";

describe("src/modules/studentRoaster/studentRoasterSelector", () => {
  it("should return students when  data is loaded", () => {
    const state: RootState = {
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

    const students = selectors.selectStudents(state);
    const expectedResult = [
      {
        name: "Harry Potter",
        subject: "Potions Master",
        teacher: "Horace Slughorn",
      },
      {
        name: "Hermione Granger",
        subject: "Potions Master",
        teacher: null,
      },
      {
        name: "Ron Weasley",
        subject: "Potions Master",
        teacher: "Severus Snape",
      },
      {
        name: "Draco Malfoy",
        subject: "Potions Master",
        teacher: "Horace Slughorn",
      },
      {
        name: "Padma Patil",
        subject: "Potions Master",
        teacher: null,
      },
      {
        name: "Luna Lovegood",
        subject: "Potions Master",
        teacher: "Severus Snape",
      },
    ];
    expect(students).toEqual(expectedResult);
  });

  it("should return true when state is in pending mode", () => {
    // @ts-ignore-error partial state
    const state: RootState = {
      studentRoaster: {
        students: [],
        status: "pending",
      } as StudentRoasterStateSlice,
    };

    const isPending = selectors.isStudentStatePending(state);

    expect(isPending).toEqual(true);
  });

  it("should return true when state is in error mode", () => {
    // @ts-ignore-error partial state
    const state: RootState = {
      studentRoaster: {
        students: [],
        status: "error",
      } as StudentRoasterStateSlice,
    };

    const isError = selectors.isStudentStateError(state);

    expect(isError).toEqual(true);
  });
});
