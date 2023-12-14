import React, { useEffect } from "react";
import st from "./TeacherList.module.scss";
import TeacherCard from "../../../../components/TeacherCard/TeacherCard";
import { observer } from "mobx-react";
import TeacherStore from "@/store/TeacherStore/TeacherStore";

const TeacherList = observer(() => {
  useEffect(() => {
    TeacherStore.getTeachers();
  }, []);

  return (
    <div className={st.list}>
      {TeacherStore.isLoadingComplete &&
        TeacherStore.teachers.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher.id} />
        ))}
    </div>
  );
});

export default TeacherList;
