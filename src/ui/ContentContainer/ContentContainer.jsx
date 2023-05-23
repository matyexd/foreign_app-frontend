import React from "react";
import { Container, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    borderRadius: 10,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
}));

const ContentContainer = ({ children, style }) => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root} fluid={true} p={20} style={style}>
      {children}
    </Container>
  );
};

export default ContentContainer;
