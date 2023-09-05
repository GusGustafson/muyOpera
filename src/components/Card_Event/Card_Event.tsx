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
  return (
    <Container>
      <Box mb={2}>
        {/* <CardMUI sx={{ maxWidth: 400 }}> */}
        <CardMUI>
          {cardStyles}
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Núm. evento: <strong>{id}</strong>
              <br />
              Teatro: <strong>{theatreName}</strong>
              <br />
              Ópera: <strong>{operaName}</strong>
              <br />
              Cantante femenino: <strong>{singer1Fullname}</strong>
              <br />
              Cantante masculino: <strong>{singer2Fullname}</strong>
              <br />
              Fecha y hora: <strong>{dateTime}</strong>
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
