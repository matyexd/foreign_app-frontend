import { baseConfig } from "../apiConfig";
import { Api } from "../apiService";
import { CoursesUrl } from "@/routes/routes-enums";
import { IGetById, IGetMyCourses, IGetStudentCourses, IPostAssignCourse, IPostCreateCourse } from "./types";

const courseInstance = new Api(baseConfig);

export class CoursesService {
    static getMyCourses = async (): Promise<IGetMyCourses> => {
        const response = await courseInstance.get(CoursesUrl.getMyCourses, null, baseConfig);
        return response.data;
    }

    static getById = async (id: string): Promise<IGetById> => {
        const response = await courseInstance.get(CoursesUrl.courseById + id, null, baseConfig);
        return response.data;
    }

    static getStudentCourses = async (): Promise<IGetStudentCourses> => {
        return await courseInstance.get(CoursesUrl.studentCourses, null, baseConfig);
    }

    static assignStudentToCourse = async (payload: {course_id: number, user_id: number}) => {
        const response = await courseInstance.post<IPostAssignCourse>(CoursesUrl.assignStudent, payload, baseConfig)
        return response.data
    }

    static createCourse = async (payload: {name: string, description: string}) => {
        return await courseInstance.post<IPostCreateCourse>(CoursesUrl.createCourse, payload, baseConfig);
    }
} 