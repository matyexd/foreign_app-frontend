import { useParams, useHistory } from "react-router-dom";
import { Tabs } from "@mantine/core";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import ResetPassword from "./ResetPassword/ResetPassword";
import { observer } from "mobx-react";

const Profile = observer(() => {
  const { tabValue }: { tabValue: string } = useParams();
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
          <Tabs.Tab value="reset_password" disabled>
            Сброс пароля
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={"settings"} pt="xs">
          <ProfileSettings />
        </Tabs.Panel>
        <Tabs.Panel value={"reset_password"} pt="xs">
          <ResetPassword />
        </Tabs.Panel>
      </Tabs>
    </>
  );
});

export default Profile;
