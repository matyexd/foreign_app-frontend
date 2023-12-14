import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import InfoCourse from "./components/InfoCourse/InfoCourse";
import InvateStudentToCourse from "./components/InvateStudentToCourse/InvateStudentToCourse";
import StudentsStore from "@/store/StudentsStore/StudentsStore";
import CoursesStore from "@/store/CoursesStore/CoursesStore";
import { observer } from "mobx-react";
import { IParams } from "./types/IParams";

const Course = observer(() => {
  const params = useParams<IParams>();

  useEffect(() => {
    StudentsStore.getStudentsByTeacher();
    CoursesStore.getCourseById(params.courseId);
  }, []);

  if (
    StudentsStore.isLoading &&
    CoursesStore.isLoading &&
    CoursesStore.courses[0] !== undefined
  ) {
    return (
      <>
        <InvateStudentToCourse students={StudentsStore.data} />
        <InfoCourse course={CoursesStore.courses[0]} />
      </>
    );
  } else if (CoursesStore.error) {
    return <>При запросе курса произошла ошибка на сервере</>;
  } else return <>Курс не был найден</>;
});

export default Course;
