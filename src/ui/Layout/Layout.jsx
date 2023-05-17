import { Container, Box } from "@mantine/core";
import { LayoutHeader } from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

const Layout = ({ children, header = true }) => {
  return (
    <Box style={{ backgroundColor: "#E5E5E5" }}>
      <Box
        sx={[{ backgroundColor: "#FFFFFF" }, !header && { display: "none" }]}
      >
        <Container>
          <LayoutHeader />
        </Container>
      </Box>
      {children}
      <Box>
        <LayoutFooter />
      </Box>
    </Box>
  );
};

export default Layout;
