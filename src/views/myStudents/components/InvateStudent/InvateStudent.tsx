import React, { useState } from "react";
import st from "./InvateStudent.module.scss";
import Input from "@/ui/input/Input";
import { Button } from "@mantine/core";
import TeacherStore from "@/store/TeacherStore/TeacherStore";
import { observer } from "mobx-react";

const InvateStudent = observer(() => {
  const [mail, setMail] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  const submit = () => {
    TeacherStore.inviteStudent(Number(mail));
  };

  return (
    <div className={st.invate}>
      <form className={st.invate__form} onSubmit={formSubmit}>
        <Input
          className={st.invate__input}
          placeholder="Электронная почта студента"
          value={mail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMail(e.target.value)
          }
        />
        <Button onClick={submit}>Пригласить</Button>
      </form>
      <div className={st.invate__msg}>{TeacherStore.message}</div>
    </div>
  );
});

export default InvateStudent;
