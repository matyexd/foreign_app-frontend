import { ICourse } from "@/types/ICourse";
import { makeAutoObservable, runInAction } from "mobx";
import { MyCoursesApi } from "../api/MyCoursesApi";
const courses: ICourse[] = [
    {
      id: 0,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
      status: "on_consider",
    },
    {
      id: 1,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
      status: "on_consider",
    },
    {
      id: 2,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы.",
      status: "on_consider",
    },
    {
      id: 3,
      name: "Изучение немецкого языка",
      description:
        "Изучение иностранных языков дает огромное количество преимуществ.",
      status: "on_consider",
    },
  ];
class MyCoursesStore {
  isLoading = false;
  courses: ICourse[] = [];
  error = false;

  fetchCourses = async (id: number) => {
    try {
    //const data = await MyCoursesApi.fetchAll(id);
      runInAction(() => {
        //this.courses = data;
        this.courses = courses
        this.isLoading = true;
      });
    } catch (err) {
      runInAction(() => {
        this.isLoading = true;
        this.error = true;
      });
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new MyCoursesStore();
