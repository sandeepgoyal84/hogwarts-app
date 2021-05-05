import ThreeColumnForm from "src/blocks/threeColumnForm/threeColumnForm";
import Heading from "src/atoms/heading/heading";
import { ThreeColumnFormRowTy } from "src/types";

type Props = {
  title: string;
  col1Header: string;
  col2Header: string;
  col3Header: string;
  rowData: ThreeColumnFormRowTy[];
};
const StudentSubjectChart = (props: Props) => {
  const { title, rowData, col1Header, col2Header, col3Header } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading data-testid="ssc_lbl_heading"  type="secondary">{title}</Heading>
      <ThreeColumnForm
        col1Header={col1Header}
        col2Header={col2Header}
        col3Header={col3Header}
        rowData={rowData}
      ></ThreeColumnForm>
    </div>
  );
};
export default StudentSubjectChart;
