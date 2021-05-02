import * as selectors from "./studentRoasterSelector";
import { StudentRoasterStateSlice } from "./studentRoasterSlice";
import { TeacherRoasterStateSlice } from "src/modules/teacherRoaster/teacherRoasterSlice";
import dummyData from "./mockData.json";
import { Teacher } from "src/modules/teacherRoaster/type";
import teacherDummyData from "src/modules/teacherRoaster/mockData.json";
import { Student } from "./type";
import { RootState } from "src/app/store";

describe("src/frontend/modules/insights/selectors", () => {
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
        teacher: "Rubeus Hagrid",
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
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Luna Lovegood",
        subject: "Potions Master",
        teacher: "Severus Snape",
      },
    ];
    expect(students).toEqual(expectedResult);
  });

  it("check when level-3 & 1 Professor absent", () => {
    const teachersState = [
      {
        name: "Professor Dumbledore",
        subject: null,
        designation: "Headmaster",
        headName: null,
        level: 0,
        isPresent: true,
      },
      {
        name: "Minerva McGonagall",
        subject: null,
        designation: "Headmistress",
        headName: "Professor Dumbledore",
        level: 1,
        isPresent: true,
      },
      {
        name: "Alastor Moody",
        subject: "Defence Against the Dark Arts",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: true,
      },
      {
        name: "Rubeus Hagrid",
        subject: "Potions Master",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: true,
      },
      {
        name: "Gilderoy Lockhart",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Remus Lupin",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Horace Slughorn",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: true,
      },
      {
        name: "Severus Snape",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
    ];
    const state: RootState = {
      // @ts-ignore-error partial state
      studentRoaster: {
        students: dummyData as ReadonlyArray<Student>,
        status: "success",
      } as StudentRoasterStateSlice,
      teacherRoaster: {
        teachers: teachersState as ReadonlyArray<Teacher>,
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
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Ron Weasley",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Draco Malfoy",
        subject: "Potions Master",
        teacher: "Horace Slughorn",
      },
      {
        name: "Padma Patil",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Luna Lovegood",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
    ];
    expect(students).toEqual(expectedResult);
  });

  it("check when at level-3 & 2 Professor absent", () => {
    const teachersState = [
      {
        name: "Professor Dumbledore",
        subject: null,
        designation: "Headmaster",
        headName: null,
        level: 0,
        isPresent: true,
      },
      {
        name: "Minerva McGonagall",
        subject: null,
        designation: "Headmistress",
        headName: "Professor Dumbledore",
        level: 1,
        isPresent: true,
      },
      {
        name: "Alastor Moody",
        subject: "Defence Against the Dark Arts",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: true,
      },
      {
        name: "Rubeus Hagrid",
        subject: "Potions Master",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: true,
      },
      {
        name: "Gilderoy Lockhart",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Remus Lupin",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Horace Slughorn",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
      {
        name: "Severus Snape",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
    ];
    const state: RootState = {
      // @ts-ignore-error partial state
      studentRoaster: {
        students: dummyData as ReadonlyArray<Student>,
        status: "success",
      } as StudentRoasterStateSlice,
      teacherRoaster: {
        teachers: teachersState as ReadonlyArray<Teacher>,
        status: "success",
      } as TeacherRoasterStateSlice,
    };

    const students = selectors.selectStudents(state);
    const expectedResult = [
      {
        name: "Harry Potter",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Hermione Granger",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Ron Weasley",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Draco Malfoy",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Padma Patil",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
      {
        name: "Luna Lovegood",
        subject: "Potions Master",
        teacher: "Rubeus Hagrid",
      },
    ];
    expect(students).toEqual(expectedResult);
  });

  it("check when level-3 & level-2 Professors absent", () => {
    const teachersState = [
      {
        name: "Professor Dumbledore",
        subject: null,
        designation: "Headmaster",
        headName: null,
        level: 0,
        isPresent: true,
      },
      {
        name: "Minerva McGonagall",
        subject: null,
        designation: "Headmistress",
        headName: "Professor Dumbledore",
        level: 1,
        isPresent: true,
      },
      {
        name: "Alastor Moody",
        subject: "Defence Against the Dark Arts",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: true,
      },
      {
        name: "Rubeus Hagrid",
        subject: "Potions Master",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: false,
      },
      {
        name: "Gilderoy Lockhart",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Remus Lupin",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Horace Slughorn",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
      {
        name: "Severus Snape",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
    ];
    const state: RootState = {
      // @ts-ignore-error partial state
      studentRoaster: {
        students: dummyData as ReadonlyArray<Student>,
        status: "success",
      } as StudentRoasterStateSlice,
      teacherRoaster: {
        teachers: teachersState as ReadonlyArray<Teacher>,
        status: "success",
      } as TeacherRoasterStateSlice,
    };

    const students = selectors.selectStudents(state);
    const expectedResult = [
      {
        name: "Harry Potter",
        subject: "Potions Master",
        teacher: "Minerva McGonagall",
      },
      {
        name: "Hermione Granger",
        subject: "Potions Master",
        teacher: "Minerva McGonagall",
      },
      {
        name: "Ron Weasley",
        subject: "Potions Master",
        teacher: "Minerva McGonagall",
      },
      {
        name: "Draco Malfoy",
        subject: "Potions Master",
        teacher: "Minerva McGonagall",
      },
      {
        name: "Padma Patil",
        subject: "Potions Master",
        teacher: "Minerva McGonagall",
      },
      {
        name: "Luna Lovegood",
        subject: "Potions Master",
        teacher: "Minerva McGonagall",
      },
    ];
    expect(students).toEqual(expectedResult);
  });

  it("check when level-3 & level-2 & level-1 Professors absent", () => {
    const teachersState = [
      {
        name: "Professor Dumbledore",
        subject: null,
        designation: "Headmaster",
        headName: null,
        level: 0,
        isPresent: true,
      },
      {
        name: "Minerva McGonagall",
        subject: null,
        designation: "Headmistress",
        headName: "Professor Dumbledore",
        level: 1,
        isPresent: false,
      },
      {
        name: "Alastor Moody",
        subject: "Defence Against the Dark Arts",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: true,
      },
      {
        name: "Rubeus Hagrid",
        subject: "Potions Master",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: false,
      },
      {
        name: "Gilderoy Lockhart",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Remus Lupin",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Horace Slughorn",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
      {
        name: "Severus Snape",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
    ];
    const state: RootState = {
      // @ts-ignore-error partial state
      studentRoaster: {
        students: dummyData as ReadonlyArray<Student>,
        status: "success",
      } as StudentRoasterStateSlice,
      teacherRoaster: {
        teachers: teachersState as ReadonlyArray<Teacher>,
        status: "success",
      } as TeacherRoasterStateSlice,
    };

    const students = selectors.selectStudents(state);
    const expectedResult = [
      {
        name: "Harry Potter",
        subject: "Potions Master",
        teacher: "Professor Dumbledore",
      },
      {
        name: "Hermione Granger",
        subject: "Potions Master",
        teacher: "Professor Dumbledore",
      },
      {
        name: "Ron Weasley",
        subject: "Potions Master",
        teacher: "Professor Dumbledore",
      },
      {
        name: "Draco Malfoy",
        subject: "Potions Master",
        teacher: "Professor Dumbledore",
      },
      {
        name: "Padma Patil",
        subject: "Potions Master",
        teacher: "Professor Dumbledore",
      },
      {
        name: "Luna Lovegood",
        subject: "Potions Master",
        teacher: "Professor Dumbledore",
      },
    ];
    expect(students).toEqual(expectedResult);
  });

  it("check when all Professors absent", () => {
    const teachersState = [
      {
        name: "Professor Dumbledore",
        subject: null,
        designation: "Headmaster",
        headName: null,
        level: 0,
        isPresent: false,
      },
      {
        name: "Minerva McGonagall",
        subject: null,
        designation: "Headmistress",
        headName: "Professor Dumbledore",
        level: 1,
        isPresent: false,
      },
      {
        name: "Alastor Moody",
        subject: "Defence Against the Dark Arts",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: true,
      },
      {
        name: "Rubeus Hagrid",
        subject: "Potions Master",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
        isPresent: false,
      },
      {
        name: "Gilderoy Lockhart",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Remus Lupin",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
        isPresent: true,
      },
      {
        name: "Horace Slughorn",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
      {
        name: "Severus Snape",
        subject: "Potions Master",
        designation: "Professor",
        headName: "Rubeus Hagrid",
        level: 3,
        isPresent: false,
      },
    ];
    const state: RootState = {
      // @ts-ignore-error partial state
      studentRoaster: {
        students: dummyData as ReadonlyArray<Student>,
        status: "success",
      } as StudentRoasterStateSlice,
      teacherRoaster: {
        teachers: teachersState as ReadonlyArray<Teacher>,
        status: "success",
      } as TeacherRoasterStateSlice,
    };

    const students = selectors.selectStudents(state);
    const expectedResult = [
      {
        name: "Harry Potter",
        subject: "Potions Master",
        teacher: "Not Assigned",
      },
      {
        name: "Hermione Granger",
        subject: "Potions Master",
        teacher: "Not Assigned",
      },
      {
        name: "Ron Weasley",
        subject: "Potions Master",
        teacher: "Not Assigned",
      },
      {
        name: "Draco Malfoy",
        subject: "Potions Master",
        teacher: "Not Assigned",
      },
      {
        name: "Padma Patil",
        subject: "Potions Master",
        teacher: "Not Assigned",
      },
      {
        name: "Luna Lovegood",
        subject: "Potions Master",
        teacher: "Not Assigned",
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
