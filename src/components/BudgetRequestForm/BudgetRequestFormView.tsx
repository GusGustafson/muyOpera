import { FormikValues, Form } from "formik";
import {
  TextField,
  Alert,
  Button,
  Box,
  Grid,
  Autocomplete,
} from "@mui/material";

// ESTA ES LA PARTE DEL FORMCONTROL
// import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// HASTA AQUÍ ES LA PARTE DEL FORMCONTROL

import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

interface BudgetRequestFormViewProps {
  formik: FormikValues;
}

const ticketsQuestion = [{ label: "Sí" }, { label: "No" }];
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
const travelQuestion = [{ label: "Sí" }, { label: "No" }];
const travel = [{ label: "Avión" }, { label: "Tren" }];
const travelLevel = [
  { label: "Indiferente" },
  { label: "Business" },
  { label: "Turista" },
];
const hotel = [{ label: "Sí" }, { label: "No" }];
const hotelStars = [{ label: "3" }, { label: "4" }, { label: "5" }];
const hotelNights = [{ label: "1" }, { label: "2" }, { label: "3" }];

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

        <Grid container gap={1}>
          <Autocomplete
            disablePortal
            id="ticketsQuestion"
            options={ticketsQuestion}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="¿Entradas?" />
            )}
          />
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
        </Grid>
        <br />
        <Grid container gap={1}>
          <Autocomplete
            disablePortal
            id="travelQuestion"
            options={travelQuestion}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="¿Desplazamiento?" />
            )}
          />
          <br />
          <Autocomplete
            disablePortal
            id="travel"
            options={travel}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Medio de transporte" />
            )}
          />
          <br />
          <Autocomplete
            disablePortal
            id="travelLevel"
            options={travelLevel}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Clase" />
            )}
          />
        </Grid>
        <br />
        <Grid container gap={1} mb={1}>
          <Autocomplete
            disablePortal
            id="hotel"
            options={hotel}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="¿Alojamiento en hotel?" />
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

        {/* <TextField
          margin="dense"
          color="warning"
          fullWidth
          // hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
          id="hotelNights"
          label="Noches en el hotel"
          name="hotelNights"
          // defaultValue={foundEvent?.singer2Fullname} // NO PONER "defaultValue" Y "value", que casca
          value={values.hotelNights} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
        /> */}

        {/* <FormControl variant="filled" margin="dense" fullWidth>
          <InputLabel id="hotelNights_Label" color="warning">
            Noches en el hotel
          </InputLabel>
          <Select
            labelId="hotelNights_Label"
            id="hotelNights"
            label="Noches en el hotel"
            name="hotelNights"
            value={values.hotelNights}
            onChange={handleChange}
            color="warning"
          >
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
          </Select>
        </FormControl> */}

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
