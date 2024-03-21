import { clsx, Group, Header, Box, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./LayoutHeader.module.scss";
import { useHistory } from "react-router-dom";
import { ArrowLeft, Trash, X } from "tabler-icons-react";
import ProfileMenu from "./ProfileMenu";
import notification from "../../../assets/icons/notification.svg";
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
        <Box>
          <img
            src={notification}
            alt="notification"
            style={{ cursor: "pointer" }}
            onClick={open}
          />
        </Box>
        <Modal
          opened={opened}
          onClose={close}
          title={<span>Прочитанные</span>}
          centered
        >
          <Group>
            <Box className={styles.notificationBox}>
              <Text className={styles.notificationTitle}>
                Info notification
                <div className={styles.icon}>
                  <Trash />
                  <X />
                </div>
              </Text>
              <Text className={styles.notificationText}>
                Notification message. Here will be information.{" "}
              </Text>
            </Box>
            <Box className={styles.notificationBox}>
              <Text className={styles.notificationTitle}>
                Info notification
                <div className={styles.icon}>
                  <Trash />
                  <X />
                </div>
              </Text>
              <Text className={styles.notificationText}>
                Notification message. Here will be information.{" "}
              </Text>
            </Box>
          </Group>
        </Modal>
        <ProfileMenu />
      </Group>
    </Header>
  );
};

export default LayoutHeader;
