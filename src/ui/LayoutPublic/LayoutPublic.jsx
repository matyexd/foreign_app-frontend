import { AppShell } from "@mantine/core";
import LayoutFooter from "../Layout/LayoutFooter";
import { LayoutHeader } from "../Layout/LayoutHeader";

const LayoutPublic = ({ children, padding, headerDark }) => {
  return (
    <AppShell
      header={<LayoutHeader headerDark={headerDark} />}
      footer={<LayoutFooter />}
      padding={padding}
    >
      {children}
    </AppShell>
  );
};

export default LayoutPublic;
