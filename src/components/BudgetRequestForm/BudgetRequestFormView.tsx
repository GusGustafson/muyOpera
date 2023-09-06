import { FormikValues, Form } from "formik";
import {
  TextField,
  Alert,
  Button,
  Box,
  Grid,
  Autocomplete,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

interface BudgetRequestFormViewProps {
  formik: FormikValues;
}

const tickets = [
  { label: "0" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
];
const theatreZone = [
  { label: "Indiferente" },
  { label: "Patio" },
  { label: "Platea" },
  { label: "Palco" },
  { label: "Grada" },
];
const travel = [{ label: "No" }, { label: "Avión" }, { label: "Tren" }];
const travelLevel = [
  { label: "Indiferente" },
  { label: "Business" },
  { label: "Turista" },
];
const hotel = [{ label: "Sí" }, { label: "No" }];
const hotelStars = [
  { label: "Indiferente" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
];
const hotelNights = [{ label: "0" }, { label: "1" }, { label: "2" }];

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
        width: "85%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <br />

        {/* <FormControl>
          <FormLabel id="tickets" color="warning">
            Número de entradas
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="tickets"
            name="tickets"
            value={values.tickets}
            onChange={handleChange}
          >
            <FormControlLabel value="0" control={<Radio />} label="0" />
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
          </RadioGroup>
        </FormControl> */}

        <Grid container>
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
        </Grid>
        <br />
        <Grid container>
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
        </Grid>
        <br />
        <Grid container>
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
        </Grid>
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
