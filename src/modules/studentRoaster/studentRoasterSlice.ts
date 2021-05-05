import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "src/types";

export type StudentRoasterStateSlice = {
  students: ReadonlyArray<Student>;
  status: string;
};
const initialState: StudentRoasterStateSlice = {
  students: [],
  status: "idle",
};
export const studentRoasterSlice = createSlice({
  name: "studentRoaster",
  initialState,
  reducers: {
    add: (
      state: StudentRoasterStateSlice,
      action: PayloadAction<{ students: ReadonlyArray<Student> }>
    ) => {
      state.status = "success";
      state.students = action.payload.students;
    },
    pending: (state: StudentRoasterStateSlice) => {
      state.status = "pending";
    },
    error: (state: StudentRoasterStateSlice) => {
      state.status = "error";
    },
  },
});

export const { add, pending, error } = studentRoasterSlice.actions;

export default studentRoasterSlice.reducer;
