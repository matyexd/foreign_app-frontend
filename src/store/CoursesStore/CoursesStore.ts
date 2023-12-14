import { CoursesService } from "@/services/CoursesService/CoursesService";
import { ICourse } from "@/types/ICourse";
import { makeAutoObservable, runInAction } from "mobx";

const courses: ICourse[] = [
    {
      id: 0,
      name: "Изучение немецкого языка",
      authorId: 2,
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
      status: "on_consider",
      courseForUsers: [],
},
    {
      id: 1,
      authorId: 2,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
      status: "on_consider",
      courseForUsers: [],
    },
    {
      id: 2,
      authorId: 2,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы.",
      status: "on_consider",
      courseForUsers: [],
    },
    {
      id: 3,
      authorId: 2,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ.",
      status: "on_consider",
      courseForUsers: [],
    },
  ];

class CoursesStore {

    courses: ICourse[] = [];
    isLoading = false;
    error = false;
    message: string  = "";

    constructor() {
        makeAutoObservable(this);
    }

    getMyCourses = async () => {
      this.setisLoading(false);
      this.message = "";
      try {
          const response = await CoursesService.getMyCourses();
          this.setCourses(response.data);
        }
        catch (e) {
           this.setError(true);
        } 
    }

    getCourseById = async (id: string) => {
      this.setisLoading(false);
      this.message = "";
      try {
          const response = await CoursesService.getById(id);
          this.setCourses([response.data]);
        }
        catch (e) {
           this.setError(true);
        } 
    }

    assignStudent = async (payload: {course_id: number, user_id: number}) => {
      this.message = "";
      try {
        const response = await CoursesService.assignStudentToCourse(payload);
        this.message = response.message;
      }
      catch (e) {
        this.setError(true);
     } 
    }

    getStudentCourses = async () => {
      this.setisLoading(false);
      this.message = "";
      try {
        // const courses = (await CoursesService.getStudentCourses()).data;
        this.setCourses(courses);
      }
      catch (e) {
        this.setError(true);
      }
    }

    createCourse = async (payload: {name: string, description: string}) => {
      this.message = "";
      try {
        const res = (await CoursesService.createCourse(payload)).data;
        this.courses.push(res.data);
      }
      catch (e){
        this.setError(true);
      }
    }

    setError = (error: boolean): void => {
      runInAction(() => {
        this.error = error;
        this.isLoading = true;
      })
    }

    setisLoading = (isLoading: boolean) => {
      runInAction(() => {
        this.isLoading = isLoading;
      })
    }

    setCourses = (courses: ICourse[]): void => {
      runInAction(() => {
        this.isLoading = true;
        this.courses = courses;
      })
    }
}

export default new CoursesStore();