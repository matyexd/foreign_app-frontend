import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(80),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    backgroundColor: "none",
    fontWeight: 500,
    textDecoration: "none",
  },

  footerBox: {
    backgroundColor: "#00093C",
  },

  phone: {
    fontWeight: 600,
    fontSize: 18,
    color: "#FFFFFF",
  },
  text: {
    marginTop: 10,
    fontWeight: 500,
    fontSize: 14,
    color: "#FFFFFF",
  },
}));
