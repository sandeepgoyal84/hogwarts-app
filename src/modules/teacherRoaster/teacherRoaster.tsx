import _ from "lodash";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import * as selector from "./teacherRoasterSelector";
import * as actions from "./teacherRoasterSagaActions";
import TeacherAttendanceChart from "src/components/teacherAttendanceChart/teacherAttendanceChart";

const TeacherRoaster = () => {
  const getOptions = () => [
    { key: "Present", value: "Present" },
    { key: "Absent", value: "Absent" },
  ];

  const attendanceData = _.sortBy(useAppSelector(selector.selectTeachers), [
    "level",
    "subject",
    "name",
  ]);

  const dispatch = useAppDispatch();
  const callback = (id: string, val: string): void => {
    dispatch(actions.updateTeacherStatus(id, val === "Present" ? true : false));
  };

  useEffect(() => {
    dispatch(actions.fetchTeacherRoaster());
  }, [dispatch]);

  return (
    <TeacherAttendanceChart
      attendanceData={attendanceData}
      callback={callback}
      getOptions={getOptions()}
    ></TeacherAttendanceChart>
  );
};
export default TeacherRoaster;
