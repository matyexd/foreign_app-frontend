import { createStyles } from "@mantine/core";
import BGImg from "../../assets/images/slider.png";

export const useStyles = createStyles(() => ({
  root: {
    background: `url(${BGImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 500,
  },
}));
