import React, { useState } from "react";
import st from "./InvateStudent.module.scss";
import Input from "@/ui/input/Input";
import { Button } from "@mantine/core";

const InvateStudent = () => {
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  const submit = () => {
    if (mail) setMsg("Студент успешно приглашён");
    else setMsg("Пользователь с такой почтой не был найден");
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
      <div className={st.invate__msg}>{msg}</div>
    </div>
  );
};

export default InvateStudent;
