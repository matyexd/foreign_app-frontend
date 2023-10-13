import React from 'react';
import { EduCoursesList } from '../../components/eduCourses';
import {useParams} from "react-router-dom";

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