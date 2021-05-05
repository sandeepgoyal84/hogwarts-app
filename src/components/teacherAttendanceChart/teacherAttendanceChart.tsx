import Label from "src/atoms/label/label";
import Dropdown from "src/atoms/dropdown/dropdown";
import Heading from "src/atoms/heading/heading";
import { Teacher } from "src/types";
type Props = {
  callback: (id: string, val: string) => void;
  attendanceData: Teacher[];
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
      <Heading data-testid="tac_lbl_heading" type="secondary">
        Teacher Roaster
      </Heading>
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
            <Label data-testid="tac_lbl_teacher_name">{field.name}</Label>
          </div>
          <div style={{ flexBasis: "50%" }}>
            <Dropdown
              identifier={field.name}
              optionList={getOptions}
              selectedItem={field.isPresent ? "Present" : "Absent"}
              callback={callback}
              data-testid="tac_ddw_attendance_status"
            ></Dropdown>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeacherAttendanceChart;
