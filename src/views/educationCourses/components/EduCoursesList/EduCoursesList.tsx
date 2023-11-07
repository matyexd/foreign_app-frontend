import React from "react";
import CourseCard from "../../../../components/CourseCard/CourseCard";
import CoursesContainer from "@/ui/CoursesContainer/CoursesContainer";
import { ICourse } from "@/types/ICourse";

const courses: ICourse[] = [
  {
    id: 0,
    name: "Изучение немецкого языка",
    description:
      "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
    status: "on_consider",
  },
  {
    id: 1,
    name: "Изучение немецкого языка",
    description:
      "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы, образование и международный опыт, это еще и отличный тренажер для мозга.",
    status: "on_consider",
  },
  {
    id: 2,
    name: "Изучение немецкого языка",
    description:
      "Изучение иностранных языков дает огромное количество преимуществ. Помимо очевидных — свобода общения, карьерные перспективы.",
    status: "on_consider",
  },
  {
    id: 3,
    name: "Изучение немецкого языка",
    description:
      "Изучение иностранных языков дает огромное количество преимуществ.",
    status: "on_consider",
  },
];

const EduCoursesList = () => {
  return (
    <CoursesContainer>
      {courses.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </CoursesContainer>
  );
};

export default EduCoursesList;
