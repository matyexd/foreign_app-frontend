import { Button, Menu, Text, Box, Modal } from "@mantine/core";
import { Logout, User } from "tabler-icons-react";
import { useHistory } from "react-router-dom";
import { AppPath } from "@/routes/routes-enums";
import { useRootStore } from "@/hooks/mobxStoreHooks/useStore";
import notification from "../../../assets/icons/notification.svg";

const ProfileMenu = () => {
  const history = useHistory();
  const store = useRootStore();
  const { logout } = store.authStore;

  return (
    <>
      <Menu width={300} shadow="md">
        <Box>
          <img
            src={notification}
            alt="notification"
            style={{ cursor: "pointer" }}
            onClick={() => console.log(33)}
          />
        </Box>

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
            onClick={() => logout()}
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
