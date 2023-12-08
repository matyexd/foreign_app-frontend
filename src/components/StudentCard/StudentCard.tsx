import React, { FC } from "react";
import st from "./StudentCard.module.scss";
import { IStudent } from "@/types/IStudent";

interface Props {
  student: IStudent;
}

const StudentCard: FC<Props> = ({ student }) => {
  return (
    <div className={st.student}>
      <div className={st.student__body}>
        <div className={st.student__img}>
          <img src={student.img} alt="" />
        </div>
        <div className={st.student__name}>{student.name}</div>
        <button className={st.student__btn} onClick={() => {}}>
          <div className={st.btn__icon}></div>
          Исключить из курса
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
