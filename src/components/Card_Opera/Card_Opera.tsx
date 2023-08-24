import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

interface Card_Opera {
  id: number;
  image: string;
  name: string;
  composer: string;
  language: string;
  date: number;
}

export default function Card_Opera({
  id,
  image,
  name,
  composer,
  language,
  date,
}: Card_Opera) {
  return (
    <>
      <Container>
        <Box mb={2}>
          <CardMUI sx={{ maxWidth: 400 }}>
            <CardMedia sx={{ height: 300 }} image={image} title={name} />
            <CardContent>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Compositor: {composer}
                <br/>
                Idioma: {language}
                <br/>
                Fecha: {date}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                fullWidth
              >
                <Link to={`${id}`}>Detalles de la ópera (¿quitar?)</Link>
              </Button>
            </CardActions>
          </CardMUI>
        </Box>
      </Container>
      {/* <Outlet /> */}
    </>
  );
}
