import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import TeacherAttendanceChart from "./teacherAttendanceChart";
import { Teacher } from "src/types";
import pretty from "pretty";

describe("src/components/teacherAttendanceChart/teacherAttendanceChart", () => {
  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders one <Heading /> components", () => {
    act(() => {
      render(
        <TeacherAttendanceChart
          attendanceData={[]}
          callback={() => null}
          getOptions={[]}
        />,
        container
      );
    });
    expect(
      container.querySelector('[data-testid="tac_lbl_heading"]').textContent
    ).toBe("Teacher Roaster");
  });

  it("should have passing right props to child components", () => {
    const data = [
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
    ] as Teacher[];

    const getOptions = () => [
      { key: "Present", value: "Present" },
      { key: "Absent", value: "Absent" },
    ];
    const callback = (id: string, val: string): void => {};

    act(() => {
      render(
        <TeacherAttendanceChart
          attendanceData={data}
          callback={callback}
          getOptions={getOptions()}
        />,
        container
      );
    });
    expect(
      container.querySelectorAll('[data-testid="tac_lbl_teacher_name"]').length
    ).toBe(2);
    expect(
      container.querySelectorAll('[data-testid="tac_ddw_attendance_status"]')
        .length
    ).toBe(2);

    expect(
      container.querySelectorAll('[data-testid="tac_lbl_teacher_name"]')[0]
        .textContent
    ).toBe("Professor Dumbledore");
  });
  it("simulates click events", () => {
    const callback = jest.fn();
    const data = [
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
    ] as Teacher[];

    const getOptions = () => [
      { key: "Present", value: "Present" },
      { key: "Absent", value: "Absent" },
    ];
    act(() => {
      render(
        <TeacherAttendanceChart
          attendanceData={data}
          callback={callback}
          getOptions={getOptions()}
        />,
        container
      );
    });
    const selectElement = document.querySelectorAll(
      '[data-testid="tac_ddw_attendance_status"]'
    )[0];

    fireEvent.change(selectElement, { target: { value: "Absent" } });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should match with snapshot for all filled props", () => {
    const data = [
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
        name: "Rubeus Hagrid",
        subject: "Potions Master",
        designation: "Standby Professor",
        headName: "Minerva McGonagall",
        level: 2,
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
        name: "Remus Lupin",
        subject: "Defence Against the Dark Arts",
        designation: "Professor",
        headName: "Alastor Moody",
        level: 3,
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
    ] as Teacher[];
    const getOptions = () => [
      { key: "Present", value: "Present" },
      { key: "Absent", value: "Absent" },
    ];
    const callback = (id: string, val: string): void => {};
    act(() => {
      render(
        <TeacherAttendanceChart
          attendanceData={data}
          callback={callback}
          getOptions={getOptions()}
        />,
        container
      );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div style=\\"display: flex; flex-direction: column; flex-grow: 1;\\">
        <h2 data-testid=\\"tac_lbl_heading\\">Teacher Roaster</h2>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%; font-weight: bolder;\\"><span>Teacher Name</span></div>
          <div style=\\"flex-basis: 50%; font-weight: bolder;\\"><span>Attendance Status</span></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Professor Dumbledore</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Minerva McGonagall</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Rubeus Hagrid</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Horace Slughorn</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Severus Snape</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Alastor Moody</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Remus Lupin</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_lbl_teacher_name\\">Gilderoy Lockhart</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_ddw_attendance_status\\">
              <option value=\\"Present\\" selected=\\"\\">Present</option>
              <option value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
      </div>"
    `); /* ... gets filled automatically by jest ... */
  });
});
