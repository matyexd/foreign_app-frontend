import { AppShell, Container } from "@mantine/core";
import LayoutHeader from "./LayoutHeader";
import LayoutNavbar from "./LayoutNavbar/LayoutNavbar";

const Layout = ({ children, title }) => {
  return (
    <AppShell navbar={<LayoutNavbar />} padding={0}>
      <LayoutHeader />
      <Container fluid={true} py={16}>
        {children}
      </Container>
    </AppShell>
  );
};

export default Layout;
