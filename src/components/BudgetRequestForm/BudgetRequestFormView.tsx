import { FormikValues, Form } from "formik";
import { TextField, Alert, Button, Box, Autocomplete } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

interface BudgetRequestFormViewProps {
  formik: FormikValues;
}

const theatreZone = [
  { label: "Box" },
  { label: "Platea" },
  { label: "Gallinero" },
];
const tickets = [
  { label: "1 entrada" },
  { label: "2 entradas" },
  { label: "3 entradas" },
  { label: "4 entradas" },
];
const travel = [
  { label: "Avión" },
  { label: "Tren" },
];
const travelLevel = [
  { label: "Turista" },
  { label: "Business" },
];
const hotel = [
  { label: "Sí" },
  { label: "No" },
];
const hotelStars = [
  { label: "3 estrellas" },
  { label: "4 estrellas" },
  { label: "5 estrellas" },
];
const hotelNights = [
  { label: "1 noche" },
  { label: "2 noches" },
];

export default function BudgetRequestFormView({
  formik,
}: BudgetRequestFormViewProps) {
  const { errorMessage } = useAuthContext();
  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
        width: "75%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <br />
        <Autocomplete
          disablePortal
          id="tickets"
          options={tickets}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Número de entradas" />
          )}
        />
        <br />
        <Autocomplete
          disablePortal
          id="theatreZone"
          options={theatreZone}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Zona del teatro" />
          )}
        />
        <br />
        <Autocomplete
          disablePortal
          id="travel"
          options={travel}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Desplazamiento" />
          )}
        />
        <br />
        <Autocomplete
          disablePortal
          id="travelLevel"
          options={travelLevel}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Clase del desplazamiento" />
          )}
        />
        <br />
        <Autocomplete
          disablePortal
          id="hotel"
          options={hotel}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Alojamiento en hotel" />
          )}
        />
        <br />
        <Autocomplete
          disablePortal
          id="hotelStars"
          options={hotelStars}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Estrellas del hotel" />
          )}
        />
        <br />
        <Autocomplete
          disablePortal
          id="hotelNights"
          options={hotelNights}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Noches en el hotel" />
          )}
        />
        {errorMessage ? (
          <Alert variant="outlined" severity="error">
            {errorMessage}
          </Alert>
        ) : null}
        <Button
          id="budgetRequestButton"
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="warning"
        >
          Solicitar presupuesto
        </Button>
      </Form>
    </Box>
  );
}
