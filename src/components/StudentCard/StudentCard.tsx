import React, { FC } from "react";
import st from "./StudentCard.module.scss";
import { IStudent } from "@/types/IStudent";

interface Props {
  student: IStudent;
  deleteStudent: (id: number) => void;
}

const StudentCard: FC<Props> = ({ student, deleteStudent }) => {
  return (
    <div className={st.student}>
      <div className={st.student__body}>
        <div className={st.student__img}>
          <img src={student.img} alt="" />
        </div>
        <div className={st.student__name}>{student.username}</div>
        <button
          className={st.student__btn}
          onClick={() => deleteStudent(student.id)}
        >
          <div className={st.btn__icon}></div>
          Отвязать
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
