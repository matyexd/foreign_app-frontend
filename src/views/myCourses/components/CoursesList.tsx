import CourseCard from "@/components/CourseCard/CourseCard";
import CoursesContainer from "@/ui/CoursesContainer/CoursesContainer";
import React, { useEffect } from "react";
import MyCoursesStore from "../store/MyCoursesStore";
import { observer } from "mobx-react";

const CoursesList = observer(() => {
  useEffect(() => {
    MyCoursesStore.fetchCourses(1);
  }, []);

  return (
    <>
      {MyCoursesStore.isLoading && MyCoursesStore.error && <div>Ошибка</div>}
      {MyCoursesStore.isLoading && !MyCoursesStore.error && (
        <CoursesContainer>
          {MyCoursesStore.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </CoursesContainer>
      )}
    </>
  );
});

export default CoursesList;
