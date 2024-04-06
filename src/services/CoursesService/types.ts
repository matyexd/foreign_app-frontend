import { ICourse } from "@/types/ICourse";

export interface IGetMyCourses {
    data: ICourse[];
    message: string;
}

export interface IGetStudentCourses {
  data: ICourse[];
}

export interface IGetById {
  data: ICourse;
  message: string;
}

export interface IPostAssignCourse {
  data: {
    id: number,
    userId: number,
    courseId: number
  };
  message: string;
}


export interface IPostCreateCourse {
    data: ICourse;
    message: string;
}
  
  