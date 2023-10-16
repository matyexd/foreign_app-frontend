import { AppShell, Container, Loader } from "@mantine/core";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutNavbar from "./LayoutNavbar/LayoutNavbar";
import { FC, ReactNode, Suspense } from "react";
import { observer } from "mobx-react";
import { useRootStore } from "@/hooks/mobxStoreHooks/useStore";

interface ILayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: FC<ILayoutProps> = observer(({ children, title }) => {
  const store = useRootStore();
  const { sidebarOpen, setSidebarOpen } = store.layoutStore;

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
