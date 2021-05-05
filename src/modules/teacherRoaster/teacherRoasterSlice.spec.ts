import teacherRoasterReducer, {
  TeacherRoasterStateSlice,
  add,
  pending,
  error,
  update,
} from "./teacherRoasterSlice";
import dummyData from "./mockData.json";
import { Teacher } from "src/types";

describe("src/components/teacherRoaster/teacherRoasterSlice", () => {
  const initialState: TeacherRoasterStateSlice = {
    teachers: dummyData as ReadonlyArray<Teacher>,
    status: "success",
  };
  it("should handle initial state", () => {
    expect(teacherRoasterReducer(undefined, { type: "unknown" })).toEqual({
      teachers: [],
      status: "idle",
    });
  });
  it("should handle add", () => {
    const actual = teacherRoasterReducer(
      undefined,
      add({ teachers: dummyData as ReadonlyArray<Teacher> })
    );
    expect(actual).toEqual(initialState);
  });

  it("should handle update", () => {
    const actual = teacherRoasterReducer(
      initialState,
      update({ name: "Severus Snape", isPresent: false })
    );
    expect(
      actual.teachers.filter((t) => t.name === "Severus Snape")[0].isPresent
    ).toEqual(false);
  });

  it("should handle pending", () => {
    const actual = teacherRoasterReducer(initialState, pending());
    expect(actual.status).toEqual("pending");
  });

  it("should handle error", () => {
    const actual = teacherRoasterReducer(initialState, error());
    expect(actual.status).toEqual("error");
  });
});
