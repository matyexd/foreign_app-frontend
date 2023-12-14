import React from "react";
import { useParams } from "react-router-dom";
import InfoCourse from "./components/InfoCourse/InfoCourse";
import StudentsOfCourses from "./components/StudentsOfCourses/StudentsOfCourses";
import InvateStudentToCourse from "./components/InvateStudentToCourse/InvateStudentToCourse";

interface IParams {
  courseId: string;
  teacherId: string;
}

const Course = () => {
  const params = useParams<IParams>();

  return (
    <div>
      <InvateStudentToCourse />
      <InfoCourse />

      <StudentsOfCourses />
    </div>
  );
};

export default Course;
