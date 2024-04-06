import React from "react";
import { Button } from "@mantine/core";
import { useHistory } from "react-router-dom";
import { AppPath } from "@/routes/routes-enums";
import CoursesList from "./components/CoursesList/CoursesList";

const MyCourses = () => {
  const history = useHistory();

  return (
    <>
      <Button pt={3} onClick={() => history.push(AppPath.createCourse)}>
        Создать курс
      </Button>
      <CoursesList />
    </>
  );
};

export default MyCourses;
