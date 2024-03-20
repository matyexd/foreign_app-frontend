import { clsx, Group, Header, Box } from "@mantine/core";
import styles from "./LayoutHeader.module.scss";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import ProfileMenu from "./ProfileMenu";
import notification from "../../../assets/icons/notification.svg";
import { FC } from "react";

interface ILayoutHeaderProps {
  title?: string;
  back?: string;
}

const LayoutHeader: FC<ILayoutHeaderProps> = ({ title, back }) => {
  const history = useHistory();

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
            onClick={() => console.log(33)}
          />
        </Box>
        <ProfileMenu />
      </Group>
    </Header>
  );
};

export default LayoutHeader;
