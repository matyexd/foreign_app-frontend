import { Box, Group, Text } from "@mantine/core";

import styles from "./NavbarLogo.module.scss";
import { Language } from "tabler-icons-react";

const LayoutNavbarLogo = ({ opened = true }) => {
  return (
    <div className={styles.root}>
      <Group spacing={10} noWrap>
        <div className={styles.icon}>
          {opened ? (
            <Box className={styles.logo} ml={-5}>
              <Language size={35} color={"#000000"} />
              <Text ml={5}>ForeignApp</Text>
            </Box>
          ) : (
            <Box className={styles.logo} mt={3} ml={-5}>
              <Language size={35} color={"#000000"} />
            </Box>
          )}
        </div>
      </Group>
    </div>
  );
};

export default LayoutNavbarLogo;
