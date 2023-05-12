import { useState } from "react";
import { Header, Group, Container, Burger, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./styles";
import User from "../../assets/icons/user.svg";

const links = [
  {
    id: 1,
    link: "https://google.com",
    label: "Главная",
  },
  {
    id: 2,
    link: "https://google.com",
    label: "Войти",
    icon: User,
  },
];

export function LayoutHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Box key={link.label} style={{ display: "flex", marginLeft: 30 }}>
      {link.icon && <img src={link.icon} alt="" style={{ marginRight: 10 }} />}
      <a
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
        }}
      >
        {link.label}
      </a>
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
