import { AppShell } from "@mantine/core";
import LayoutFooter from "./LayoutFooter";
import { LayoutHeader } from "./LayoutHeader";
import {FC, ReactNode} from "react";

interface ILayoutPublicProps {
  children: ReactNode;
  padding?: number;
  headerDark?: boolean;
}

const LayoutPublic: FC<ILayoutPublicProps> = ({ children, padding, headerDark }) => {
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
