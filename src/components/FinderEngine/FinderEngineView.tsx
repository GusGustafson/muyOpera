import { FormikValues, Form } from "formik";
import { TextField, Button, Box } from "@mui/material";
import "../../style.css";

interface FinderEngineViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
}

const FOUND_EVENT = "F_E";

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

  const foundEventJSON = localStorage.getItem(FOUND_EVENT);
  const foundEvent: FoundEvent | null = foundEventJSON
    ? JSON.parse(foundEventJSON)
    : null;
  
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
          id="searchEventButton"
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="warning"
          onClick={onSubmit_Search}
        >
          Buscar evento
        </Button>
      </Form>
      <br />
      <h5>Eventos encontrados:</h5>
      <p>ID: {foundEvent?.id}</p>
      <p>Teatro: {foundEvent?.idTheatre}</p>
      <p>Ópera: {foundEvent?.idOpera}</p>
      <p>Cantante femenino: {foundEvent?.idSinger1}</p>
      <p>Cantante masculino: {foundEvent?.idSinger2}</p>
      <p>Fecha y hora: {foundEvent?.dateTime}</p>
    </Box>
  );
}