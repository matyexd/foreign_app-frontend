import { Box, Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ICourse } from "@/types/ICourse";
import { FC } from "react";

interface Props {
  course: ICourse;
}

const FooterCourse: FC<Props> = ({ course }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box>
      <Group>
        <Button onClick={open} color={"red"}>
          Удалить курс
        </Button>
      </Group>
      <Modal
        opened={opened}
        onClose={close}
        title={
          <span>
            Удалить <b>{course.name}</b> ?
          </span>
        }
        centered
      >
        <Group>
          <Button>Да</Button>
          <Button color={"red"}>Отмена</Button>
        </Group>
      </Modal>
    </Box>
  );
};

export default FooterCourse;
