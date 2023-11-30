import React from "react";
import StudentsList from "./components/StudentList/StudentsList";
import InvateStudent from "./components/InvateStudent/InvateStudent";

const MyStudents = () => {
  return (
    <>
      <InvateStudent />
      <StudentsList />
    </>
  );
};

export default MyStudents;
