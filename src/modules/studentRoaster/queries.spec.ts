import dummyData from "./mockData.json";
import teacherDummyData from "src/modules/teacherRoaster/mockData.json";
import { Student, Teacher } from "src/types";
import * as queries from "./queries";

describe("src/modules/studentRoaster/queries", () => {
  it("should return students when  data is loaded", () => {
    const studentData = dummyData as ReadonlyArray<Student>;
    const teacherData = teacherDummyData as ReadonlyArray<Teacher>;
    const students = queries.updateStudentRoaster(teacherData, studentData);
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
    const teacherData = [
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
    ] as ReadonlyArray<Teacher>;

    const studentData = dummyData as ReadonlyArray<Student>;
    const students = queries.updateStudentRoaster(teacherData, studentData);
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
    const teacherData = [
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
    ] as ReadonlyArray<Teacher>;

    const studentData = dummyData as ReadonlyArray<Student>;
    const students = queries.updateStudentRoaster(teacherData, studentData);
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
    const teacherData = [
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
    ] as ReadonlyArray<Teacher>;

    const studentData = dummyData as ReadonlyArray<Student>;
    const students = queries.updateStudentRoaster(teacherData, studentData);
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
    const teacherData = [
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
    ] as ReadonlyArray<Teacher>;

    const studentData = dummyData as ReadonlyArray<Student>;
    const students = queries.updateStudentRoaster(teacherData, studentData);
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
    const teacherData = [
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
    ] as ReadonlyArray<Teacher>;

    const studentData = dummyData as ReadonlyArray<Student>;
    const students = queries.updateStudentRoaster(teacherData, studentData);
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
});
