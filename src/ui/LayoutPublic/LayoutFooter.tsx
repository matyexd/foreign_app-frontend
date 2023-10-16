import { Box, Container, Grid, Text, Footer } from "@mantine/core";
import { useStyles } from "./styles";
import Telegram from "../../assets/icons/telegram.svg";
import Vk from "../../assets/icons/vk.svg";

const LayoutFooter = () => {
  const { classes } = useStyles();

  return (
    <Footer className={classes.footerBox} height={230}>
      <Container>
        <Grid style={{ paddingTop: 30 }}>
          <Grid.Col span={6}>
            <Text className={classes.phone}>8 800 950-33-98</Text>
            <Text className={classes.text}>г. Томск, ул. Ленина, д. 50</Text>
            <Text className={classes.text}>info@foreignapp.ru</Text>
            <Box display={"flex"} style={{ marginTop: 30 }}>
              <img
                style={{ marginRight: 15 }}
                src={Telegram}
                alt=""
                width={20}
              />
              <img style={{ marginRight: 15 }} src={Vk} alt="" width={25} />
            </Box>
            <Text
              style={{
                color: "#BDBDBD",
                fontWeight: 400,
                fontSize: 12,
                marginTop: 20,
              }}
            >
              © ХОД, Foreignapp
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 14 }}>
              Команда ГПО
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                lineHeight: 2,
                fontSize: 12,
                marginTop: 10,
              }}
            >
              Варламова Кристина Александровна <br />
              Джиоева Эрика Цезарьевна <br />
              Комаров Евгений Владимирович <br />
              Мамочкин Матвей Михайлович <br />
              Фелингер Владимир Александрович <br />
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Footer>
  );
};

export default LayoutFooter;
