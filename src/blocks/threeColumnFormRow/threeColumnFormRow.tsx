import * as React from "react";
import Label from "src/atoms/label/label";
import ThreeColumnFormRowTy from "./type";

const ThreeColumnFormRow = (props: ThreeColumnFormRowTy) => {
  const { col1Value, col2Value, col3Value, isHeader } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "10px",
      }}
    >
      <div
        style={{ flexBasis: "35%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label>{col1Value}</Label>
      </div>
      <div
        style={{ flexBasis: "35%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label>{col2Value}</Label>
      </div>
      <div
        style={{ flexBasis: "30%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label data-test-id={"lbl_Col3value_"+ col1Value}>{col3Value}</Label>
      </div>
    </div>
  );
};
export default ThreeColumnFormRow;
