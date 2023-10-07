import { Link } from "react-router-dom";
import { Container, Box, Typography, GlobalStyles } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

import { images } from "../FramerMotion_Operas/image-data";

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

interface Card_Opera {
  id: number;
  image: string;
  name: string;
  composer: string;
  librettist: string;
  language: string;
  date: number;
  duration: string;
}

export default function Card_Opera({
  id,
  // image,
  name,
  composer,
}: // language,
// date,
Card_Opera) {
  const { t } = useTranslation();
  return (
    <Container>
      <Box mb={2}>
        <CardMUI sx={{ maxWidth: 400 }}>
          {/* Esta siguiente línea es un apaño mientras no consiga que acceda a las imágenes de la BD: */}
          <CardMedia sx={{ height: 300 }} image={images[id - 1]} title={name} />
          {cardStyles}
          {/* Esta línea siguiente no consigue hacer que se carguen las imágenes locales. */}
          {/* <CardMedia sx={{ height: 300 }} image={image} title={name} /> */}
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {/* Compositor: {composer} */}
              {composer}
              {/* <br /> */}
              {/* Idioma: {language} */}
              {/* <br /> */}
              {/* Fecha: {date} */}
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
                <Link to={`${id}`}>{t("CARD_OPERA_button")}</Link>
              </Button>
            </CardActions>
          </div>
        </CardMUI>
      </Box>
    </Container>
  );
}
