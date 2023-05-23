import styles from "./LayoutNavbar.module.scss";
import { Navbar, ScrollArea } from "@mantine/core";
import { useState } from "react";
import { getNavigation } from "../../../routes/navigation";
import LayoutNavbarButton from "./LayoutNavbarButton";
import LayoutNavbarLogo from "./LayoutNavbarLogo";
import LayoutNavbarBurger from "./LayoutNavbarBurger";

const LayoutNavbar = () => {
  const [opened, setOpened] = useState(true);

  const navigation = getNavigation();

  return (
    <Navbar
      className={styles.navbar}
      width={{ base: opened ? 250 : 72 }}
      height={"110vh"}
      pl={24}
      py={30}
      style={{ transition: "width .25s ease-in-out" }}
    >
      <Navbar.Section pb={20}>
        <LayoutNavbarLogo opened={opened} />
        <LayoutNavbarBurger
          opened={opened}
          onClick={() => setOpened(!opened)}
        />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea}>
        {navigation.main.map((item) => (
          <LayoutNavbarButton
            key={item.href}
            opened={opened}
            label={item.title}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </Navbar.Section>
    </Navbar>
  );
};

export default LayoutNavbar;
