import { FormikValues, Form } from "formik";
import { TextField, Button, Box, Grid } from "@mui/material";

// ESTA ES LA PARTE DEL FORMCONTROL
// import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";
// HASTA AQUÍ ES LA PARTE DEL FORMCONTROL

import Card_Event from "../../components/Card_Event/Card_Event";
import "../../style.css";

interface FinderEngineViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
  foundEvents: FoundEvent[] | null;
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
  singerAnyFullname: string;
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
  // const [operaName, setOperaName] = useState<string>("");
  // const handle_Change = (event: SelectChangeEvent<string>) => {
  //   setOperaName(event.target.value);
  // };
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
          {/* <TextField
            margin="dense"
            color="warning"
            fullWidth
            id="idTheatre"
            label="Teatro - ID"
            name="idTheatre"
            // defaultValue={foundEvent?.idTheatre} // NO PONER "defaultValue" Y "value", que casca
            value={values.idTheatre} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          /> */}

          <TextField
            margin="dense"
            color="warning"
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="theatreName"
            label="Teatro"
            name="theatreName"
            // defaultValue={foundEvent?.theatreName} // NO PONER "defaultValue" Y "value", que casca
            value={values.theatreName} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          {/* <TextField
            margin="dense"
            color="warning"
            fullWidth
            id="idOpera"
            label="Ópera - ID"
            name="idOpera"
            // defaultValue={foundEvent?.idOpera} // NO PONER "defaultValue" Y "value", que casca
            value={values.idOpera} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          /> */}

          <TextField
            margin="dense"
            color="warning"
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="operaName"
            label="Ópera"
            name="operaName"
            // defaultValue={foundEvent?.operaName} // NO PONER "defaultValue" Y "value", que casca
            value={values.operaName} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          {/* <TextField
            margin="dense"
            color="warning"
            fullWidth
            id="idSinger1"
            label="Cantante femenino - ID"
            name="idSinger1"
            // defaultValue={foundEvent?.idSinger1} // NO PONER "defaultValue" Y "value", que casca
            value={values.idSinger1} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          /> */}

          {/* <TextField
            margin="dense"
            color="warning"
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="singer1Fullname"
            label="Cantante femenino"
            name="singer1Fullname"
            // defaultValue={foundEvent?.singer1Fullname} // NO PONER "defaultValue" Y "value", que casca
            value={values.singer1Fullname} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          /> */}

          {/* <TextField
            margin="dense"
            color="warning"
            fullWidth
            id="idSinger2"
            label="Cantante masculino - ID"
            name="idSinger2"
            // defaultValue={foundEvent?.idSinger2} // NO PONER "defaultValue" Y "value", que casca
            value={values.idSinger2} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          /> */}

          {/* <TextField
            margin="dense"
            color="warning"
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="singer2Fullname"
            label="Cantante masculino"
            name="singer2Fullname"
            // defaultValue={foundEvent?.singer2Fullname} // NO PONER "defaultValue" Y "value", que casca
            value={values.singer2Fullname} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          /> */}

          <TextField
            margin="dense"
            color="warning"
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="singerAnyFullname"
            label="Cantante"
            name="singerAnyFullname"
            // defaultValue={foundEvent?.singerAnyFullname} // NO PONER "defaultValue" Y "value", que casca
            value={values.singerAnyFullname} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          <FormControl variant="filled" margin="dense" fullWidth>
            <InputLabel id="theatreName_Label" color="warning">
              Teatro
            </InputLabel>
            <Select
              labelId="theatreName_Label"
              id="theatreName"
              label="Teatro"
              name="theatreName"
              value={values.theatreName}
              onChange={handleChange}
              color="warning"
            >
              <MenuItem value="">-- BORRAR SELECCIÓN --</MenuItem>
              <MenuItem value="Auditorio Alfredo Kraus">
                Auditorio Alfredo Kraus
              </MenuItem>
              <MenuItem value="Gran Teatro del Liceo">
                Gran Teatro del Liceo
              </MenuItem>
              <MenuItem value="Teatro Campoamor">Teatro Campoamor</MenuItem>
              <MenuItem value="Teatro Cervantes">Teatro Cervantes</MenuItem>
              <MenuItem value="Teatro de la Maestranza">
                Teatro de la Maestranza
              </MenuItem>
              <MenuItem value="Teatro Real">Teatro Real</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="filled" margin="dense" fullWidth>
            <InputLabel id="operaName_Label" color="warning">
              Ópera
            </InputLabel>
            <Select
              labelId="operaName_Label"
              id="operaName"
              label="Ópera"
              name="operaName"
              value={values.operaName}
              onChange={handleChange}
              color="warning"
            >
              <MenuItem value="">-- BORRAR SELECCIÓN --</MenuItem>
              <MenuItem value="La Bohème">La Bohème</MenuItem>
              <MenuItem value="La Traviata">La Traviata</MenuItem>
              <MenuItem value="Le nozze di Figaro">Le nozze di Figaro</MenuItem>
              <MenuItem value="Norma">Norma</MenuItem>
              <MenuItem value="Rigoletto">Rigoletto</MenuItem>
              <MenuItem value="Turandot">Turandot</MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl variant="filled" margin="dense" fullWidth>
            <InputLabel id="singer1Fullname_Label" color="warning">
              Cantante femenino
            </InputLabel>
            <Select
              labelId="singer1Fullname_Label"
              id="singer1Fullname"
              label="Cantante femenino"
              name="singer1Fullname"
              value={values.singer1Fullname}
              onChange={handleChange}
              color="warning"
            >
              <MenuItem value="">-- BORRAR SELECCIÓN --</MenuItem>
              <MenuItem value="Anna Netrebko">Anna Netrebko</MenuItem>
              <MenuItem value="Diana Damrau">Diana Damrau</MenuItem>
              <MenuItem value="Lisette Oropesa">Lisette Oropesa</MenuItem>
            </Select>
          </FormControl> */}

          {/* <FormControl variant="filled" margin="dense" fullWidth>
            <InputLabel id="singer2Fullname_Label" color="warning">
              Cantante masculino
            </InputLabel>
            <Select
              labelId="singer2Fullname_Label"
              id="singer2Fullname"
              label="Cantante masculino"
              name="singer2Fullname"
              value={values.singer2Fullname}
              onChange={handleChange}
              color="warning"
            >
              <MenuItem value="">-- BORRAR SELECCIÓN --</MenuItem>
              <MenuItem value="Alexander Vinogradov">
                Alexander Vinogradov
              </MenuItem>
              <MenuItem value="Jonas Kaufmann">Jonas Kaufmann</MenuItem>
              <MenuItem value="Juan Diego Florez">Juan Diego Florez</MenuItem>
            </Select>
          </FormControl> */}

          <FormControl variant="filled" margin="dense" fullWidth>
            <InputLabel id="singerAnyFullname_Label" color="warning">
              Cantante
            </InputLabel>
            <Select
              labelId="singerAnyFullname_Label"
              id="singerAnyFullname"
              label="Cantante"
              name="singerAnyFullname"
              value={values.singerAnyFullname}
              onChange={handleChange}
              color="warning"
            >
              <MenuItem value="">-- BORRAR SELECCIÓN --</MenuItem>
              <MenuItem value="Alexander Vinogradov">
                Alexander Vinogradov
              </MenuItem>
              <MenuItem value="Anna Netrebko">Anna Netrebko</MenuItem>
              <MenuItem value="Diana Damrau">Diana Damrau</MenuItem>
              <MenuItem value="Jonas Kaufmann">Jonas Kaufmann</MenuItem>
              <MenuItem value="Juan Diego Florez">Juan Diego Florez</MenuItem>
              <MenuItem value="Lisette Oropesa">Lisette Oropesa</MenuItem>
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
          const {
            id,
            idTheatre,
            theatreName,
            idOpera,
            operaName,
            idSinger1,
            singer1Fullname,
            idSinger2,
            singer2Fullname,
            dateTime,
          } = event;
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
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
