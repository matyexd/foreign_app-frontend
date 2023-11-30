import React, { FC } from "react";
import st from "./StudentsList.module.scss";
import StudentCard from "@/components/StudentCard/StudentCard";
import StudentsStore from "../../store/StudentsStore";
const StudentsList: FC = () => {
  return (
    <div className={st.students}>
      {StudentsStore.students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentsList;
