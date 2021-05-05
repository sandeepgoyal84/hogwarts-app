import { fireEvent } from "@testing-library/react";
import TeacherRoaster from "./teacherRoaster";
import { Teacher, Student } from "src/types";
import * as teacherApi from "./api";
import * as studentApi from "src/modules/studentRoaster/api";
import dummyTeacherData from "./mockData.json";
import dummyStudentData from "src/modules/studentRoaster/mockData.json";
import { Provider } from "react-redux";
import * as appStore from "src/app/store";
import { render, screen } from "@testing-library/react";
import { store } from "src/app/store";
import { useDispatch } from "react-redux";
import * as teacherActionTypes from "src/modules/teacherRoaster/teacherRoasterSagaActionType";
import * as teacherRoasterSaga from "src/modules/teacherRoaster/teacherRoasterSaga";

// const useDispatchMock = useDispatch as jest.Mock;

describe("<TeacherAttendanceChart />", () => {
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
        <TeacherRoaster />
      </Provider>
    );
    expect(screen.getByTestId("tac_lbl_heading").textContent).toBe(
      "Teacher Roaster"
    );
    expect(screen.getAllByTestId("tac_lbl_heading").length).toBe(1);
  });

  it("changing dropdown should be reflected", () => {
    const teacherRoasterSagaSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <TeacherRoaster />
      </Provider>
    );
    // check number of dropdowns should be same as provided no of rows
    expect(screen.getAllByTestId("tac_ddw_attendance_status").length).toBe(8);

    const selectElement = screen.getAllByTestId("tac_ddw_attendance_status")[0];
    // change teacher status from Present to Absent
    fireEvent.change(selectElement, { target: { value: "Absent" } });
    expect(teacherRoasterSagaSpy).toBeCalledWith({
      type: teacherActionTypes.UPDATE_TEACHER_STATUS,
      name: "Professor Dumbledore",
      isPresent: false,
    });

    // change teacher status from Absent to Present
    fireEvent.change(selectElement, { target: { value: "Present" } });
    expect(teacherRoasterSagaSpy).toBeCalledWith({
      type: teacherActionTypes.UPDATE_TEACHER_STATUS,
      name: "Professor Dumbledore",
      isPresent: true,
    });
    teacherRoasterSagaSpy.mockClear();
  });
});
