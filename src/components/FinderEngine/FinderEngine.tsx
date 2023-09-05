import { Formik } from "formik";
import FinderEngineView from "./FinderEngineView";
// import { useAuthContext } from "../../contexts/AuthContext";
import searchEventsFunction from "../SearchEventsFunction/SearchEventsFunction";

type EventValues = {
  id: string;
  idTheatre: string;
  theatreName: string;
  idOpera: string;
  operaName: string;
  idSinger1: string;
  singer1Fullname: string;
  idSinger2: string;
  singer2Fullname: string;
  dateTime: string;
};

export default function FinderEngine() {
  // const { searchEvent } = useAuthContext();

  const eventValues: EventValues = {
    id: "",
    idTheatre: "",
    theatreName: "",
    idOpera: "",
    operaName: "",
    idSinger1: "",
    singer1Fullname: "",
    idSinger2: "",
    singer2Fullname: "",
    dateTime: "",
  };

  // function searchEventsByValues(idTheatre: string, idOpera: string, idSinger1: string, idSinger2: string) {
  function searchEventsByValues() {
    // searchEventsFunction(idTheatre, idOpera, idSinger1, idSinger2);
    searchEventsFunction();
  }

  return (
    <Formik<EventValues>
      initialValues={eventValues}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        // await searchEventsByValues(values.idTheatre, values.idOpera, values.idSinger1, values.idSinger2);
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
