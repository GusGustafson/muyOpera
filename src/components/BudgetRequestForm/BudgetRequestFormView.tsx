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
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// HASTA AQUÍ ES LA PARTE DEL FORMCONTROL

import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";
import { useTranslation } from "react-i18next";

interface BudgetRequestFormViewProps {
  formik: FormikValues;
}

export default function BudgetRequestFormView({
  formik,
}: BudgetRequestFormViewProps) {
  const { errorMessage } = useAuthContext();
  const { handleSubmit } = formik;
  const { t } = useTranslation();

  const ticketsQuestion = [
    // { label: t("BUDGETREQUESTFORM_labelYes") },
    // { label: "No" },
    t("BUDGETREQUESTFORM_labelYes"),
    "No",
  ];
  const tickets = [
    // { label: "0" },
    // { label: "1" },
    // { label: "2" },
    // { label: "3" },
    // { label: "4" },
    "0",
    "1",
    "2",
    "3",
    "4",
  ];
  const theatreZone = [
    // { label: t("BUDGETREQUESTFORM_labelIndifferent") },
    // { label: t("BUDGETREQUESTFORM_labelTheatreZone1") },
    // { label: t("BUDGETREQUESTFORM_labelTheatreZone2") },
    // { label: t("BUDGETREQUESTFORM_labelTheatreZone3") },
    // { label: t("BUDGETREQUESTFORM_labelTheatreZone4") },
    t("BUDGETREQUESTFORM_labelIndifferent"),
    t("BUDGETREQUESTFORM_labelTheatreZone1"),
    t("BUDGETREQUESTFORM_labelTheatreZone2"),
    t("BUDGETREQUESTFORM_labelTheatreZone3"),
    t("BUDGETREQUESTFORM_labelTheatreZone4"),
  ];
  const travelQuestion = [
    // { label: t("BUDGETREQUESTFORM_labelYes") },
    // { label: "No" },
    t("BUDGETREQUESTFORM_labelYes"),
    "No",
  ];
  const travel = [
    // { label: t("BUDGETREQUESTFORM_labelTravel1") },
    // { label: t("BUDGETREQUESTFORM_labelTravel2") },
    // { label: t("BUDGETREQUESTFORM_labelTravel3") },
    t("BUDGETREQUESTFORM_labelTravel1"),
    t("BUDGETREQUESTFORM_labelTravel2"),
    t("BUDGETREQUESTFORM_labelTravel3"),
  ];
  const travelLevel = [
    // { label: t("BUDGETREQUESTFORM_labelIndifferent") },
    // { label: t("BUDGETREQUESTFORM_labelTravelLevel1") },
    // { label: t("BUDGETREQUESTFORM_labelTravelLevel2") },
    t("BUDGETREQUESTFORM_labelIndifferent"),
    t("BUDGETREQUESTFORM_labelTravelLevel1"),
    t("BUDGETREQUESTFORM_labelTravelLevel2"),
  ];
  const hotel = [
    // { label: t("BUDGETREQUESTFORM_labelYes") },
    // { label: "No" },
    t("BUDGETREQUESTFORM_labelYes"),
    "No",
  ];
  const hotelStars = [
    // { label: "0" },
    // { label: "3" },
    // { label: "4" },
    // { label: "5" },
    "0",
    "3",
    "4",
    "5",
  ];
  const hotelNights = [
    // { label: "0" },
    // { label: "1" },
    // { label: "2" },
    // { label: "3" },
    "0",
    "1",
    "2",
    "3",
  ];

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
        {/* <hr /> */}
        <Grid container gap={1}>
          <Autocomplete
            disablePortal
            id="ticketsQuestion"
            options={ticketsQuestion}
            // defaultValue={{ label: "No" }}
            // defaultValue={ticketsQuestion[1].label}
            defaultValue={"No"}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_fieldlA")}
                color="warning"
              />
            )}
          />
          <br />
          <Autocomplete
            disablePortal
            id="tickets"
            options={tickets}
            // defaultValue={{ label: "0" }}
            // defaultValue={tickets[0]}
            defaultValue={"0"}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_fieldlB")}
                color="warning"
              />
            )}
          />
          <br />
          <Autocomplete
            disablePortal
            id="theatreZone"
            options={theatreZone}
            // defaultValue={{ label: t("BUDGETREQUESTFORM_labelIndifferent") }}
            // defaultValue={theatreZone[0]}
            defaultValue={t("BUDGETREQUESTFORM_labelIndifferent")}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_fieldlC")}
                color="warning"
              />
            )}
          />
        </Grid>
        {/* <br /> */}
        <hr />
        <Grid container gap={1}>
          <Autocomplete
            disablePortal
            id="travelQuestion"
            options={travelQuestion}
            // defaultValue={{ label: "No" }}
            // defaultValue={travelQuestion[1]}
            defaultValue={"No"}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_field2A")}
                color="warning"
              />
            )}
          />
          <br />
          <Autocomplete
            disablePortal
            id="travel"
            options={travel}
            // defaultValue={{ label: t("BUDGETREQUESTFORM_labelTravel1") }}
            // defaultValue={travel[0]}
            defaultValue={t("BUDGETREQUESTFORM_labelTravel1")}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_field2B")}
                color="warning"
              />
            )}
          />
          <br />
          <Autocomplete
            disablePortal
            id="travelLevel"
            options={travelLevel}
            // defaultValue={{ label: t("BUDGETREQUESTFORM_labelIndifferent") }}
            // defaultValue={travelLevel[0]}
            defaultValue={t("BUDGETREQUESTFORM_labelIndifferent")}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_field2C")}
                color="warning"
              />
            )}
          />
        </Grid>
        {/* <br /> */}
        <hr />
        <Grid container gap={1} mb={1}>
          <Autocomplete
            disablePortal
            id="hotel"
            options={hotel}
            // defaultValue={{ label: "No" }}
            // defaultValue={hotel[1]}
            defaultValue={"No"}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_field3A")}
                color="warning"
              />
            )}
          />
          <br />
          <Autocomplete
            disablePortal
            id="hotelStars"
            options={hotelStars}
            // defaultValue={{ label: "0" }}
            // defaultValue={hotelStars[0]}
            defaultValue={"0"}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_field3B")}
                color="warning"
              />
            )}
          />
          <br />
          <Autocomplete
            // disabled
            disablePortal
            id="hotelNights"
            options={hotelNights}
            // defaultValue={{ label: "0" }}
            // defaultValue={hotelNights[0]}
            defaultValue={"0"}
            clearIcon={false}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label={t("BUDGETREQUESTFORM_field3C")}
                color="warning"
              />
            )}
          />
        </Grid>
        {/* <hr /> */}
        <Grid>
          <TextField
            margin="normal"
            id="notes"
            variant="filled"
            label={t("BUDGETREQUESTFORM_notes")}
            color="warning"
            fullWidth
            multiline
            maxRows={2}
            inputProps={{ maxLength: 250 }}
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
          {t("BUDGETREQUESTFORM_button")}
        </Button>
      </Form>
    </Box>
  );
}
