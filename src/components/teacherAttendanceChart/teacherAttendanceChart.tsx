import Heading from "src/atoms/heading/heading";
import TwoColumnForm from "src/blocks/twoColumnForm/twoColumnForm";
import { Teacher, TwoColumnFormRowTy } from "src/types";
type Props = {
  callback: (id: string, val: string) => void;
  attendanceData: Teacher[];
};

const TeacherAttendanceChart = (props: Props) => {
  const { callback, attendanceData } = props;

  const getOptions = () => [
    { key: "Present", value: "Present" },
    { key: "Absent", value: "Absent" },
  ];
  const rowData = attendanceData.map((i) => {
    return {
      col1Value: i.name,
      col2Value: {
        options: getOptions(),
        selectedItem: i.isPresent ? "Present" : "Absent",
      },
    } as TwoColumnFormRowTy;
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Heading data-testid="tac_heading" type="secondary">
        Teacher Roaster
      </Heading>

      <TwoColumnForm
        callback={callback}
        col1Header="Teacher Name"
        col2Header="Attendance Status"
        rowData={rowData}
      ></TwoColumnForm>
    </div>
  );
};
export default TeacherAttendanceChart;
