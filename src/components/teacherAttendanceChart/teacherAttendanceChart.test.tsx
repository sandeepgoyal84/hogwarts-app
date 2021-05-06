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
      container.querySelector('[data-testid="tac_heading"]').textContent
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
    expect(container.querySelectorAll('[data-testid^="tac_tr_"]').length).toBe(
      2
    );

    expect(
      container.querySelector('[data-testid="tac_col1_Professor Dumbledore"]')
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
    const selectElement = document.querySelector(
      '[data-testid="tac_col2_Professor Dumbledore"]'
    );

    fireEvent.change(selectElement as Element, { target: { value: "Absent" } });

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
        <h2 data-testid=\\"tac_heading\\">Teacher Roaster</h2>
        <div style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%; font-weight: bolder;\\"><span>Teacher Name</span></div>
          <div style=\\"flex-basis: 50%; font-weight: bolder;\\"><span>Attendance Status</span></div>
        </div>
        <div data-testid=\\"tac_tr_Professor Dumbledore\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Professor Dumbledore\\">Professor Dumbledore</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Professor Dumbledore\\">
              <option data-testid=\\"option_tac_col2_Professor Dumbledore_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Professor Dumbledore_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div data-testid=\\"tac_tr_Minerva McGonagall\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Minerva McGonagall\\">Minerva McGonagall</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Minerva McGonagall\\">
              <option data-testid=\\"option_tac_col2_Minerva McGonagall_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Minerva McGonagall_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div data-testid=\\"tac_tr_Rubeus Hagrid\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Rubeus Hagrid\\">Rubeus Hagrid</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Rubeus Hagrid\\">
              <option data-testid=\\"option_tac_col2_Rubeus Hagrid_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Rubeus Hagrid_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div data-testid=\\"tac_tr_Horace Slughorn\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Horace Slughorn\\">Horace Slughorn</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Horace Slughorn\\">
              <option data-testid=\\"option_tac_col2_Horace Slughorn_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Horace Slughorn_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div data-testid=\\"tac_tr_Severus Snape\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Severus Snape\\">Severus Snape</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Severus Snape\\">
              <option data-testid=\\"option_tac_col2_Severus Snape_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Severus Snape_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div data-testid=\\"tac_tr_Alastor Moody\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Alastor Moody\\">Alastor Moody</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Alastor Moody\\">
              <option data-testid=\\"option_tac_col2_Alastor Moody_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Alastor Moody_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div data-testid=\\"tac_tr_Remus Lupin\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Remus Lupin\\">Remus Lupin</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Remus Lupin\\">
              <option data-testid=\\"option_tac_col2_Remus Lupin_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Remus Lupin_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
        <div data-testid=\\"tac_tr_Gilderoy Lockhart\\" style=\\"margin: 10px; display: flex; justify-content: space-around;\\">
          <div style=\\"flex-basis: 50%;\\"><span data-testid=\\"tac_col1_Gilderoy Lockhart\\">Gilderoy Lockhart</span></div>
          <div style=\\"flex-basis: 50%;\\"><select name=\\"select\\" data-testid=\\"tac_col2_Gilderoy Lockhart\\">
              <option data-testid=\\"option_tac_col2_Gilderoy Lockhart_Present\\" value=\\"Present\\" selected=\\"\\">Present</option>
              <option data-testid=\\"option_tac_col2_Gilderoy Lockhart_Absent\\" value=\\"Absent\\">Absent</option>
            </select></div>
        </div>
      </div>"
    `); /* ... gets filled automatically by jest ... */
  });
});
