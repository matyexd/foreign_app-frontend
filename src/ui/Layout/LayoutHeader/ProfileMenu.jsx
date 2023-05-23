import { Button, Menu, Text } from "@mantine/core";
import { Logout, User } from "tabler-icons-react";

const ProfileMenu = () => {
  return (
    <>
      <Menu width={300} shadow="md">
        <Menu.Target>
          <Button variant="outline" pt={3}>
            Профиль
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item icon={<User size={20} />}>
            <Text pt={3}>Настройки профиля</Text>
          </Menu.Item>
          <Menu.Item icon={<Logout size={20} color="red" />}>Выйти</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default ProfileMenu;
