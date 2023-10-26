import { BREAKPOINTS } from "./breakpoints";
import {MantineThemeOverride} from "@mantine/core";

export const appTheme: MantineThemeOverride = {
  breakpoints: BREAKPOINTS,
  fontFamily: "Montserrat",
  fontSizes: {
    xs: '14px',
    sm: '14px',
    md: '14px',
    lg: '14px',
    xl: '14px',
  },
  primaryColor: "orange",
  components: {
    AppShell: {
      defaultProps: {
        fixed: false,
      },
      styles: () => ({
        root: {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
        body: {
          flex: "1 1 0%",
          backgroundColor: "#f8f8f8",
        },
        main: {
          minWidth: 0,
          padding: 0,
        },
      }),
    },
    TextInput: {
      styles: () => ({
        input: {
          backgroundColor: "#DDDFE6",
          height: 50,
        },
      }),
    },
  },
};
