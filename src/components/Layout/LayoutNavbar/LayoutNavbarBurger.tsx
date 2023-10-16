import { Burger, Group, Text } from "@mantine/core";

import styles from "./NavbarBurger.module.scss";
import { FC } from "react";

interface ILayoutNavbarBurgerProps {
  opened: boolean;
  onClick: () => void;
}

const LayoutNavbarBurger: FC<ILayoutNavbarBurgerProps> = ({
  opened,
  onClick,
}) => {
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Group className={styles.root} noWrap spacing={10} onClick={onClick}>
      <Burger
        className={styles.icon}
        color={"#FFFFFF"}
        opened={opened}
        title={title}
        size={15}
      />
      {opened && (
        <Text className={styles.text} lineClamp={1}>
          Свернуть
        </Text>
      )}
    </Group>
  );
};

export default LayoutNavbarBurger;
