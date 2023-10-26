import { createStyles } from "@mantine/core";
import BGImg from "../../assets/images/slider.png";

export const useStyles = createStyles((theme) => ({
  root: {
    background: `url(${BGImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 500,
    [`@media (max-width: ${theme.breakpoints.lg})`]: {
      height: 400,
    },
    [`@media (max-width: ${theme.breakpoints.md})`]: {
      height: 300,
    },
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      height: 250,
    },
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      height: 200,
    },
  },
}));
