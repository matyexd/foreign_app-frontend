import React, { FC, useEffect } from "react";
import CourseCard from "../../../../components/CourseCard/CourseCard";
import CoursesContainer from "@/ui/CoursesContainer/CoursesContainer";
import CoursesStore from "@/store/CoursesStore/CoursesStore";
import { useParams } from "react-router-dom";

const EduCoursesList = () => {
  const params = useParams<{ id: string }>();

  useEffect(() => {
    CoursesStore.getStudentCourses();
  }, []);
  return (
    <CoursesContainer
      isLoading={CoursesStore.isLoading}
      error={CoursesStore.error}
    >
      {CoursesStore.courses
        .filter((course) => course.authorId === Number.parseInt(params.id))
        .map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
    </CoursesContainer>
  );
};

export default EduCoursesList;
