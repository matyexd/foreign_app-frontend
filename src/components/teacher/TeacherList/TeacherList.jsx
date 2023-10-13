import React from 'react'
import st from "./TeacherList.module.scss"
import TeacherCard from '../TeacherCard/TeacherCard'
import img from "../../../assets/images/teacher/teacher.png"

const teachers = [{
  id: 0,
  name: "Альберт Васильев",
  description: "Преподаватель немецкого языка",
  img: img,
},
{
  id: 1,
  name: "Альберт Васильев",
  description: "Преподаватель немецкого языка",
  img: img,
},
{
  id: 2,
  name: "Альберт Васильев",
  description: "Преподаватель немецкого языка",
  img: img,
},
{
  id: 3,
  name: "Альберт Васильев",
  description: "Преподаватель немецкого языка",
  img: img,
},
{
  id: 4,
  name: "Альберт Васильев",
  description: "Преподаватель немецкого языка",
  img: img,
},
]

const TeacherList = () => {
  return (
    <div className={st.list}>
      {
        teachers.map(teacher => <TeacherCard teacher={teacher} key={teacher.id}/>)
      }
    </div>
  )
}

export default TeacherList