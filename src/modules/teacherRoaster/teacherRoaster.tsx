import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import * as selector from "./teacherRoasterSelector";
import * as actions from "./teacherRoasterSagaActions";
import { update } from "./teacherRoasterSlice";
import TeacherAttendanceChart from "src/components/teacherAttendanceChart/teacherAttendanceChart";

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
    <TeacherAttendanceChart
      attendanceData={attendanceData}
      callback={callback}
      getOptions={getOptions()}
    ></TeacherAttendanceChart>
  );
};
export default TeacherRoaster;
