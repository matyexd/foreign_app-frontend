import React from 'react'
import st from "./TeacherCard.module.scss"
import { useHistory } from 'react-router-dom';
import { AppPath } from '../../../routes/routes-enums';
const TeacherCard = ({teacher}) => {

  const history = useHistory();

  const clickTeacher = (e) => {
    history.push(AppPath.education + `/${teacher.id}`);
  }

  return (
    <div className={st.teacher} onClick={clickTeacher}>
        <div className={st.gradient_wrapper}>
          <div className={st.teacher__avatar}>
            <img className={st.teacher__img} src={teacher.img} alt="" draggable={false}/>
          </div>
        </div>
        <div className={st.teacher__body}>
          <div className={st.teacher__name}>
            {teacher.name}
          </div>
          <div className={st.teacher__description}>
            {teacher.description}
          </div>
        </div>
    </div>
  )
}

export default TeacherCard