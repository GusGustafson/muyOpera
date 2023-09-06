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
  theatreName: string;
  idOpera: number;
  operaName: string;
  idSinger1: number;
  singer1Fullname: string;
  idSinger2: number;
  singer2Fullname: string;
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
  // const [operaName, setOperaName] = useState<number | string>(0);
  const [operaName, setOperaName] = useState<string>("");
  // const handle_Change = (event: SelectChangeEvent<number | string>) => {
  const handle_Change = (event: SelectChangeEvent<string>) => {
    setOperaName(event.target.value);
  };
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
            label="Teatro - ID"
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
            id="theatreName"
            label="Teatro - NOMBRE"
            name="theatreName"
            // defaultValue={foundEvent?.theatreName} // NO PONER "defaultValue" Y "value", que casca
            value={values.theatreName} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="idOpera"
            label="Ópera - ID"
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
            id="operaName"
            label="Ópera - NOMBRE"
            name="operaName"
            // defaultValue={foundEvent?.operaName} // NO PONER "defaultValue" Y "value", que casca
            value={values.operaName} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="idSinger1"
            label="Cantante femenino - ID"
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
            id="singer1Fullname"
            label="Cantante femenino - NOMBRE"
            name="singer1Fullname"
            // defaultValue={foundEvent?.singer1Fullname} // NO PONER "defaultValue" Y "value", que casca
            value={values.singer1Fullname} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="idSinger2"
            label="Cantante masculino - ID"
            name="idSinger2"
            // defaultValue={foundEvent?.idSinger2} // NO PONER "defaultValue" Y "value", que casca
            value={values.idSinger2} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            color="warning"
            // required
            fullWidth
            id="singer2Fullname"
            label="Cantante masculino - NOMBRE"
            name="singer2Fullname"
            // defaultValue={foundEvent?.singer2Fullname} // NO PONER "defaultValue" Y "value", que casca
            value={values.singer2Fullname} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          <FormControl variant="filled" fullWidth>
            <InputLabel id="operaName_222" color="warning">
              Ópera
            </InputLabel>
            <Select
              labelId="operaName_222"
              id="operaName"
              label="Ópera"
              name="operaName"
              value={operaName}
              onChange={handle_Change}
              color="warning"
            >
              <MenuItem value={0}>NADA</MenuItem>
              <MenuItem value="Rigoletto">Rigoletto</MenuItem>
              <MenuItem value={2}>Le nozze di Figaro</MenuItem>
              <MenuItem value={3}>La Traviata</MenuItem>
              <MenuItem value={4}>Turandot</MenuItem>
              <MenuItem value={5}>Norma</MenuItem>
              <MenuItem value={6}>La Bohème</MenuItem>
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
          const { id, idTheatre, theatreName, idOpera, operaName, idSinger1, singer1Fullname, idSinger2, singer2Fullname, dateTime } =
            event;
          return (
            <Grid item xs={12} md={6} key={id}>
              <Card_Event
                id={id}
                idTheatre={idTheatre}
                theatreName={theatreName}
                idOpera={idOpera}
                operaName={operaName}
                idSinger1={idSinger1}
                singer1Fullname={singer1Fullname}
                idSinger2={idSinger2}
                singer2Fullname={singer2Fullname}
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
