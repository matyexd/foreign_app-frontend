import { Box, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { clsx } from "@mantine/core";
import { useHistory } from "react-router-dom";
import { AppPath } from "../../../../routes/routes-enums";
import { FC } from "react";

interface IAuthHeader {
  active: string;
}

const AuthHeader: FC<IAuthHeader> = ({ active }) => {
  const { classes } = useStyles();
  const history = useHistory();
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        className={clsx(classes.item, active === "signIn" && "activeButton")}
        sx={active === "signUp" ? { cursor: "pointer" } : undefined}
        onClick={() => active !== "signIn" && history.push(AppPath.signIn)}
      >
        <Text className={classes.text}>Вход</Text>
      </Box>
      {/*<Box*/}
      {/*  className={clsx(classes.item, active === "signUp" && "activeButton")}*/}
      {/*  sx={active === "signIn" && { cursor: "pointer" }}*/}
      {/*  onClick={() => active !== "signUp" && history.push(AppPath.signUp)}*/}
      {/*>*/}
      {/*  <Text className={classes.text}>Регистрация</Text>*/}
      {/*</Box>*/}
    </Box>
  );
};

export default AuthHeader;
