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
      <Grid mt={40}>
        <Grid.Col sm={3}>
          <Box className={classes.imgBox}>
            <img src={process} alt="" />
          </Box>
          <Text className={classes.textWelcome}>
            Передовой подход к образовательному процессу
          </Text>
        </Grid.Col>
        <Grid.Col sm={3}>
          <Box className={classes.imgBox}>
            <img src={book} alt="" />
          </Box>
          <Text className={classes.textWelcome}>
            Непрерывное усовершенствование и пополнение базы курсов
          </Text>
        </Grid.Col>
        <Grid.Col sm={3}>
          <Box className={classes.imgBox}>
            <img src={teachers} alt="" />
          </Box>
          <Text className={classes.textWelcome}>
            Только практикующие преподаватели
          </Text>
        </Grid.Col>
        <Grid.Col sm={3}>
          <Box className={classes.imgBox}>
            <img src={student} alt="" />
          </Box>
          <Text className={classes.textWelcome}>
            Сопровождение на всех этапах
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default WelcomeApp;
