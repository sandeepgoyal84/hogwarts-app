import React from "react";
import { shallow, mount } from "enzyme";
import StudentSubjectChart from "./studentSubjectChart";
import ThreeColumnFormRowTy from "src/blocks/threeColumnFormRow/type";

// Unit Testing
describe("StudentSubjectChart should have", () => {
  it('Heading Component with child as "test"', () => {
    const studentSubjectChart = shallow(
      <StudentSubjectChart
        title="test"
        col1Header=""
        col2Header=""
        col3Header=""
        rowData={[]}
      />
    );
    const headerProps = studentSubjectChart.find("Heading").first().props();
    expect(headerProps.children).toBe("test");
  });

  it("snapshot for all filled props", () => {
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
    const studentSubjectChart = shallow(
      <StudentSubjectChart
        title="test"
        col1Header="col1"
        col2Header="col2"
        col3Header="col3"
        rowData={formRows}
      />
    );

    const headerProps = studentSubjectChart
      .find("ThreeColumnForm")
      .first()
      .props();
    // @ts-ignore-error
    expect(headerProps.col1Header).toBe("col1");
    // @ts-ignore-error
    expect(headerProps.col2Header).toBe("col2");
    // @ts-ignore-error
    expect(headerProps.col3Header).toBe("col3");
  });
});

// Integration testing
describe("StudentSubjectChart should match t", () => {
  it("snapshot for all filled props 1", () => {
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
    ];
    const formRows = data.map((field) => ({
      col1Value: field.name,
      col2Value: field.subject,
      col3Value: field.teacher,
    })) as ThreeColumnFormRowTy[];

    const studentSubjectChart = mount(
      <StudentSubjectChart
        title="test"
        col1Header="col1"
        col2Header="col2"
        col3Header="col3"
        rowData={formRows}
      />
    );
    const expected = ["col1", "Harry Potter", "Hermione Granger"];
    studentSubjectChart
      .find("ThreeColumnForm")
      .first()
      .find("ThreeColumnFormRow")
      .forEach((t, i) => {
        expect(t.find("Label").first().find("span").first().text()).toBe(
          expected[i]
        );
      });
    //  expect(studentSubjectChart.find('ThreeColumnForm').first().find('ThreeColumnFormRow').first().find('Label').first().find('span').first()).toEqual("<span>Harry Potter</span>");
  });
});

// snapshot testing
describe("StudentSubjectChart should match", () => {
  it("snapshot for all filled props", () => {
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
    const studentSubjectChart = shallow(
      <StudentSubjectChart
        title="test"
        col1Header="col1"
        col2Header="col2"
        col3Header="col3"
        rowData={formRows}
      />
    );

    expect(studentSubjectChart).toMatchSnapshot();
  });
});
