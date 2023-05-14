import { Container, Box } from "@mantine/core";
import { LayoutHeader } from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Container>
          <LayoutHeader />
        </Container>
      </Box>
      {children}
      <Box>
        <LayoutFooter />
      </Box>
    </>
  );
};

export default Layout;
