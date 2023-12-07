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

        }
    }

}

export default new TeacherStore();