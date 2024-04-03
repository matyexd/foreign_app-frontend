import { Modal, Text } from "@mantine/core";

import { FC } from "react";
import NotificationMessage from "../NotificationMessage";

interface INotificationModalProps {
  opened: boolean | undefined;
  close: () => void;
}

const NotificationModal: FC<INotificationModalProps> = ({ opened, close }) => {
  return (
    <Modal
      opened={opened ?? false}
      onClose={close}
      title={<span>Уведомления</span>}
      centered
    >
      <Text style={{ textAlign: "center" }}>Прочитанные</Text>
      <NotificationMessage />
      <Text style={{ textAlign: "center" }}>Непрочитанные</Text>
    </Modal>
  );
};

export default NotificationModal;
