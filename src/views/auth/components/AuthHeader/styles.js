import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  item: {
    textAlign: "center",
    width: "50%",
    paddingBottom: 5,
    borderBottom: "1px solid #E0E0E0",
    paddingTop: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    "&.activeButton": {
      borderBottom: "4px solid rgb(247,148,29)",
      borderImage:
        "linear-gradient(137deg, rgba(247,148,29,0.9793417366946778) 18%, rgba(0,144,205,1) 100%)",
      borderImageSlice: 1,
    },
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
}));
