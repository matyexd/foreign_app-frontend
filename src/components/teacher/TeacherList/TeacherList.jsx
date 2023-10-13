import React from 'react'
import st from "./TeacherList.module.scss"
import TeacherCard from '../TeacherCard/TeacherCard'
import img from "../../../assets/images/teacher/teacher.png"

const teacher = {
  name: "Альберт Васильев",
  description: "Преподаватель немецкого языка",
  img: img,
}

const TeacherList = () => {
  return (
    <div className={st.list}>
        <TeacherCard teacher={teacher}/>
    </div>
  )
}

export default TeacherList