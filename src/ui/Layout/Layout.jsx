import { AppShell, Container } from "@mantine/core";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutNavbar from "./LayoutNavbar/LayoutNavbar";

const Layout = ({ children, title }) => {
  return (
    <AppShell navbar={<LayoutNavbar />} padding={0}>
      <LayoutHeader title={title} />
      <Container fluid={true} py={16}>
        {children}
      </Container>
    </AppShell>
  );
};

export default Layout;
