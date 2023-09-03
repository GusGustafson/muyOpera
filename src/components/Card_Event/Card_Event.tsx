import { Link } from "react-router-dom";
import { Container, Box, Typography, GlobalStyles } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
  idOpera: number;
  idSinger1: number;
  idSinger2: number;
  dateTime: string;
}

export default function Card_Event({
  id,
  idTheatre,
  idOpera,
  idSinger1,
  idSinger2,
  dateTime,
}: Card_Event) {
  return (
    <Container>
      <Box mb={2}>
        {/* <CardMUI sx={{ maxWidth: 400 }}> */}
        <CardMUI>
          {cardStyles}
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Núm. evento: {id}
              <br />
              Teatro: {idTheatre}
              <br />
              Ópera: {idOpera}
              <br />
              Cantante femenino: {idSinger1}
              <br />
              Cantante masculino: {idSinger2}
              <br />
              Fecha y hora: {dateTime}
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
                <Link to={`/event/${id}`}>Solicitar presupuesto</Link>
              </Button>
            </CardActions>
          </div>
        </CardMUI>
      </Box>
    </Container>
  );
}
