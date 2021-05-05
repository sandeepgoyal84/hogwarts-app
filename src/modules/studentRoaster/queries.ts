import _ from "lodash";
import { Student, Teacher } from "src/types";

export function updateStudentRoaster(
  teachers: ReadonlyArray<Teacher>,
  students: ReadonlyArray<Student>
): ReadonlyArray<Student> {
  const newStudentArr = _.map(students, (st) => {
    let assignedTeacher: Teacher | null | undefined;
    if (_.isEmpty(st.teacher)) {
      // Get all teachers for same subject sorted via level and get last teacher
      const sameSubjectTeacher = _.last(
        _.sortBy(_.filter(teachers, { subject: st.subject }), ["level"])
      );
      // if not any teacher for that subject exists so we cant decide
      // hierarchy and so mark that "Not Assigned"
      if (sameSubjectTeacher) {
        // any teacher exists then check for its parent
        // trying to get 2nd last level from bottom for suject
        assignedTeacher = _.head(
          _.filter(teachers, { name: sameSubjectTeacher?.headName })
        ) as Teacher | null | undefined;
      }
    } else {
      assignedTeacher = _.head(_.filter(teachers, { name: st.teacher }));
    }

    if (assignedTeacher && !assignedTeacher.isPresent) {
      while (assignedTeacher && !assignedTeacher.isPresent) {
        assignedTeacher = _.head(
          _.filter(teachers, { name: assignedTeacher.headName })
        ) as Teacher;
      }
    }
    const tname = assignedTeacher?.name || "Not Assigned";
    return { ...st, teacher: tname };
  });
  return newStudentArr;
}
