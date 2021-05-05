import * as React from "react";
import Label from "src/atoms/label/label";
import { ThreeColumnFormRowTy } from "src/types";

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
        <Label data-testid="tcfr_col1">{col1Value}</Label>
      </div>
      <div
        style={{ flexBasis: "35%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label data-testid="tcfr_col2">{col2Value}</Label>
      </div>
      <div
        style={{ flexBasis: "30%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label data-testid="tcfr_col3">{col3Value}</Label>
      </div>
    </div>
  );
};
export default ThreeColumnFormRow;
