import React, { useEffect } from "react";
import ThreeColumnFormRowTy from "src/blocks/threeColumnFormRow/type";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import * as selector from "./studentRoasterSelector";
import * as actions from "./studentRoasterSagaActions";
import StudentSubjectChart from "src/components/studentSubjectChart/studentSubjectChart";

const StudentRoaster = () => {

  const data = useAppSelector(selector.selectStudents);
  const formRows: ThreeColumnFormRowTy[] = data.map((field) => ({
    col1Value: field.name,
    col2Value: field.subject,
    col3Value: field.teacher,
  }));
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.fetchStudentRoaster());
  }, [dispatch]);

  return (
    <StudentSubjectChart
      title="Student Roaster"
      col1Header="Name"
      col2Header="Subject"
      col3Header="Assigned Teacher"
      rowData={formRows}
    ></StudentSubjectChart>
  );
};
export default StudentRoaster;
