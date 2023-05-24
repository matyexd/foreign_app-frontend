import styles from "./LayoutNavbar.module.scss";
import { Divider, Navbar, ScrollArea } from "@mantine/core";
import { getNavigation } from "../../../routes/navigation";
import LayoutNavbarButton from "./LayoutNavbarButton";
import LayoutNavbarLogo from "./LayoutNavbarLogo";
import LayoutNavbarBurger from "./LayoutNavbarBurger";
import { useSelector } from "../../../hooks/mobxStoreHooks/useSelector";
import { ROLES } from "../../../constants/Roles";
import { observer } from "mobx-react";

const LayoutNavbar = observer(({ sidebarOpen, setSidebarOpen }) => {
  const navigation = getNavigation();

  const { role } = useSelector((store) => store.profileStore);

  return (
    <Navbar
      className={styles.navbar}
      width={{ base: sidebarOpen ? 260 : 72 }}
      height={"110vh"}
      pl={24}
      py={30}
      style={{
        transition: "width .25s ease-in-out",
        backgroundColor: "#00093C",
      }}
    >
      <Navbar.Section pb={20}>
        <LayoutNavbarLogo opened={sidebarOpen} />
        <LayoutNavbarBurger
          opened={sidebarOpen}
          onClick={() => setSidebarOpen()}
        />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea}>
        {navigation.main.map((item) => (
          <LayoutNavbarButton
            key={item.href}
            opened={sidebarOpen}
            label={item.title}
            icon={item.icon}
            href={item.href}
          />
        ))}

        {role.code === ROLES.TEACHER.code && (
          <>
            <Divider my={15} mr={24} color="#FFFFFF" />

            {navigation.teacher.map((item) => (
              <LayoutNavbarButton
                key={item.href}
                opened={sidebarOpen}
                label={item.title}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </>
        )}
      </Navbar.Section>
    </Navbar>
  );
});

export default LayoutNavbar;
