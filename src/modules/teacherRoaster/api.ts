import { Teacher } from "src/types";
import dummyData from "./mockData.json";

export function fetchTeacherRoasterApi() {
  return new Promise((resolve, rejected) =>
    setTimeout(() => {
      return resolve({ data: dummyData as ReadonlyArray<Teacher> });
    }, 1000)
  )
    .then((result: any) => {
      return { response: result.data };
    })
    .catch((error: any) => {
      throw error;
    });
}
