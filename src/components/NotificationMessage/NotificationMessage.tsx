import { FC } from "react";
import { Text, Button } from "@mantine/core";
import styles from "./NotificationMessage.module.scss";
import { Trash, X } from "tabler-icons-react";
import { ReactComponent as InfoNotificationLogo } from "../../assets/icons/info.svg";

interface INotificationMessageProps {}

const NotificationMessage: FC<INotificationMessageProps> = ({}) => {
  return (
    <div className={styles.notificationBox}>
      <div className={styles.notificationHeader}>
        <InfoNotificationLogo />
        <Text className={styles.notificationTitle}>Info notification</Text>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 5px 0 auto",
          }}
        >
          <Button className={styles.NotificationButtons}>
            <Trash />
          </Button>
          <Button className={styles.NotificationButtons}>
            <X />
          </Button>
        </div>
      </div>

      <Text className={styles.notificationText}>
        Notification message. Here will be information.
      </Text>
    </div>
  );
};
export default NotificationMessage;
