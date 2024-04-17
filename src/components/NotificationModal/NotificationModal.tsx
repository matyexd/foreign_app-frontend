import { Modal, Text } from "@mantine/core";

import { FC } from "react";
import NotificationMessage from "../NotificationMessage";
import styles from "./NotificationModal.module.scss";

interface INotificationModalProps {
  opened: boolean | undefined;
  close: () => void;
}

const NotificationModal: FC<INotificationModalProps> = ({ opened, close }) => {
  return (
    <Modal
      size="lg"
      opened={opened ?? false}
      onClose={close}
      title={<span>Уведомления</span>}
      centered
    >
      <Text className={styles.TextRead}>Прочитанные</Text>
      <NotificationMessage
        Notification={{
          notifId: 0,
          notifTitle: "Info notification",
          notifBody: "Notification message. Here will be information.",
        }}
      />
      <Text className={styles.TextRead}>Непрочитанные</Text>
    </Modal>
  );
};

export default NotificationModal;
