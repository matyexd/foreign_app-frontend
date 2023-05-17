import { Box, Container } from "@mantine/core";
import { useStyles } from "./styles";
import WelcomeApp from "./components/WelcomApp/WelcomeApp";
import LayoutPublic from "../../ui/LayoutPublic/LayoutPublic";

const Main = () => {
  const { classes } = useStyles();

  return (
    <LayoutPublic>
      <Box className={classes.root}></Box>
      <Container mb={100}>
        <WelcomeApp />
      </Container>
    </LayoutPublic>
  );
};

export default Main;
