import ContentContainer from "../../../ui/ContentContainer/ContentContainer";
import { Title, Button, Text } from "@mantine/core";
import styles from "./ProfileSettings.module.scss";
import { useState } from "react";
import ProfileEditModal from "./components/ProfileEditModal";
import { useRootStore } from "@/hooks/mobxStoreHooks/useStore";

const ProfileSettings = () => {
  const store = useRootStore();
  const { firstName, lastName, role, email } = store.profileStore;

  const [opened, setOpened] = useState<boolean>();
  const [selectedLabel, setSelectedLabel] = useState<string>();

  const handleClick = (value: string) => {
    setOpened(true);
    switch (value) {
      case "name":
        setSelectedLabel(value);
        break;
      case "phone":
        setSelectedLabel(value);
        break;
      case "email":
        setSelectedLabel(value);
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
          onClick={() => handleClick("name")}
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
          onClick={() => handleClick("email")}
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
