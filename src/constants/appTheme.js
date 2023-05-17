import { BREAKPOINTS } from "./breakpoints";

export const appTheme = {
  breakpoints: BREAKPOINTS,
  fontFamily: "Montserrat",
  fontSizes: {
    xs: 14,
    sm: 14,
    md: 14,
    lg: 14,
    xl: 14,
  },
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
