import { FormikValues, Form } from "formik";
import { TextField, Button, Box, Grid } from "@mui/material";

// ESTA ES LA PARTE DEL FORMCONTROL
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// HASTA AQUÍ ES LA PARTE DEL FORMCONTROL

import Card_Event from "../../components/Card_Event/Card_Event";
import "../../style.css";

interface FinderEngineViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
}

const FOUND_EVENTS = "F_E";

interface FoundEvent {
  id: number;
  idTheatre: number;
  idOpera: number;
  idSinger1: number;
  idSinger2: number;
  dateTime: string;
}

export default function FinderEngineView({
  formik,
  onSubmit_Search,
}: FinderEngineViewProps) {
  const { values, handleChange, handleSubmit } = formik;

  const foundEventsJSON = localStorage.getItem(FOUND_EVENTS);
  const foundEvents: FoundEvent[] | null = foundEventsJSON
    ? JSON.parse(foundEventsJSON)
    : null;

  // ESTA ES LA PARTE DEL FORMCONTROL
  const [idSinger2, setidSinger2] = useState<number | string>(0);
  const handle_Change = (event: SelectChangeEvent<number | string>) => {
    setidSinger2(event.target.value);
  };
  console.log(idSinger2);
  // HASTA AQUÍ ES LA PARTE DEL FORMCONTROL

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
        width: "80%",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Form onSubmit={handleSubmit}>
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="idTheatre"
            label="Teatro"
            name="idTheatre"
            // defaultValue={foundEvent?.idTheatre} // NO PONER "defaultValue" Y "value", que casca
            value={values.idTheatre} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="idOpera"
            label="Ópera"
            name="idOpera"
            // defaultValue={foundEvent?.idOpera} // NO PONER "defaultValue" Y "value", que casca
            value={values.idOpera} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="idSinger1"
            label="Cantante femenino"
            name="idSinger1"
            // defaultValue={foundEvent?.idSinger1} // NO PONER "defaultValue" Y "value", que casca
            value={values.idSinger1} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="idSinger2"
            label="Cantante masculino"
            name="idSinger2"
            // defaultValue={foundEvent?.idSinger2} // NO PONER "defaultValue" Y "value", que casca
            value={values.idSinger2} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          <FormControl variant="filled" fullWidth>
            <InputLabel id="idSinger_222" color="warning">
              Cantante 2
            </InputLabel>
            <Select
              labelId="idSinger_222"
              id="idSinger2"
              label="Cantante 2"
              value={idSinger2}
              onChange={handle_Change}
              color="warning"
            >
              <MenuItem value={0}>Ninguno</MenuItem>
              <MenuItem value={2}>Jonas Kaufmann</MenuItem>
              <MenuItem value={4}>Juan Diego Florez</MenuItem>
              <MenuItem value={6}>Alexander Vinogradov</MenuItem>
            </Select>
          </FormControl>

          <Button
            id="searchEventsButton"
            variant="contained"
            sx={{ mt: 1 }}
            size="large"
            color="warning"
            onClick={onSubmit_Search}
          >
            Buscar eventos
          </Button>
        </Form>
      </Box>
      <br />
      <h5>Eventos encontrados:</h5>

      <Grid container spacing={1} marginTop={1}>
        {foundEvents?.map((event) => {
          const { id, idTheatre, idOpera, idSinger1, idSinger2, dateTime } =
            event;
          return (
            <Grid item xs={12} md={6} key={id}>
              <Card_Event
                id={id}
                idTheatre={idTheatre}
                idOpera={idOpera}
                idSinger1={idSinger1}
                idSinger2={idSinger2}
                dateTime={dateTime}
              />
              {/* <div className="noBulletedList">
                <ul>
                  <li>ID: {id}</li>
                  <li>Teatro: {idTheatre}</li>
                  <li>Ópera: {idOpera}</li>
                  <li>Cantante femenino: {idSinger1}</li>
                  <li>Cantante masculino: {idSinger2}</li>
                  <li>Fecha y hora: {dateTime}</li>
                </ul>
              </div> */}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
