import React from 'react'
import st from "./EduCoursesList.module.scss"
import EduCourseCard from '../EduCourseCard/EduCourseCard'
const EduCoursesList = () => {
  
  return (
    <div className={st.list}>
      <EduCourseCard/>
      <EduCourseCard/>
      <EduCourseCard/>
      <EduCourseCard/>
      <EduCourseCard/>
    </div>
  )
}

export default EduCoursesList