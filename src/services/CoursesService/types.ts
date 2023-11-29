import { ICourse } from "@/types/ICourse";

export interface IGetMyCourses {
    data: ICourse[];
}

export interface IGetStudentCourses {
  data: ICourse[];
}

export interface IPostCreateCourse {
  data: {
    data: ICourse;
    message: string;
  }
}
  
  