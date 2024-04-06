import { TeacherUrl } from "@/routes/routes-enums";
import { baseConfig } from "../apiConfig";
import { Api } from "../apiService";
import { IGetTeachersResponse, IInviteResponse } from "./types";

const teacherInstance = new Api(baseConfig);

export class TeacherService {

  static getTeachers = async (): Promise<IGetTeachersResponse> => {
    const response = await teacherInstance.get(TeacherUrl.getTeachers, null, baseConfig);
    return response.data;
  }

  static inviteStudentToTeacher = async (
    id: number
  )=> {
    const response = await teacherInstance
      .post<IInviteResponse>(TeacherUrl.inviteStudent, {id}, baseConfig)
    return response.data;
  };
}
