import Layout from "../../ui/Layout";
import { Box, Container } from "@mantine/core";
import { useStyles } from "./styles";
import WelcomeApp from "./components/WelcomApp/WelcomeApp";

const Main = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.root}></Box>
      <Container mb={100}>
        <WelcomeApp />
      </Container>
    </Layout>
  );
};

export default Main;
