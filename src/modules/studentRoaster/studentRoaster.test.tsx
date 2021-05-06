import StudentRoaster from "./studentRoaster";
import { Teacher, Student } from "src/types";
import * as studentApi from "./api";
import * as teacherApi from "src/modules/teacherRoaster/api";
import dummyStudentData from "./mockData.json";
import dummyTeacherData from "src/modules/teacherRoaster/mockData.json";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { store } from "src/app/store";

describe("src/modules/studentRoaster/studentRoaster", () => {
  const fakeTeacherData = dummyTeacherData as ReadonlyArray<Teacher>;
  let fetchTeachers: jest.SpyInstance<
    Promise<{
      response: any;
    }>,
    []
  >;
  const fakeStudentData = dummyStudentData as ReadonlyArray<Student>;
  let fetchStudents: jest.SpyInstance<
    Promise<{
      response: any;
    }>,
    []
  >;
  beforeEach(() => {
    fetchTeachers = jest
      .spyOn(teacherApi, "fetchTeacherRoasterApi")
      .mockImplementation((): any =>
        Promise.resolve({ response: fakeTeacherData })
      );
    fetchStudents = jest
      .spyOn(studentApi, "fetchStudentRoasterApi")
      .mockImplementation((): any =>
        Promise.resolve({ response: fakeStudentData })
      );
  });

  afterEach(() => {
    // cleanup on exiting
    fetchTeachers.mockClear();
    fetchStudents.mockClear();
  });

  it("renders one <Heading /> components", () => {
    render(
      <Provider store={store}>
        <StudentRoaster />
      </Provider>
    );
    expect(screen.getByTestId("ssc_heading").textContent).toBe(
      "Student Roaster"
    );
  });

  it("verify number of rows", () => {
    render(
      <Provider store={store}>
        <StudentRoaster />
      </Provider>
    );
    // check number of student should be same as provided no of rows
    expect(screen.getAllByTestId(/^tcfr_tr_/i).length).toBe(6);
  });
});
