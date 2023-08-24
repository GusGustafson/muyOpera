import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

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
                Ciudad: {city}
                <br/>
                Dirección: {address}
                <br/>
                Aforo: {aphoras} espectadores
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                fullWidth
              >
                <Link to={`${id}`}>Detalles del teatro (¿quitar?)</Link>
              </Button>
            </CardActions>
          </CardMUI>
        </Box>
      </Container>
      {/* <Outlet /> */}
    </>
  );
}
