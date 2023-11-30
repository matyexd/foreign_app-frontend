import { baseConfig } from "../apiConfig";
import { Api } from "../apiService";
import { CoursesUrl } from "@/routes/routes-enums";
import { IGetMyCourses, IGetStudentCourses, IPostCreateCourse } from "./types";

const courseInstance = new Api(baseConfig);

export class CoursesService {
    static getMyCourses = async (id: number): Promise<IGetMyCourses> => {
        return await courseInstance.get(CoursesUrl.getMyCourses + id, null, baseConfig);
    }

    static getStudentCourses = async (): Promise<IGetStudentCourses> => {
        return await courseInstance.get(CoursesUrl.studentCourses, null, baseConfig);
    }

    static createCourse = async (payload: {name: string, description: string, id: number}) => {
        return await courseInstance.post<IPostCreateCourse>(CoursesUrl.createCourse, payload, baseConfig);
    }
} 