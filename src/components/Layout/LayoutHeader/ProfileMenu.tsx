import { Button, Menu, Text } from "@mantine/core";
import { Logout, User } from "tabler-icons-react";
import { useHistory } from "react-router-dom";
import { AppPath } from "@/routes/routes-enums";

const ProfileMenu = () => {
  const history = useHistory();

  return (
    <>
      <Menu width={300} shadow="md">
        <Menu.Target>
          <Button pt={3}>Профиль</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={<User size={20} />}
            onClick={() => history.push(AppPath.profileSettings)}
          >
            <Text pt={3}>Настройки профиля</Text>
          </Menu.Item>
          <Menu.Item
            onClick={() => history.push(AppPath.main)}
            icon={<Logout size={20} color="red" />}
          >
            Выйти
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default ProfileMenu;
