import { createStyles } from "@mantine/core";
import BGImg from "../../assets/images/slider.png";

export const useStyles = createStyles((theme) => ({
  root: {
    background: `url(${BGImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 500,
    [`@media (max-width: ${theme.breakpoints.lg - 1}px)`]: {
      height: 400,
    },
    [`@media (max-width: ${theme.breakpoints.md - 1}px)`]: {
      height: 300,
    },
    [`@media (max-width: ${theme.breakpoints.sm - 1}px)`]: {
      height: 250,
    },
    [`@media (max-width: ${theme.breakpoints.sm - 1}px)`]: {
      height: 200,
    },
  },
}));
