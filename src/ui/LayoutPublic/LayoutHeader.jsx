import { Header, Group, Container, Burger, Box, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./styles";
import { User, Home, Language } from "tabler-icons-react";
import { useHistory } from "react-router-dom";
import { AppPath } from "../../routes/routes-enums";

export function LayoutHeader({ headerDark = false }) {
  const history = useHistory();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header height={80} sx={headerDark && { backgroundColor: "#00093C" }}>
      <Container className={classes.inner}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Language size={35} color={headerDark ? "white" : "#000000"} />
          <Text color={headerDark && "#FFFFFF"} weight={600} size={26} ml={10}>
            ForeignApp
          </Text>
        </Box>
        <div></div>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
          />
          <Group className={classes.links} spacing={5}>
            <Box
              style={{ display: "flex", marginLeft: 30, cursor: "pointer" }}
              onClick={() => {
                history.push(AppPath.main);
              }}
            >
              <Box mr={7}>
                <Home color={headerDark ? "#FFFFFF" : "#000000"} size={20} />
              </Box>
              <Text color={headerDark && "white"} className={classes.link}>
                Главная
              </Text>
            </Box>

            <Box
              style={{ display: "flex", marginLeft: 30, cursor: "pointer" }}
              onClick={() => {
                history.push(AppPath.signIn);
              }}
            >
              <Box mr={7}>
                <User color={headerDark ? "#FFFFFF" : "#000000"} size={20} />
              </Box>
              <Text color={headerDark && "white"} className={classes.link}>
                Войти
              </Text>
            </Box>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}
