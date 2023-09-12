import { useState, useEffect } from "react";
import { Formik } from "formik";
import FinderEngine_SingerView from "./FinderEngine_SingerView";
import searchEventsFunction from "../SearchEventsFunction/SearchEventsFunction";

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

export default function FinderEngine_Singer() {

  const [singerAnyFullName, setSingerName] = useState<string | null>(null);
  useEffect(() => {
    const singerKeyJSON = localStorage.getItem(SINGER_KEY);
    if (singerKeyJSON) {
      const parsedSingerName = JSON.parse(singerKeyJSON);
      setSingerName(parsedSingerName?.name || null);
    }
  }, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez

  const eventValues: EventValues = {
    id: 0,
    idTheatre: 0,
    theatreName: "",
    idOpera: 0,
    operaName: "",
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
        <FinderEngine_SingerView
          formik={props}
          onSubmit_Search={props.handleSubmit}
          foundEvents={foundEvents}
        />
      )}
    </Formik>
  );
}
