import Label from "src/atoms/label/label";
import Dropdown from "src/atoms/dropdown/dropdown";
import { TwoColumnFormTy } from "src/types";
import styles from "./twoColumnForm.module.css";

const TwoColumnForm = (props: TwoColumnFormTy) => {
  const { callback, col1Header, col2Header, rowData } = props;

  return (
    <>
      <div className={styles.headerRow}>
        <div className={styles.col}>
          <Label>{col1Header}</Label>
        </div>
        <div className={styles.col}>
          <Label>{col2Header}</Label>
        </div>
      </div>
      {rowData.map((field) => (
        <div
          data-testid={`twcf_tr_${field.col1Value}`}
          className={styles.row}
          key={field.col1Value}
        >
          <div className={styles.col}>
            <Label data-testid={`twcf_col1_${field.col1Value}`}>
              {field.col1Value}
            </Label>
          </div>
          <div className={styles.col}>
            <Dropdown
              identifier={field.col1Value}
              optionList={field.col2Value.options}
              selectedItem={field.col2Value.selectedItem}
              callback={callback}
              data-testid={`twcf_col2_${field.col1Value}`}
            ></Dropdown>
          </div>
        </div>
      ))}
    </>
  );
};
export default TwoColumnForm;
