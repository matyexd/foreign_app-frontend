import React, { FC } from "react";
import st from "./TeacherCard.module.scss";
import { useHistory } from "react-router-dom";
import { AppPath } from "../../routes/routes-enums";
import { ITeacher } from "@/types/ITeacher";
import img from "@/assets/images/teacher/teacher.png";
interface Props {
  teacher: ITeacher;
}

const TeacherCard: FC<Props> = ({ teacher }) => {
  const history = useHistory();

  const clickTeacher = () => {
    history.push(AppPath.education + `/${teacher.id}`);
  };

  return (
    <div className={st.teacher} onClick={clickTeacher}>
      <div className={st.gradient_wrapper}>
        <div className={st.teacher__avatar}>
          <img className={st.teacher__img} src={img} alt="" draggable={false} />
        </div>
      </div>
      <div className={st.teacher__body}>
        <div className={st.teacher__name}>{teacher.username}</div>
        <div className={st.teacher__description}>{teacher.email}</div>
      </div>
    </div>
  );
};

export default TeacherCard;
