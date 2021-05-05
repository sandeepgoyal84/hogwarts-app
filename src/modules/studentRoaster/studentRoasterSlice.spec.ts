import studentRoasterReducer, {
  StudentRoasterStateSlice,
  add,
  pending,
  error,
} from "./studentRoasterSlice";
import dummyData from "./mockData.json";
import { Student } from "src/types";

describe("src/modules/studentRoaster/studentRoasterSlice", () => {
  const initialState: StudentRoasterStateSlice = {
    students: dummyData as ReadonlyArray<Student>,
    status: "success",
  };
  it("should handle initial state", () => {
    expect(studentRoasterReducer(undefined, { type: "unknown" })).toEqual({
      students: [],
      status: "idle",
    });
  });
  it("should handle add", () => {
    const actual = studentRoasterReducer(
      undefined,
      add({ students: dummyData as ReadonlyArray<Student> })
    );
    expect(actual).toEqual(initialState);
  });
  it("should handle pending", () => {
    const actual = studentRoasterReducer(initialState, pending());
    expect(actual.status).toEqual("pending");
  });

  it("should handle error", () => {
    const actual = studentRoasterReducer(initialState, error());
    expect(actual.status).toEqual("error");
  });
});
