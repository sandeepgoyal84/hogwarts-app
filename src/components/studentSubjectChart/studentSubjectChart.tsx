import ThreeColumnForm from "src/blocks/threeColumnForm/threeColumnForm";
import Heading from "src/atoms/heading/heading";

type Props = {
  title: string;
  col1Header: string;
  col2Header: string;
  col3Header: string;
  rowData: {
    col1Value?: string;
    col2Value?: string;
    col3Value?: string;
    isHeader?: boolean;
  }[];
};
const StudentSubjectChart = (props: Props) => {
  const { title, rowData, col1Header, col2Header, col3Header } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading type="secondary">{title}</Heading>
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
