import { CoursesService } from "@/services/CoursesService/CoursesService";
import { ICourse } from "@/types/ICourse";
import { makeAutoObservable, runInAction } from "mobx";

const courses: ICourse[] = [
    {
      id: 0,
      name: "Изучение немецкого языка",
      created_by: 2,
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
      status: "on_consider",
    },
    {
      id: 1,
      created_by: 2,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
      status: "on_consider",
    },
    {
      id: 2,
      created_by: 2,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы.",
      status: "on_consider",
    },
    {
      id: 3,
      created_by: 2,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ.",
      status: "on_consider",
    },
  ];

class CoursesStore {

    courses: ICourse[] = [];
    isLoading = false;
    error = false;

    constructor() {
        makeAutoObservable(this);
    }

    getMyCourses = async (id: number) => {
      this.setisLoading(false);
        try {
            // const courses = (await CoursesService.getMyCourses(id)).data;
           this.setCourses(courses);
            
        }
        catch (e) {
            this.setError(true);
        }
    }

    getStudentCourses = async () => {
      this.setisLoading(false);
      try {
        // const courses = (await CoursesService.getStudentCourses()).data;
        this.setCourses(courses);
      }
      catch (e) {
        this.setError(true);
      }
    }

    createCourse = async (payload: {name: string, description: string, id: number}) => {
      try {
        // const res = (await CoursesService.createCourse(payload)).data;
        // this.courses.push(res.data);
        courses.push({...payload, status:"on_consider", created_by: 123132});
      }
      catch {
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