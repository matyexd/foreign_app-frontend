import { Box, Text, Grid } from "@mantine/core";
import { useStyles } from "./styles";
import teachers from "../../../../assets/icons/teachers.svg";
import book from "../../../../assets/icons/book.svg";
import process from "../../../../assets/icons/process.svg";
import student from "../../../../assets/icons/student.svg";

const WelcomeApp = () => {
  const { classes } = useStyles();

  return (
    <Box mt={20}>
      <Text className={classes.title}>Добро пожаловать в Foreign app</Text>
      <Grid mt={20}>
        <Grid.Col sm={3}>
          <img src={process} alt="" />
          <Text className={classes.textWelcome}>
            Передовой подход к образовательному процессу
          </Text>
        </Grid.Col>
        <Grid.Col sm={3}>
          <img src={book} alt="" />
          <Text className={classes.textWelcome}>
            Непрерывное усовершенствование и пополнение базы курсов
          </Text>
        </Grid.Col>
        <Grid.Col sm={3}>
          <img src={teachers} alt="" />
          <Text className={classes.textWelcome}>
            Только практикующие преподаватели
          </Text>
        </Grid.Col>
        <Grid.Col sm={3}>
          <img src={student} alt="" />
          <Text className={classes.textWelcome}>
            Сопровождение на всех этапах. От начала обучения до трудоустройства
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default WelcomeApp;
