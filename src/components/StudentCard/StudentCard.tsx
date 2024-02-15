import React, { FC } from "react";
import st from "./StudentCard.module.scss";
import { IStudent } from "@/types/IStudent";
import { Avatar } from "@mantine/core";

interface Props {
  student: IStudent;
  deleteStudent: (id: number) => void;
}

const StudentCard: FC<Props> = ({ student, deleteStudent }) => {
  return (
    <div className={st.student}>
      <div className={st.student__body}>
        <div className={st.student__img}>
          <Avatar src={student.img} w={"100%"} h={"100%"} />
        </div>
        <div className={st.student__name}>
          {student.id}. {student.username}
        </div>
        <button
          className={st.student__btn}
          onClick={() => deleteStudent(student.id)}
        >
          <div className={st.btn__icon}></div>
          Исключить
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
