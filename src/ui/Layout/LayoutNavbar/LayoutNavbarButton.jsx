import { clsx, Group, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import styles from "./NavbarButton.module.scss";

const LayoutNavbarButton = ({ opened = true, label, icon, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        clsx(styles.root, isActive ? styles.rootActive : "")
      }
    >
      <Group spacing={10} noWrap>
        {icon}
        {opened && (
          <Text className={styles.text} lineClamp={1}>
            {label}
          </Text>
        )}
      </Group>
    </NavLink>
  );
};

export default LayoutNavbarButton;
