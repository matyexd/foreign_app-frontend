import { Box, TextInput, Button, createStyles, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import AuthLayout from "../components/AuthLayout";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { useRootStore } from "@/hooks/mobxStoreHooks/useStore";
import { FormEvent } from "react";
import { AppPath } from "@/routes/routes-enums";

const useStyles = createStyles(() => ({
  root: {
    paddingLeft: "3.5rem",
    paddingRight: "3.5rem",
    height: 50,
  },
}));

export interface FormValues {
  phoneNumber: string;
}

export const Login = observer(() => {
  const { classes } = useStyles();
  const store = useRootStore();
  const { postGetCode, inProcess, errors } = store.authStore;
  const history = useHistory();

  const handleLogin = (values: FormValues, event: FormEvent) => {
    event.preventDefault();
    console.log(values);
    postGetCode({ phoneValue: values.phoneNumber });
  };

  const form = useForm<FormValues>({
    initialValues: {
      phoneNumber: "",
    },

    validate: {
      phoneNumber: (value) =>
        value.length > 0 ? null : "Поле не должно быть пустым",
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
          <TextInput
            placeholder="Укажите телефон"
            {...form.getInputProps("phoneNumber")}
          />
          <Box
            w="100%"
            display={"flex"}
            sx={{ justifyContent: "center" }}
            mt={20}
          >
            <Button
              // onClick={() => history.push(AppPath.communityCourses)}
              type={"submit"}
              className={classes.root}
              size={"xl"}
              loading={inProcess}
            >
              Отправить код
            </Button>
          </Box>
        </form>
      </Box>
      {errors && (
        <Box display={"flex"} sx={{ justifyContent: "center", marginTop: 30 }}>
          <Text color={"red"}>{errors}</Text>
        </Box>
      )}
    </AuthLayout>
  );
});
