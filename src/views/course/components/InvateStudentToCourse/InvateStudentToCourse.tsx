import { IStudent } from "@/types/IStudent";
import React, { FC, useMemo, useState } from "react";
import st from "./InvateStudents.module.scss";
import SectionPage from "../UI/SectionPage";
import DropdownMenu from "@/ui/dropdown/DropdownMenu";
import { Button } from "@mantine/core";
import TeacherStore from "@/store/TeacherStore/TeacherStore";
import CoursesStore from "@/store/CoursesStore/CoursesStore";
import { useParams } from "react-router-dom";
import { IParams } from "../../types/IParams";

const parseToDropdown = (
  students: IStudent[]
): { name: string; value: string }[] => {
  return students.map((student) => {
    return { name: student.username, value: student.id.toString() };
  });
};

interface Props {
  students: IStudent[];
}
const InvateStudentToCourse: FC<Props> = ({ students }) => {
  const params = useParams<IParams>();
  const values = useMemo(() => {
    return parseToDropdown(students);
  }, [students]);

  const [current, setCurrent] = useState(values[0]);

  const clickInvate = () => {
    CoursesStore.assignStudent({
      course_id: Number(params.courseId),
      user_id: Number(current.value),
    });
  };

  return (
    <SectionPage title="Привязать студента к курсу">
      <div className={st.invate}>
        <DropdownMenu
          className={st.invate__drop}
          values={values}
          setCurrent={setCurrent}
          current={current}
        />
        <Button onClick={clickInvate}>Пригласить</Button>
      </div>
      <div className={st.invate__message}>{CoursesStore.message}</div>
    </SectionPage>
  );
};

export default InvateStudentToCourse;
