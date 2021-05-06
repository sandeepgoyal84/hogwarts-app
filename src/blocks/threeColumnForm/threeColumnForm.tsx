import { ThreeColumnFormTy } from "src/types";
import Label from "src/atoms/label/label";
import styles from "./threeColumnForm.module.css";

const ThreeColumnForm = (props: ThreeColumnFormTy) => {
  const { col1Header, col2Header, col3Header, rowData } = props;

  const getContent = () => {
    return rowData.map((i) => (
      <div data-testid={`thcf_tr_${i.col1Value}`} className={styles.row}>
        <div className={styles.col}>
          <Label data-testid={`thcf_col1_${i.col1Value}`}>{i.col1Value}</Label>
        </div>
        <div className={styles.col}>
          <Label>{i.col2Value}</Label>
        </div>
        <div className={styles.col}>
          <Label data-testid={`thcf_col3_${i.col1Value}`}>{i.col3Value}</Label>
        </div>
      </div>
    ));
  };
  return (
    <div >
      <div
        data-testid={`thcf_th_${col1Header}`} className={styles.headerRow}
      >
        <div className={styles.col}>
          <Label data-testid={`thcf_col1_${col1Header}`}>{col1Header}</Label>
        </div>
        <div className={styles.col}>
          <Label>{col2Header}</Label>
        </div>
        <div className={styles.col}>
          <Label data-testid={`thcf_col3_${col1Header}`}>{col3Header}</Label>
        </div>
      </div>
      {getContent()}
    </div>
  );
};
export default ThreeColumnForm;
