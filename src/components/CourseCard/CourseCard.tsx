import React, { FC } from "react";
import st from "./CourseCard.module.scss";
import img from "../../assets/icons/courseCard/course.svg";
import { ICourse } from "@/types/ICourse";
import { useHistory } from "react-router-dom";
import { AppPath } from "@/routes/routes-enums";

interface Props {
  course: ICourse;
}

const CourseCard: FC<Props> = ({ course }) => {
  const history = useHistory();

  const clickCard = () => {
    history.push(AppPath.education + `/${course.authorId}` + `/${course.id}`);
  };

  return (
    <div className={st.card} onClick={clickCard}>
      <div className={st.card__subtitle}>Программа</div>
      <div className={st.card__header}>
        <img src={img} alt="" />
        <span className={st.card__name}>«{course.name}»</span>
      </div>
      <div className={st.card__description}>{course.description}</div>
      <div className={st.card__content}>10 видео</div>
    </div>
  );
};

export default CourseCard;
