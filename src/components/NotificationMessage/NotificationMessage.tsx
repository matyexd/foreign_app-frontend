import { FC } from "react";
import { Text, Button } from "@mantine/core";
import styles from "./NotificationMessage.module.scss";
import { Trash, X } from "tabler-icons-react";
import { ReactComponent as InfoNotificationLogo } from "../../assets/icons/info.svg";
import { INotification } from "../../types/INotification";

interface INotificationMessageProps {
  Notification: INotification;
}

const NotificationMessage: FC<INotificationMessageProps> = ({
  Notification,
}) => {
  return (
    <div className={styles.notificationBox}>
      <div className={styles.notificationHeader}>
        <InfoNotificationLogo />
        <Text className={styles.notificationTitle}>
          {Notification.notifTitle}
        </Text>
        <div className={styles.IconsGroup}>
          <Button
            className={styles.NotificationButtons}
            onClick={() => console.log("f")}
          >
            <Trash />
          </Button>
          <Button
            className={styles.NotificationButtons}
            onClick={() => console.log("f")}
          >
            <X />
          </Button>
        </div>
      </div>

      <Text className={styles.notificationText}>{Notification.notifBody}</Text>
    </div>
  );
};
export default NotificationMessage;
