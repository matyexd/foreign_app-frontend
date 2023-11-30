import CourseCard from "@/components/CourseCard/CourseCard";
import CoursesContainer from "@/ui/CoursesContainer/CoursesContainer";
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import CoursesStore from "@/store/CoursesStore/CoursesStore";
import st from "./st.module.scss";
const CoursesList = observer(() => {
  useEffect(() => {
    CoursesStore.getMyCourses(1);
  }, []);

  return (
    <>
      <CoursesContainer
        className={st.container}
        error={CoursesStore.error}
        isLoading={CoursesStore.isLoading}
      >
        {CoursesStore.courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </CoursesContainer>
    </>
  );
});

export default CoursesList;
