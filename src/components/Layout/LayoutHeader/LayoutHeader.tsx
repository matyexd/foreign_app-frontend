import { clsx, Group, Header, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./LayoutHeader.module.scss";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import ProfileMenu from "./ProfileMenu";
import { ReactComponent as NotificationLogo } from "../../../assets/icons/notification.svg";
import NotificationModal from "../../NotificationModal/NotificationModal";
import { FC } from "react";

interface ILayoutHeaderProps {
  title?: string;
  back?: string;
}

const LayoutHeader: FC<ILayoutHeaderProps> = ({ title, back }) => {
  const history = useHistory();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Header className={styles.header} height={60} py="xs" px={16}>
      {(title || back) && (
        <div
          className={clsx(styles.title, back && styles.titleBack)}
          onClick={back ? () => history.push(back) : undefined}
        >
          {back && <ArrowLeft size={24} />}
          {title || "Назад"}
        </div>
      )}

      <Group ml="auto">
        <Button style={{ backgroundColor: "transparent" }} onClick={open}>
          <NotificationLogo />
        </Button>
        <NotificationModal opened={opened} close={close} />
        <ProfileMenu />
      </Group>
    </Header>
  );
};

export default LayoutHeader;
