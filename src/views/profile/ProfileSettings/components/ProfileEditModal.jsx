import { Modal, TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "./ProfileEditModal.module.scss";
import { useSelector } from "../../../../hooks/mobxStoreHooks/useSelector";

const ProfileEditModal = ({ opened, onClose, inputLabel }) => {
  const { firstName, lastName, email, setFirstName, setLastName, setEmail } =
    useSelector((store) => store.profileStore);

  const emailFormat = /^\S+@\S+$/;

  const nameForm = useForm({
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

  const emailForm = useForm({
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

  const changeProfileName = (values, event) => {
    event.preventDefault();
    setFirstName(values.firstName);
    setLastName(values.secondName);
    onClose();
  };

  const changeProfileEmail = (values, event) => {
    event.preventDefault();
    setEmail(values.email);
    onClose();
  };

  return (
    <Modal
      opened={opened}
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
