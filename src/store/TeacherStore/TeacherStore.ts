import { TeacherService } from "@/services/TeacherService/TeacherService";
import { ITeacher } from "@/types/ITeacher";
import { configure, makeAutoObservable } from "mobx";

class TeacherStore {
    
    teachers: ITeacher[] = [];
    message: string = "";
    isLoadingComplete: boolean = false;
    error: string = ""; 
    constructor() {
        makeAutoObservable(this);
        configure(
            {
                enforceActions: "never"
            }
        )
    }

    getTeachers = async () => {
        this.isLoadingComplete = false;
        this.message = "";
        try {
            const response = await TeacherService.getTeachers();
            this.teachers = response.data;
        }
        catch (err) {
            this.handleError(err);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }


    inviteStudent = async (id: number) => {
        this.message = "";
         try {
            const res = await TeacherService.inviteStudentToTeacher(id);
            this.message = res.message;
        }
        catch (err) {
            if (err instanceof Error) this.message = err.message;
            else if (typeof err === 'string') this.message = err
            else this.message = "Приглашение уже отправлено для этого пользователя"
        }
    }

    handleError = (err: any) => {
        if (err instanceof Error) this.error = err.message;
        if (typeof err == "string") this.error = err;
    }

}

export default new TeacherStore();