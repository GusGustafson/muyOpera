import { Formik } from "formik";
import FinderEngineView from "./FinderEngineView";
// import { useAuthContext } from "../../contexts/AuthContext";
import searchEvents from "../SearchEventsFunction/SearchEventsFunction";

type EventValues = {
  id: string;
  idTheatre: string;
  idOpera: string;
  idSinger1: string;
  idSinger2: string;
  dateTime: string;
};

export default function FinderEngine() {
  // const { searchEvent } = useAuthContext();

  const eventValues: EventValues = {
    id: "",
    idTheatre: "",
    idOpera: "",
    idSinger1: "",
    idSinger2: "",
    dateTime: "",
  };

  function searchEventsByValues(idTheatre: string, idOpera: string, idSinger1: string, idSinger2: string) {
    // searchEvents(idTheatre, idOpera, idSinger1, idSinger2);
    searchEvents();
  }

  return (
    <Formik<EventValues>
      initialValues={eventValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        searchEventsByValues(values.idTheatre, values.idOpera, values.idSinger1, values.idSinger2);
        setSubmitting(false);
      }}
    >
      {(props) => (
        <FinderEngineView
          formik={props}
          onSubmit_Search={props.handleSubmit}
        />
      )}
    </Formik>
    );
}
