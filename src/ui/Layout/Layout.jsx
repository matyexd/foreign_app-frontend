import { Container, Box } from "@mantine/core";
import { LayoutHeader } from "./LayoutHeader";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Container>
          <LayoutHeader />
        </Container>
      </Box>
      {children}
    </>
  );
};

export default Layout;
