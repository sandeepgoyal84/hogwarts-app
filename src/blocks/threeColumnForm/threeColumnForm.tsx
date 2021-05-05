import * as React from "react";
import ThreeColumnFormRow from "../threeColumnFormRow/threeColumnFormRow";
import { ThreeColumnFormTy } from "src/types";
const ThreeColumnForm = (props: ThreeColumnFormTy) => {
  const { col1Header, col2Header, col3Header, rowData } = props;

  const getContent = () => {
    return rowData.map((field) => (
      <ThreeColumnFormRow
        key={field.col1Value}
        col1Value={field.col1Value}
        col2Value={field.col2Value}
        col3Value={field.col3Value}
      ></ThreeColumnFormRow>
    ));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <ThreeColumnFormRow
        col1Value={col1Header}
        col2Value={col2Header}
        col3Value={col3Header}
        isHeader
      ></ThreeColumnFormRow>
      {getContent()}
    </div>
  );
};
export default ThreeColumnForm;
