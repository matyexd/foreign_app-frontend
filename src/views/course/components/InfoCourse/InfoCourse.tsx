import { observer } from "mobx-react";
import React, { FC } from "react";
import SectionPage from "../UI/SectionPage";
import st from "./InfoCourse.module.scss";
import { ICourse } from "@/types/ICourse";

interface Props {
  course: ICourse;
}

const InfoCourse: FC<Props> = ({ course }) => {
  return (
    <SectionPage title="Информация о курсе">
      <div className={st.block}>
        <div className={st.block__title}>Название</div>
        <div className={st.block__body}>{course.name}</div>
      </div>
      <div className={st.block}>
        <div className={st.block__title}>Описание</div>
        <div className={st.block__body}>{course.description}</div>
      </div>
    </SectionPage>
  );
};

export default InfoCourse;
