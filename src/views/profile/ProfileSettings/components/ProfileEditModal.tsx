import { Modal, TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "./ProfileEditModal.module.scss";
import { useRootStore } from "@/hooks/mobxStoreHooks/useStore";
import { FC, FormEvent } from "react";

interface NameFormValues {
  firstName: string;
  secondName: string;
}

interface EmailFormValues {
  email: string;
}

interface IProfileEditModalProps {
  opened?: boolean;
  onClose: () => void;
  inputLabel?: string;
}

const ProfileEditModal: FC<IProfileEditModalProps> = ({
  opened,
  onClose,
  inputLabel,
}) => {
  const store = useRootStore();
  const { firstName, lastName, email, setFirstName, setLastName, setEmail } =
    store.profileStore;

  const emailFormat = /^\S+@\S+$/;

  const nameForm = useForm<NameFormValues>({
    initialValues: {
      firstName: String(firstName),
      secondName: String(lastName),
    },
    validate: {
      firstName: (value) =>
        value.length > 0 ? null : "Поле имени не должно быть пустым",
      secondName: (value) =>
        value.length > 0 ? null : "Поле фамилии не должно быть пустым",
    },
  });

  const emailForm = useForm<EmailFormValues>({
    initialValues: {
      email: String(email),
    },
    validate: {
      email: (value) =>
        value.length > 0
          ? emailFormat.test(value)
            ? null
            : "Неккоретный email"
          : "Email не должен быть пустым",
    },
  });

  const changeProfileName = (values: NameFormValues, event: FormEvent) => {
    event.preventDefault();
    setFirstName(values.firstName);
    setLastName(values.secondName);
    onClose();
  };

  const changeProfileEmail = (values: EmailFormValues, event: FormEvent) => {
    event.preventDefault();
    setEmail(values.email);
    onClose();
  };

  return (
    <Modal
      opened={!!opened}
      onClose={onClose}
      styles={{ header: { marginBottom: 0 } }}
    >
      {inputLabel === "name" && (
        <form
          onSubmit={nameForm.onSubmit((values, event) =>
            changeProfileName(values, event)
          )}
        >
          <TextInput
            mb={20}
            label={"Имя"}
            {...nameForm.getInputProps("firstName")}
          />
          <TextInput
            mb={20}
            label={"Фамилия"}
            {...nameForm.getInputProps("secondName")}
          />
          <div className={styles.btnModal}>
            <Button type="submit">Применить</Button>
            <Button onClick={onClose}>Отмена</Button>
          </div>
        </form>
      )}
      {inputLabel === "email" && (
        <form
          onSubmit={emailForm.onSubmit((values, event) =>
            changeProfileEmail(values, event)
          )}
        >
          <TextInput
            mb={20}
            label={"Email"}
            {...emailForm.getInputProps("email")}
          />
          <div className={styles.btnModal}>
            <Button type="submit">Применить</Button>
            <Button onClick={onClose}>Отмена</Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ProfileEditModal;
