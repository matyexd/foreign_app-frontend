import React, { useState } from "react";
import st from "./InvateStudent.module.scss";
import DropdownMenu from "@/ui/dropdown/DropdownMenu";
import Input from "@/ui/input/Input";
import { Button } from "@mantine/core";

const values = [
  {
    value: "Немецкий язык",
    name: "Немецкий язык",
  },
  {
    value: "Английский язык",
    name: "Английский язык",
  },
  {
    value: "Болгарский язык",
    name: "Болгарский язык",
  },
  {
    value: "Испансикий язык",
    name: "Испансикий язык",
  },
  {
    value: "Узбекский язык",
    name: "Узбекский язык",
  },
  {
    value: "Эльфийский язык",
    name: "Эльфийский язык",
  },
];

const InvateStudent = () => {
  const [current, setCurrent] = useState(values[0]);
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = () => {
    if (mail) setMsg("Студент успешно приглашён");
    else setMsg("Пользователь с такой почтой не был найден");
  };

  return (
    <div className={st.invate}>
      <div className={st.invate__form}>
        <DropdownMenu
          values={values}
          current={current}
          setCurrent={setCurrent}
          className={st.invate__drop}
        />
        <Input
          className={st.invate__input}
          placeholder="Электронная почта студента"
          value={mail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMail(e.target.value)
          }
        />
        <Button onClick={submit}>Пригласить</Button>
      </div>
      <div className={st.invate__msg}>{msg}</div>
    </div>
  );
};

export default InvateStudent;
