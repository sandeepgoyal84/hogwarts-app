import React, { useEffect } from "react";
import Label from "src/atoms/label/label";
import Dropdown from "src/blocks/dropdown/dropdown";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import * as selector from "./teacherRoasterSelector";
import * as actions from "./teacherRoasterSagaActions";
import { update } from "./teacherRoasterSlice";
import Heading from "src/atoms/heading/heading";

const TeacherRoaster = () => {
  const getOptions = () => [
    { key: "Present", value: "Present" },
    { key: "Absent", value: "Absent" },
  ];

  const attendanceData = useAppSelector(selector.selectTeachers);

  const dispatch = useAppDispatch();
  const callback = (id: string, val: string) => {
    dispatch(
      update({
        name: id,
        isPresent: val === "Present" ? true : false,
      })
    );
  };

  useEffect(() => {
    dispatch(actions.fetchTeacherRoaster());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Heading type="secondary">Teacher Roaster</Heading>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ flexBasis: "50%", fontWeight: "bolder" }}>
          <Label>Teacher Name</Label>
        </div>
        <div style={{ flexBasis: "50%", fontWeight: "bolder" }}>
          <Label>Attendance Status</Label>
        </div>
      </div>
      {attendanceData.map((field) => (
        <div
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
          key={field.name}
        >
          <div style={{ flexBasis: "50%" }}>
            <Label>{field.name}</Label>
          </div>
          <div style={{ flexBasis: "50%" }}>
            <Dropdown
              identifier={field.name}
              optionList={getOptions()}
              selectedItem={field.isPresent ? "Present" : "Absent"}
              callback={callback}
            ></Dropdown>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeacherRoaster;
