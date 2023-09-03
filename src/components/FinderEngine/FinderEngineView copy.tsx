import { FormikValues, Form } from "formik";
import { TextField, Button, Box, Grid } from "@mui/material";
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
    console.log(foundEventsJSON);
    console.log(foundEvents);
  
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
          autoComplete="id-theatre"
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
          autoComplete="id-opera"
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
          autoComplete="id-singer1"
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
          autoComplete="id-singer2"
        />
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
      <br />
      <h5>Eventos encontrados:</h5>
      

      <Grid container spacing={3}>
        {foundEvents?.map((event) => {
          const { id, idTheatre, idOpera, idSinger1, idSinger2, dateTime } = event;
          console.log(event);
          return (
            <Grid item xs={12} md={3} key={id}>
              {/* <Card
                key={id}
                id={id}
                idTheatre={idTheatre}
                idOpera={idOpera}
                idSinger1={idSinger1}
                idSinger2={idSinger2}
                dateTime={dateTime}
              /> */}
              <ul>
                <li>ID: {id}</li>
                <li>Teatro: {idTheatre}</li>
                <li>Ópera: {idOpera}</li>
                <li>Cantante femenino: {idSinger1}</li>
                <li>Cantante masculino: {idSinger2}</li>
                <li>Fecha y hora: {dateTime}</li>
              </ul>
            </Grid>
            
          );
        })}
      </Grid>
      
    </Box>
  );
}
