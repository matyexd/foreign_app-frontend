import { AppShell, Container, Loader } from "@mantine/core";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutNavbar from "./LayoutNavbar/LayoutNavbar";
import { Suspense } from "react";

const Layout = ({ children, title }) => {
  return (
    <AppShell navbar={<LayoutNavbar />} padding={0}>
      <LayoutHeader title={title} />
      <Container fluid={true} py={16}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Container>
    </AppShell>
  );
};

export default Layout;
