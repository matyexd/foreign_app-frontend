import { AppShell } from "@mantine/core";
import LayoutFooter from "./LayoutFooter";
import { LayoutHeader } from "./LayoutHeader";

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
