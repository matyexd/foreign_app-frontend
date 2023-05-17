import LayoutPublic from "../../../ui/LayoutPublic/LayoutPublic";
import { Box, createStyles } from "@mantine/core";
import AuthHeader from "./AuthHeader/AuthHeader";

const useStyles = createStyles(() => ({
  formCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px 16px",
  },
}));

const AuthLayout = ({ active, children }) => {
  const { classes } = useStyles();

  return (
    <LayoutPublic headerDark={true}>
      <Box mih={"100%"} className={classes.formCol}>
        <Box w="100%" maw={600} mx="auto">
          <AuthHeader active={active} />
          {children}
        </Box>
      </Box>
    </LayoutPublic>
  );
};

export default AuthLayout;
