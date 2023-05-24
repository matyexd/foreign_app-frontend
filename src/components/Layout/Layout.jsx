import { AppShell, Container, Loader } from "@mantine/core";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutNavbar from "./LayoutNavbar/LayoutNavbar";
import { Suspense } from "react";
import { observer } from "mobx-react";
import { useSelector } from "../../hooks/mobxStoreHooks/useSelector";

const Layout = observer(({ children, title }) => {
  const { sidebarOpen, setSidebarOpen } = useSelector(
    (store) => store.layoutStore
  );

  return (
    <AppShell
      navbar={
        <LayoutNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      }
      padding={0}
    >
      <LayoutHeader title={title} />
      <Container fluid={true} py={16}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Container>
    </AppShell>
  );
});

export default Layout;
