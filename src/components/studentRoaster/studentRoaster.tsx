import React, { useEffect } from "react";
import ThreeColumnForm from "src/blocks/threeColumnForm/threeColumnForm";
// import { Student } from "./type";
import ThreeColumnFormRowTy from "src/blocks/threeColumnFormRow/type";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import * as selector from "./studentRoasterSelector";
import * as actions from "./studentRoasterSagaActions";

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
    <ThreeColumnForm
      title="Student Roaster"
      col1Header="Name"
      col2Header="Subject"
      col3Header="Assigned Teacher"
      rowData={formRows}
    ></ThreeColumnForm>
  );
};
export default StudentRoaster;
