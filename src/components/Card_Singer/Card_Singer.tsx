import { Link } from "react-router-dom";
import { Container, Box, Typography, GlobalStyles } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { images } from "./image-data";

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

interface Card_Singer {
  id: number;
  image: string;
  name: string;
  surname: string;
  voice: string;
  birthYear: number;
  nationality: string;
  website: string;
}

export default function Card_Singer({
  id,
  image,
  name,
  surname,
  voice,
  // birthYear,
  // nationality,
}: Card_Singer) {
  return (
    <Container>
      <Box mb={2}>
        <CardMUI sx={{ maxWidth: 400 }}>
          {/* Esta siguiente línea es un apaño mientras no consiga que acceda a las imágenes de la BD: */}
          <CardMedia sx={{ height: 300 }} image={images[id - 1]} title={surname} />
          {cardStyles}
          {/* Esta línea siguiente no consigue hacer que se carguen las imágenes locales. */}
          {/* <CardMedia sx={{ height: 300 }} image={image} title={name} /> */}
          <CardContent>
            <Typography variant="h5" component="div">
              {name} {surname}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {/* Voz: {voice} */}
              {voice}
              {/* <br /> */}
              {/* Año de nacimiento: {birthYear} */}
              {/* <br /> */}
              {/* Nacionalidad: {nationality} */}
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
                <Link to={`${id}`}>Información del cantante</Link>
              </Button>
            </CardActions>
          </div>
        </CardMUI>
      </Box>
    </Container>
  );
}
