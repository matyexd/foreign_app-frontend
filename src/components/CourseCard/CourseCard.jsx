import React from "react";
import st from "./CourseCard.module.scss";
import img from "../../assets/icons/courseCard/course.svg";
const CourseCard = ({course}) => {
  return (
    <div className={st.card}>
      <div className={st.card__subtitle}>Программа</div>
      <div className={st.card__header}>
        <img src={img} alt="" />
        <span className={st.card__name}>«{course.name}»</span>
      </div>
      <div className={st.card__description}>
        {course.description}
      </div>
      <div className={st.card__content}>10 видео</div>
    </div>
  );
};

export default CourseCard;
