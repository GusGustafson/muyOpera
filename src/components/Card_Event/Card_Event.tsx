import { Link } from "react-router-dom";
import { Container, Box, Typography, GlobalStyles } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useTranslation } from "react-i18next";

const cardStyles = (
  <GlobalStyles
    styles={{
      ".MuiCardContent-root": { backgroundColor: "lightyellow" },
      ".MuiTypography-root": { color: "orangered" },
      // ".MuiCardActions-root": { backgroundColor: "coral" },
      ".MuiCardActions-root": { backgroundColor: "lightyellow" },
    }}
  />
);

interface Card_Event {
  id: number;
  idTheatre: number;
  theatreName: string;
  idOpera: number;
  operaName: string;
  idSinger1: number;
  singer1Fullname: string;
  idSinger2: number;
  singer2Fullname: string;
  dateTime: string;
}

export default function Card_Event({
  id,
  // idTheatre,
  theatreName,
  // idOpera,
  operaName,
  // idSinger1,
  singer1Fullname,
  // idSinger2,
  singer2Fullname,
  dateTime,
}: Card_Event) {
  const date = new Date(dateTime);
  const formattedDate = format(date, "dd/MM/yyyy - HH:mm", { locale: es });
  const { t } = useTranslation();

  return (
    <Container>
      <Box mb={2}>
        {/* <CardMUI sx={{ maxWidth: 400 }}> */}
        <CardMUI>
          {cardStyles}
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {t("CARD_EVENT_id")} <strong>{id}</strong>
              <br />
              {t("CARD_EVENT_theatreName")} <strong>{theatreName}</strong>
              <br />
              {t("CARD_EVENT_operaName")} <strong>{operaName}</strong>
              <br />
              {t("CARD_EVENT_singer1Fullname")}{" "}
              <strong>{singer1Fullname}</strong>
              <br />
              {t("CARD_EVENT_singer2Fullname")}{" "}
              <strong>{singer2Fullname}</strong>
              <br />
              {t("CARD_EVENT_formattedDate")} <strong>{formattedDate}</strong>
            </Typography>
          </CardContent>
          <div className="cardButton">
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="warning"
                fullWidth
              >
                <Link to={`/event/${id}`}>{t("CARD_EVENT_button")}</Link>
              </Button>
            </CardActions>
          </div>
        </CardMUI>
      </Box>
    </Container>
  );
}
