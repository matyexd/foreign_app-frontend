import { TeacherService } from "@/services/TeacherService/TeacherService";
import { configure, makeAutoObservable } from "mobx";

class TeacherStore {
    
    message: string = "";

    constructor() {
        makeAutoObservable(this);
        configure(
            {
                enforceActions: "never"
            }
        )
    }


    inviteStudent = async (id: number) => {
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

}

export default new TeacherStore();