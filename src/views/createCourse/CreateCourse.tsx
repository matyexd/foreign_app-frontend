import Input from "@/ui/input/Input";
import Textarea from "@/ui/textarea/Textarea";
import React, { useState } from "react";
import st from "./CreateCourse.module.scss";
import { Button } from "@mantine/core";
import { useHistory } from "react-router-dom";
import { AppPath } from "@/routes/routes-enums";
import CoursesStore from "@/store/CoursesStore/CoursesStore";
const CreateCourse = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const create = async () => {
    CoursesStore.createCourse({
      name,
      description,
    });
    history.push(AppPath.myCourses);
  };

  return (
    <div className={st.create}>
      <Input
        value={name}
        placeholder="Название курса"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Textarea
        value={description}
        placeholder="Описание курса"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
      <Button onClick={create}>Создать курс</Button>
    </div>
  );
};

export default CreateCourse;
