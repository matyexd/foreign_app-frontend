import { IStudent } from "@/types/IStuden";
import { makeAutoObservable} from "mobx";
import img0 from "@/assets/images/student/1.png";
import img1 from "@/assets/images/student/2.png";
import img2 from "@/assets/images/student/3.png";
import img3 from "@/assets/images/student/4.png";
import img4 from "@/assets/images/student/5.png";
import img5 from "@/assets/images/student/6.png";
class MyStudentStore {
    students: IStudent[] = [
        { id: 0,
          name: "Воробьев Лев Станиславович",
          img: img0, 
        },
        { id: 1,
            name: "Куприянов Никита Матвеевич",
            img: img1, 
          },
          { id: 2,
            name: "Алексеев Марк Дмитриевич",
            img: img2, 
          },
          { id: 3,
            name: "Бочаров Герман Дмитриевич",
            img: img3, 
          },
          { id: 4,
            name: "Кузнецов Егор Даниэльевич",
            img: img4, 
          },
          { id: 5,
            name: "Сахаров Никита Степанович",
            img: img5, 
          },
                  
    ];
    constructor() {
        makeAutoObservable(this);
    }
}

export default new MyStudentStore();