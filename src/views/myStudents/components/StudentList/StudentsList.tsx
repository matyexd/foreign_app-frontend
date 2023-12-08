import React, { FC, useEffect } from "react";
import st from "./StudentsList.module.scss";
import StudentCard from "@/components/StudentCard/StudentCard";
import StudentsStore from "@/store/StudentsStore/StudentsStore";
import { observer } from "mobx-react-lite";
const StudentsList: FC = observer(() => {
  useEffect(() => {
    StudentsStore.getStudentsByTeacher();
  }, []);
  return (
    <div className={st.students}>
      {StudentsStore.data.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
});

export default StudentsList;
