import { Formik } from "formik";
import FinderEngineView from "./FinderEngineView";
// import { useAuthContext } from "../../contexts/AuthContext";
import searchEventsFunction from "../SearchEventsFunction/SearchEventsFunction";

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

export default function FinderEngine() {
  // const { searchEvent } = useAuthContext();

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
    singerAnyFullname: "",
    dateTime: "",
  };

  function searchEventsByValues() {
    searchEventsFunction();
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
        <FinderEngineView formik={props} onSubmit_Search={props.handleSubmit} />
      )}
    </Formik>
  );
}
