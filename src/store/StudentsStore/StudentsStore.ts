import { configure, makeAutoObservable} from "mobx";
import img0 from "@/assets/images/student/1.png";
import img1 from "@/assets/images/student/2.png";
import img2 from "@/assets/images/student/3.png";
import img3 from "@/assets/images/student/4.png";
import img4 from "@/assets/images/student/5.png";
import img5 from "@/assets/images/student/6.png";
import { IStudent } from "@/types/IStudent";
import { StudentsService } from "@/services/StudentsService/StudentsService";
class StudentsStore {
    isLoading = false;
    message = "";
    error = "";
    data: IStudent[] = [
        // { id: 0,
        //   name: "Воробьев Лев Станиславович",
        //   img: img0, 
        // },
        // { id: 1,
        //     name: "Куприянов Никита Матвеевич",
        //     img: img1, 
        //   },
        //   { id: 2,
        //     name: "Алексеев Марк Дмитриевич",
        //     img: img2, 
        //   },
        //   { id: 3,
        //     name: "Бочаров Герман Дмитриевич",
        //     img: img3, 
        //   },
        //   { id: 4,
        //     name: "Кузнецов Егор Даниэльевич",
        //     img: img4, 
        //   },
        //   { id: 5,
        //     name: "Сахаров Никита Степанович",
        //     img: img5, 
        //   },
    ];

    constructor() {
        makeAutoObservable(this);
        configure(
            {enforceActions: "never"},
        )
    }

    
    untieStudent = async (id: number) => {
        this.message = "";
        try {
            const response = await StudentsService.untieStudent(id);
            this.data = this.data.filter(student => student.id !== id);
            this.message = response.message;
        }
        catch (err) {
            this.handleError(err);
        }
        finally {
            this.isLoading = true;
        }
    }


    getStudentsByTeacher = async () => {
        this.message = "";
        this.isLoading = false
        try {
            const response = await StudentsService.getStudentByTeacher();
            this.data = response.data;
        }
        catch (err) {
            this.data = [];
            this.handleError(err);
        } finally {
            this.isLoading = true;

        }
    }

    handleError = (err: any) => {
        if (err instanceof Error) this.error = err.message;
        else if (typeof err == "string") this.error = err;
        else this.message = "Связь не была найдена"
    }
}

export default new StudentsStore();