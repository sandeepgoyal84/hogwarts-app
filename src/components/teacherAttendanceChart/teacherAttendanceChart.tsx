import Label from "src/atoms/label/label";
import Dropdown from "src/blocks/dropdown/dropdown";
import Heading from "src/atoms/heading/heading";
type Props = {
  callback: (id: string, val: string) => void;
  attendanceData: {
    name: string;
    subject?: string | null;
    designation?: string;
    headName: string;
    level: number;
    isPresent: boolean;
  }[];
  getOptions: { key: string; value: string }[];
};

const TeacherAttendanceChart = (props: Props) => {
  const { callback, attendanceData, getOptions } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Heading type="secondary">Teacher Roaster</Heading>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ flexBasis: "50%", fontWeight: "bolder" }}>
          <Label>Teacher Name</Label>
        </div>
        <div style={{ flexBasis: "50%", fontWeight: "bolder" }}>
          <Label>Attendance Status</Label>
        </div>
      </div>
      {attendanceData.map((field) => (
        <div
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
          key={field.name}
        >
          <div style={{ flexBasis: "50%" }}>
            <Label>{field.name}</Label>
          </div>
          <div style={{ flexBasis: "50%" }}>
            <Dropdown
              identifier={field.name}
              optionList={getOptions}
              selectedItem={field.isPresent ? "Present" : "Absent"}
              callback={callback}
            ></Dropdown>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeacherAttendanceChart;
