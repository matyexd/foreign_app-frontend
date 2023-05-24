import ContentContainer from "../../../ui/ContentContainer/ContentContainer";
import { Text, Title, Button } from "@mantine/core";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import { ROLES } from "../../../constants/Roles";
import { observer } from "mobx-react";

const Teaching = observer(() => {
  const { role, setRole } = useSelector((store) => store.profileStore);

  const becameTeacher = () => {
    setRole(ROLES.TEACHER);
  };

  const becameStudent = () => {
    setRole(ROLES.STUDENT);
  };

  return (
    <ContentContainer>
      {role.code === ROLES.STUDENT.code && (
        <>
          <Title order={3}>Хотите стать преподавателем?</Title>
          <Text mt={20}>
            Присоединитесь к нам и станьте частью образовательной революции!
            Создавайте и публикуйте свои курсы на нашей платформе, где тысячи
            студентов будут иметь доступ к вашему знанию и опыту. Позвольте миру
            узнать о вашем таланте и внесите свой вклад в развитие образования в
            целом.
          </Text>
          <Button mt={20} onClick={() => becameTeacher()}>
            Стать преподавателем
          </Button>
        </>
      )}
      {role.code === ROLES.TEACHER.code && (
        <>
          <Title order={3}>Не хотите преподавать?</Title>
          <Button mt={20} onClick={() => becameStudent()}>
            Стать студентов
          </Button>
        </>
      )}
    </ContentContainer>
  );
});

export default Teaching;
