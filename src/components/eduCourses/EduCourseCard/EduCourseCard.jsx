import React from "react";
import st from "./EduCourseCard.module.scss";
import img from "../../../assets/icons/courseCard/course.svg";
const EduCourseCard = () => {
  return (
    <div className={st.card}>
      <div className={st.card__subtitle}>Программа</div>
      <div className={st.card__header}>
        <img src={img} alt="" />
        <span className={st.card__name}>«Изучение немецкого языка»</span>
      </div>
      <div className={st.card__description}>
        Изучение иностранных языков дает огромное количество преимуществ. Помимо
        очевидных — свобода общения, карьерные перспективы, образование и
        международный опыт, это еще и отличный тренажер для мозга.
      </div>
      <div className={st.card__content}>10 видео</div>
    </div>
  );
};

export default EduCourseCard;
