import { ITeacher } from "@/types/ITeacher";

export interface IInviteResponse {
    data: {
        user_id: number;
        teacher_id: number;
        accept: boolean;
    }
    message: string
}

export interface IGetTeachersResponse {
    data: ITeacher[];
    message: string
}