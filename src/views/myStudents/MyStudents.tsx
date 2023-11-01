import StudentCard from "@/components/StudentCard/StudentCard";
import React from "react";
import StudentsList from "./components/StudentsList";

const MyStudents = () => {
  return (
    <>
      <h1>Мои студенты</h1>
      <StudentsList />
    </>
  );
};

export default MyStudents;
