import * as React from "react";
import Label from "src/atoms/label/label";
import { ThreeColumnFormRowTy } from "src/types";

const ThreeColumnFormRow = (props: ThreeColumnFormRowTy) => {
  const { col1Value, col2Value, col3Value, isHeader } = props;
  const prefix = isHeader ? "th" : "tr";

  return (
    <div
      data-testid={`tcfr_${prefix}_${col1Value}`}
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "10px",
      }}
    >
      <div
        style={{ flexBasis: "35%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label data-testid={`tcfr_col1_${col1Value}`}>{col1Value}</Label>
      </div>
      <div
        style={{ flexBasis: "35%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label>{col2Value}</Label>
      </div>
      <div
        style={{ flexBasis: "30%", fontWeight: isHeader ? "bolder" : "normal" }}
      >
        <Label data-testid={`tcfr_col3_${col1Value}`}>{col3Value}</Label>
      </div>
    </div>
  );
};
export default ThreeColumnFormRow;
