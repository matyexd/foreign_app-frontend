import React from "react";
import { Button } from "@mantine/core";
import { useHistory } from "react-router-dom";
import { AppPath } from "@/routes/routes-enums";
import CoursesList from "./components/CoursesList/CoursesList";
import InvateStudent from "./components/InvateStudent/InvateStudent";

const MyCourses = () => {
  const history = useHistory();
  return (
    <>
      <Button pt={3} onClick={() => history.push(AppPath.createCourse)}>
        Создать курс
      </Button>
      <InvateStudent />
      <CoursesList />
    </>
  );
};

export default MyCourses;
