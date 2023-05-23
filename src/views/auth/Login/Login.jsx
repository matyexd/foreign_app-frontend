import { Box, TextInput, Button, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import AuthLayout from "../components/AuthLayout";
import { useHistory } from "react-router-dom";
import { AppPath } from "../../../routes/routes-enums";

const useStyles = createStyles(() => ({
  root: {
    paddingLeft: "3.5rem",
    paddingRight: "3.5rem",
    height: 50,
  },
}));

export const Login = () => {
  const { classes } = useStyles();
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validate: {
      email: (value) =>
        value.length > 0 ? null : "Поле не должно быть пустым",
      password: (value) =>
        value.length > 0 ? null : "Пароль не может быть пустым",
    },
  });

  return (
    <AuthLayout active={"signIn"}>
      <Box mt={40} px={100}>
        <form
          onSubmit={form.onSubmit((values, event) =>
            handleLogin(values, event)
          )}
        >
          <TextInput placeholder="Введите email" />
          <TextInput mt={20} placeholder="Введите пароль" />
          <Box
            w="100%"
            display={"flex"}
            sx={{ justifyContent: "center" }}
            mt={20}
          >
            <Button
              onClick={() => history.push(AppPath.communityCourses)}
              className={classes.root}
              size={"xl"}
            >
              Войти
            </Button>
          </Box>
        </form>
      </Box>
    </AuthLayout>
  );
};
