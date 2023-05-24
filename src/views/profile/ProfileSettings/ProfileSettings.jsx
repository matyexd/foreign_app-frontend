import ContentContainer from "../../../ui/ContentContainer/ContentContainer";
import { Title, Button, Text } from "@mantine/core";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import styles from "./ProfileSettings.module.scss";
import { useState } from "react";
import ProfileEditModal from "./components/ProfileEditModal";

const ProfileSettings = () => {
  const { firstName, lastName, role, email } = useSelector(
    (store) => store.profileStore
  );

  const [opened, setOpened] = useState();
  const [selectedLabel, setSelectedLabel] = useState();

  const handleClick = (event) => {
    setOpened(true);
    const { name } = event.currentTarget.dataset;

    switch (name) {
      case "name":
        setSelectedLabel(name);
        break;
      case "phone":
        setSelectedLabel(name);
        break;
      case "email":
        setSelectedLabel(name);
        break;
    }
  };

  return (
    <ContentContainer>
      <Title pb={15} order={3}>
        {firstName} {lastName}
        <Button
          variant="subtle"
          className={styles.btn}
          onClick={handleClick}
          data-name={"name"}
        >
          (Изменить)
        </Button>
      </Title>
      <Text>Аккаунт создан: 1 января 2023</Text>
      <Text>
        Email{" "}
        <Button
          variant="subtle"
          className={styles.btn}
          onClick={handleClick}
          data-name={"email"}
        >
          (Изменить)
        </Button>
        : {email}
      </Text>
      <Text>Роль: {role.name}</Text>
      <ProfileEditModal
        opened={opened}
        inputLabel={selectedLabel}
        onClose={() => setOpened(false)}
      />
    </ContentContainer>
  );
};

export default ProfileSettings;
