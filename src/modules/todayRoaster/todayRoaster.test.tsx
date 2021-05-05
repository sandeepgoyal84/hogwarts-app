import { fireEvent } from "@testing-library/react";
import TeacherRoaster from "src/modules/teacherRoaster/teacherRoaster";
import StudentRoaster from "src/modules/studentRoaster/studentRoaster";
import TodayRoaster from "src/modules/todayRoaster/todayRoaster";
import { Teacher, Student } from "src/types";
import * as teacherApi from "src/modules/teacherRoaster/api";
import * as studentApi from "src/modules/studentRoaster/api";
import dummyTeacherData from "src/modules/teacherRoaster/mockData.json";
import dummyStudentData from "src/modules/studentRoaster/mockData.json";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { store } from "src/app/store";
import * as teacherActionTypes from "src/modules/teacherRoaster/teacherRoasterSagaActionType";
import * as studentActionTypes from "src/modules/studentRoaster/studentRoasterSagaActionType";

// const useDispatchMock = useDispatch as jest.Mock;

describe("src/modules/todayRoaster/todayRoaster", () => {
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

  it("it should renders Headiing for both teacher and student modules", () => {
    render(
      <Provider store={store}>
        <TodayRoaster />
      </Provider>
    );
    expect(screen.getByTestId("tac_lbl_heading").textContent).toBe(
      "Teacher Roaster"
    );
    expect(screen.getAllByTestId("tac_lbl_heading").length).toBe(1);
    
    expect(screen.getByTestId("ssc_lbl_heading").textContent).toBe(
        "Student Roaster"
      );
      expect(screen.getAllByTestId("ssc_lbl_heading").length).toBe(1);
  });

  it("changing dropdown should be reflected in both modules", () => {
    const teacherRoasterSagaSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <TodayRoaster />
      </Provider>
    );
    // check number of dropdowns should be same as provided no of rows
    expect(screen.getAllByTestId("tac_ddw_attendance_status").length).toBe(8);

    const selectElement = screen.getAllByTestId("tac_ddw_attendance_status")[7];
    // change teacher status from Present to Absent
    fireEvent.change(selectElement, { target: { value: "Absent" } });
    expect(teacherRoasterSagaSpy).toBeCalledWith({
      type: teacherActionTypes.UPDATE_TEACHER_STATUS,
      name: "Severus Snape",
      isPresent: false,
    });
    // expect(screen.getAllByTestId("tcfr_col3")[6].textContent).toBe("Rubeus Hagrid");

    // change teacher status from Absent to Present
    fireEvent.change(selectElement, { target: { value: "Present" } });
    expect(teacherRoasterSagaSpy).toBeCalledWith({
      type: teacherActionTypes.UPDATE_TEACHER_STATUS,
      name: "Severus Snape",
      isPresent: true,
    });
    expect(screen.getAllByTestId("tcfr_col3")[6].textContent).toBe("Severus Snape");
    teacherRoasterSagaSpy.mockClear();
  });
});
