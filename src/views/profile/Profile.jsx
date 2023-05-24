import { useParams, useHistory } from "react-router-dom";
import { Tabs } from "@mantine/core";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import Teaching from "./Teaching/Teaching";
import ResetPassword from "./ResetPassword/ResetPassword";

const Profile = () => {
  const { tabValue } = useParams();
  const history = useHistory();

  return (
    <>
      <Tabs
        value={tabValue}
        onTabChange={(value) => history.push(`/profile/${value}`)}
        color={"orange"}
      >
        <Tabs.List>
          <Tabs.Tab value="settings">Настройки</Tabs.Tab>
          <Tabs.Tab value="reset_password">Сброс пароля</Tabs.Tab>
          <Tabs.Tab value="teaching">Преподавание</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={"settings"} pt="xs">
          <ProfileSettings />
        </Tabs.Panel>
        <Tabs.Panel value={"reset_password"} pt="xs">
          <ResetPassword />
        </Tabs.Panel>
        <Tabs.Panel value={"teaching"} pt="xs">
          <Teaching />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default Profile;
