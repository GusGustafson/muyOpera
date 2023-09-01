import { Formik } from "formik";
import FinderEngineView from "./FinderEngineView";
// import { useAuthContext } from "../../contexts/AuthContext";
import searchEvent from "../SearchEventFunction/SearchEventFunction";

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

  function searchEventByValues(idTheatre: string, idOpera: string, idSinger1: string, idSinger2: string) {
    searchEvent(idTheatre, idOpera, idSinger1, idSinger2);
  }

  return (
    <Formik<EventValues>
      initialValues={eventValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        searchEventByValues(values.idTheatre, values.idOpera, values.idSinger1, values.idSinger2);
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
