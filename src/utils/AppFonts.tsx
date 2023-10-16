import { Global } from "@mantine/core";

import regular from "../assets/fonts/Montserrat-Regular.woff2";
import medium from "../assets/fonts/Montserrat-Medium.woff2";
import semiBold from "../assets/fonts/Montserrat-SemiBold.woff2";
import bold from "../assets/fonts/Montserrat-Bold.woff2";

export function AppFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Montserrat",
            src: `url('${regular}') format("woff2")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Montserrat",
            src: `url('${medium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Montserrat",
            src: `url('${semiBold}') format("woff2")`,
            fontWeight: 600,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Montserrat",
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
