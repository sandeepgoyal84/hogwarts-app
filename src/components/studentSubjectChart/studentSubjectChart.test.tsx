import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import StudentSubjectChart from "./studentSubjectChart";
import { Teacher } from "src/types";
import pretty from "pretty";
import { ThreeColumnFormRowTy } from "src/types";

describe("src/components/studentSubjectChart/studentSubjectChart", () => {
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
        <StudentSubjectChart
          title="test"
          col1Header=""
          col2Header=""
          col3Header=""
          rowData={[]}
        />,
        container
      );
    });
    expect(
      container.querySelector('[data-testid="ssc_heading"]').textContent
    ).toBe("test");
  });

  it("should have passing right props to child components", () => {
    const data = [
      {
        name: "Harry Potter",
        subject: "Potions Master",
        teacher: "Horace Slughorn",
      },
    ];
    const formRows = data.map((field) => ({
      col1Value: field.name,
      col2Value: field.subject,
      col3Value: field.teacher,
    })) as ThreeColumnFormRowTy[];

    act(() => {
      render(
        <StudentSubjectChart
          title="test"
          col1Header="col1"
          col2Header="col2"
          col3Header="col3"
          rowData={formRows}
        />,
        container
      );
    });
    expect(container.querySelectorAll('[data-testid^="thcf_tr"]').length).toBe(
      1
    );

    expect(
      container.querySelector('[data-testid="thcf_col1_col1"]').textContent
    ).toBe("col1");
    expect(
      container.querySelector('[data-testid="thcf_col3_col1"]').textContent
    ).toBe("col3");
  });

  it("should match with snapshot for all filled props", () => {
    const data = [
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
    const formRows = data.map((field) => ({
      col1Value: field.name,
      col2Value: field.subject,
      col3Value: field.teacher,
    })) as ThreeColumnFormRowTy[];

    act(() => {
      render(
        <StudentSubjectChart
          title="test"
          col1Header="col1"
          col2Header="col2"
          col3Header="col3"
          rowData={formRows}
        />,
        container
      );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div style=\\"display: flex; flex-direction: column;\\">
        <h2 data-testid=\\"ssc_heading\\">test</h2>
        <div>
          <div data-testid=\\"thcf_th_col1\\" class=\\"headerRow\\">
            <div class=\\"col\\"><span data-testid=\\"thcf_col1_col1\\">col1</span></div>
            <div class=\\"col\\"><span>col2</span></div>
            <div class=\\"col\\"><span data-testid=\\"thcf_col3_col1\\">col3</span></div>
          </div>
          <div data-testid=\\"thcf_tr_Harry Potter\\" class=\\"row\\">
            <div class=\\"col\\"><span data-testid=\\"thcf_col1_Harry Potter\\">Harry Potter</span></div>
            <div class=\\"col\\"><span>Potions Master</span></div>
            <div class=\\"col\\"><span data-testid=\\"thcf_col3_Harry Potter\\">Horace Slughorn</span></div>
          </div>
          <div data-testid=\\"thcf_tr_Hermione Granger\\" class=\\"row\\">
            <div class=\\"col\\"><span data-testid=\\"thcf_col1_Hermione Granger\\">Hermione Granger</span></div>
            <div class=\\"col\\"><span>Potions Master</span></div>
            <div class=\\"col\\"><span data-testid=\\"thcf_col3_Hermione Granger\\"></span></div>
          </div>
          <div data-testid=\\"thcf_tr_Ron Weasley\\" class=\\"row\\">
            <div class=\\"col\\"><span data-testid=\\"thcf_col1_Ron Weasley\\">Ron Weasley</span></div>
            <div class=\\"col\\"><span>Potions Master</span></div>
            <div class=\\"col\\"><span data-testid=\\"thcf_col3_Ron Weasley\\">Severus Snape</span></div>
          </div>
          <div data-testid=\\"thcf_tr_Draco Malfoy\\" class=\\"row\\">
            <div class=\\"col\\"><span data-testid=\\"thcf_col1_Draco Malfoy\\">Draco Malfoy</span></div>
            <div class=\\"col\\"><span>Potions Master</span></div>
            <div class=\\"col\\"><span data-testid=\\"thcf_col3_Draco Malfoy\\">Horace Slughorn</span></div>
          </div>
          <div data-testid=\\"thcf_tr_Padma Patil\\" class=\\"row\\">
            <div class=\\"col\\"><span data-testid=\\"thcf_col1_Padma Patil\\">Padma Patil</span></div>
            <div class=\\"col\\"><span>Potions Master</span></div>
            <div class=\\"col\\"><span data-testid=\\"thcf_col3_Padma Patil\\"></span></div>
          </div>
          <div data-testid=\\"thcf_tr_Luna Lovegood\\" class=\\"row\\">
            <div class=\\"col\\"><span data-testid=\\"thcf_col1_Luna Lovegood\\">Luna Lovegood</span></div>
            <div class=\\"col\\"><span>Potions Master</span></div>
            <div class=\\"col\\"><span data-testid=\\"thcf_col3_Luna Lovegood\\">Severus Snape</span></div>
          </div>
        </div>
      </div>"
    `); /* ... gets filled automatically by jest ... */
  });
});
