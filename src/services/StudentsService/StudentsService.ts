import { baseConfig } from "../apiConfig";
import { Api } from "../apiService";
import { StudentsUrl } from "@/routes/routes-enums";
import { IGetStudentsByTeacher } from "./types";

const studentInstance = new Api(baseConfig);

export class StudentsService {
  static getStudentByTeacher = async (): Promise<IGetStudentsByTeacher> => {
    const response = await studentInstance
      .get(StudentsUrl.getStudentByTeacher, null, baseConfig).then(response => response.data);     

    return await response;
  };
}
