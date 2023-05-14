import { useState } from "react";
import { Header, Group, Container, Burger, Box, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./styles";
import User from "../../assets/icons/user.svg";

const links = [
  {
    id: 1,
    label: "Главная",
  },
  {
    id: 2,
    label: "Войти",
    icon: User,
  },
];

export function LayoutHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Box
      key={link.label}
      style={{ display: "flex", marginLeft: 30, cursor: "pointer" }}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.icon && (
        <img
          src={link.icon}
          alt=""
          style={{ marginRight: 10 }}
          width={18}
          height={18}
        />
      )}
      <Text
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
      >
        {link.label}
      </Text>
    </Box>
  ));

  return (
    <Header height={80}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <div></div>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>
        </Group>
      </Container>
    </Header>
  );
}
