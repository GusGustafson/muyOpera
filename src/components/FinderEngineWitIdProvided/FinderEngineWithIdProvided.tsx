// ESTE MÓDULO YA NO LO USO. UTILIZO LOS ESPECÍFICOS DE teatro, ópera y cantante PARA QUE FUNCIONEN BIEN DE FORMA INDEPENDIENTE.

import { useState, useEffect } from "react";
import { Formik } from "formik";
import FinderEngineWithIdProvidedView from "./FinderEngineWithIdProvidedView";
import searchEventsFunction from "../SearchEventsFunction/SearchEventsFunction";

const THEATRE_KEY = "T_K";
const OPERA_KEY = "O_K";
const SINGER_KEY = "S_K";

type EventValues = {
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
};

//   const theatreKeyJSON: string | null = localStorage.getItem(THEATRE_KEY);
//   const theatreName = theatreKeyJSON ? JSON.parse(theatreKeyJSON) : null;
//   console.log(theatreName);

export default function FinderEngineWithIdProvided() {
  const [theatreName, setTheatreName] = useState<string | null>(null);
  const [operaName, setOperaName] = useState<string | null>(null);
  const [singerAnyFullName, setSingerName] = useState<string | null>(null);
  useEffect(() => {
    const theatreKeyJSON = localStorage.getItem(THEATRE_KEY);
    if (theatreKeyJSON) {
      const parsedTheatreName = JSON.parse(theatreKeyJSON);
      setTheatreName(parsedTheatreName?.name || null);
    }
    const operaKeyJSON = localStorage.getItem(OPERA_KEY);
    if (operaKeyJSON) {
      const parsedOperaName = JSON.parse(operaKeyJSON);
      setOperaName(parsedOperaName?.name || null);
    }
    const singerKeyJSON = localStorage.getItem(SINGER_KEY);
    if (singerKeyJSON) {
      const parsedSingerName = JSON.parse(singerKeyJSON);
      setSingerName(parsedSingerName?.name || null);
    }
  }, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez

  const eventValues: EventValues = {
    id: 0,
    idTheatre: 0,
    theatreName: theatreName || "",
    idOpera: 0,
    operaName: operaName || "",
    idSinger1: 0,
    singer1Fullname: "",
    idSinger2: 0,
    singer2Fullname: "",
    singerAnyFullname: singerAnyFullName || "",
    dateTime: "",
  };

  // ESTO ES LO AÑADIDO POR EL TEMA "F5"
  const [foundEvents, setFoundEvents] = useState<EventValues[] | null>(null);
  useEffect(() => {}, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez

  async function searchEventsByValues() {
    try {
      const newData = await searchEventsFunction();
      // ESTO ES LO AÑADIDO POR EL TEMA "F5"
      setFoundEvents(newData);
    } catch (error) {
      console.error("Error al hacer fetch de los datos:", error);
    }
  }

  return (
    <Formik<EventValues>
      initialValues={eventValues}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("Valores del evento:", values);
        setSubmitting(true);
        await searchEventsByValues();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <FinderEngineWithIdProvidedView
          formik={props}
          onSubmit_Search={props.handleSubmit}
          foundEvents={foundEvents}
        />
      )}
    </Formik>
  );
}
