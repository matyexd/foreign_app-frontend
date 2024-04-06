import { IStudent } from "@/types/IStudent";

export interface IGetStudentsByTeacher {
    data: IStudent[],
    message: string
}