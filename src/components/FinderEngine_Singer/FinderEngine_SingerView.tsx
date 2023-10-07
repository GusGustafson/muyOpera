import { useState, useEffect } from "react";
import { FormikValues, Form } from "formik";
import { TextField, Button, Box, Grid } from "@mui/material";
import Card_Event from "../../components/Card_Event/Card_Event";
import "../../style.css";
import { useTranslation } from "react-i18next";

const SINGER_KEY = "S_K";

interface FinderEngine_SingerViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
  foundEvents: FoundEvent[] | null;
}

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

export default function FinderEngine_SingerView({
  formik,
  onSubmit_Search,
  foundEvents,
}: FinderEngine_SingerViewProps) {
  const { values, handleChange, handleSubmit } = formik;
  const { t } = useTranslation();

  const [singerAnyFullName, setSingerAnyFullName] = useState<string | null>(
    null
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Tengo que poner un delay de 0,1 seg para que no coja el valor "null" que tiene el campo theatreName al principio.
      const singerKeyJSON = localStorage.getItem(SINGER_KEY);
      if (singerKeyJSON) {
        const parsedSingerName = JSON.parse(singerKeyJSON);
        setSingerAnyFullName(
          (parsedSingerName?.name || "") +
            " " +
            (parsedSingerName?.surname || "")
        );
      }
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez

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
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="theatreName"
            label="Teatro"
            name="theatreName"
            // defaultValue={theatreName || ""}
            value={values.theatreName} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            color="warning"
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="operaName"
            label="Ópera"
            name="operaName"
            // defaultValue={operaName || ""}
            value={values.operaName} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            color="warning"
            fullWidth
            hidden // Tengo que ocultarlo, porque si lo quito, deja de funcionar el "FormControl" correspondiente
            id="singerAnyFullname"
            label="Cantante"
            name="singerAnyFullname"
            // defaultValue={singerAnyFullName || ""}
            value={singerAnyFullName || ""} // NO PONER "defaultValue" Y "value", que casca
            onChange={handleChange}
          />

          <Button
            id="searchEventsButton"
            variant="contained"
            sx={{ mt: 1 }}
            size="large"
            color="warning"
            onClick={onSubmit_Search}
          >
            {t("SINGERDETAILS_button")}
          </Button>
        </Form>
      </Box>
      {/* <br /> */}
      {/* <h5>Eventos relacionados:</h5> */}

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
