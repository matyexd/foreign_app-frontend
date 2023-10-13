import React from 'react'
import st from "./TeacherCard.module.scss"
const TeacherCard = ({teacher}) => {
  return (
    <div className={st.teacher}>
        <div className={st.gradient_wrapper}>
          <div className={st.teacher__avatar}>
            <img className={st.teacher__img} src={teacher.img} alt=""/>
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