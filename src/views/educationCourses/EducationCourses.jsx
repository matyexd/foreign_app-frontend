import React from 'react';
import {useParams} from "react-router-dom";
import EduCoursesList from './components/EduCoursesList/EduCoursesList';

const EducationCourses = () => {
  const params = useParams();

  return (
    <>
      <h1>Курсы преподавателя {params.id}</h1>
      <EduCoursesList/>
    </>
  )
}

export default EducationCourses