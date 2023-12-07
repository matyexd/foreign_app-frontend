import { TeacherUrl } from "@/routes/routes-enums";
import { baseConfig } from "../apiConfig";
import { Api } from "../apiService";
import { IInviteResponse } from "./types";

const teacherInstance = new Api(baseConfig);

export class TeacherService {
  static inviteStudentToTeacher = async (
    id: number
  )=> {
    const response = await teacherInstance
      .post<IInviteResponse>(TeacherUrl.inviteStudent, {id}, baseConfig)
      .then((res) => res.data);

    return response;
  };
}
