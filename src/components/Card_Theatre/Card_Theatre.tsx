import { Link } from "react-router-dom";
import { Container, Box, Typography, GlobalStyles } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { images } from "../FramerMotion_Theatres/image-data";

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

interface Card_Theatre {
  id: number;
  image: string;
  name: string;
  city: string;
  address: string;
  aphoras: number;
}

export default function Card_Theatre({
  id,
  image,
  name,
  city,
  address,
  aphoras,
}: Card_Theatre) {
  return (
    <Container>
      <Box mb={2}>
        <CardMUI sx={{ maxWidth: 400 }}>
          {/* Esta siguiente línea es un apaño mientras no consiga que acceda a las imágenes de la BD: */}
          <CardMedia sx={{ height: 300 }} image={images[id - 1]} title={name} />
          {cardStyles}
          {/* <CardMedia sx={{ height: 300 }} image={image} title={name} /> */}
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ciudad: {city}
              <br />
              Dirección: {address}
              <br />
              Aforo: {aphoras} espectadores
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
                <Link to={`${id}`}>Detalles del teatro (¿quitar?)</Link>
              </Button>
            </CardActions>
          </div>
        </CardMUI>
      </Box>
    </Container>
  );
}
