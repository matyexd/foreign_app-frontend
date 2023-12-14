import { ICourse } from "@/types/ICourse";

export interface IGetMyCourses {
    data: ICourse[];
    massage: string;
}

export interface IGetStudentCourses {
  data: ICourse[];
}

export interface IPostCreateCourse {
    data: ICourse;
    message: string;
}
  
  