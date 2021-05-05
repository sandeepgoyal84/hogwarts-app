import * as actionTypes from "./teacherRoasterSagaActionType";

export const fetchTeacherRoaster = () => ({
  type: actionTypes.FETCH_TEACHER_ROASTER,
});

export const updateTeacherStatus = (name: string, isPresent: boolean) => ({
  type: actionTypes.UPDATE_TEACHER_STATUS,
  name: name,
  isPresent: isPresent,
});
