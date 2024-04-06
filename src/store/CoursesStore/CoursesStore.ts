import { CoursesService } from "@/services/CoursesService/CoursesService";
import { ICourse } from "@/types/ICourse";
import { makeAutoObservable, runInAction } from "mobx";

export const courses: ICourse[] = [
  {
    id: 0,
    name: "Курс английского для IT",
    authorId: 2,
    description:
      "Курс развивает базовые и прикладные навыки для успешной карьеры, включая интервью, переговоры, профильное общение в LinkedIn, командное взаимодействие, письма и встречи.",
    status: "on_consider",
    courseForUsers: [],
  },
  {
    id: 1,
    authorId: 2,
    name: "Английский для бизнеса и общения",
    description:
      "Освойте все необходимые навыки, грамматику и разговорную речь по самым актуальным и современным темам — от цифровой безопасности до теории лени и бодипозитива. Двигаясь по индивидуальному треку из уроков, вы достигнете целей, какими бы они ни были",
    status: "on_consider",
    courseForUsers: [],
  },
  {
    id: 2,
    authorId: 2,
    name: "Курс английского для маркетологов",
    description:
      "Лексика, грамматика и разговорный английский, который можно сразу применять в реальной практике. Изучайте язык по кейсам крупных международных компаний",
    status: "on_consider",
    courseForUsers: [],
  },
  {
    id: 3,
    authorId: 2,
    name: "Курс разговорного английского",
    description:
      "Курс разговорного английского — это уроки для людей, которые хотят свободно общаться с носителями языка. В процессе обучения у вас разовьются навыки говорения и восприятия речи на слух. По завершению вы сможете уверенно поддерживать беседу на английском.",
    status: "on_consider",
    courseForUsers: [],
  },
  {
    id: 4,
    authorId: 2,
    name: "Новый курс",
    description: "Описание курса",
    status: "on_consider",
    courseForUsers: [],
  },
];

class CoursesStore {
  courses: ICourse[] = [];
  isLoading = false;
  error = false;
  message: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  getMyCourses = async () => {
    this.setisLoading(false);
    this.message = "";
    try {
      const response = await CoursesService.getMyCourses();
      this.setCourses(response.data);
    } catch (e) {
      this.setError(true);
    }
  };

  getCourseById = async (id: string) => {
    this.setisLoading(false);
    this.message = "";
    try {
      const response = await CoursesService.getById(id);
      this.setCourses([response.data]);
    } catch (e) {
      this.setError(true);
    }
  };

  assignStudent = async (payload: { course_id: number; user_id: number }) => {
    this.message = "";
    try {
      const response = await CoursesService.assignStudentToCourse(payload);
      this.message = response.message;
    } catch (e) {
      this.setError(true);
    }
  };

  getStudentCourses = async () => {
    this.setisLoading(false);
    this.message = "";
    try {
      // const courses = (await CoursesService.getStudentCourses()).data;
      this.setCourses(courses);
    } catch (e) {
      this.setError(true);
    }
  };

  createCourse = async (payload: { name: string; description: string }) => {
    this.message = "";
    try {
      const res = (await CoursesService.createCourse(payload)).data;
      this.courses.push(res.data);
    } catch (e) {
      this.setError(true);
    }
  };

  setError = (error: boolean): void => {
    runInAction(() => {
      this.error = error;
      this.isLoading = true;
    });
  };

  setisLoading = (isLoading: boolean) => {
    runInAction(() => {
      this.isLoading = isLoading;
    });
  };

  setCourses = (courses: ICourse[]): void => {
    runInAction(() => {
      this.isLoading = true;
      this.courses = courses;
    });
  };
}

export default new CoursesStore();
