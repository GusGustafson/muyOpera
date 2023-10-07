import { useState, useEffect } from "react";
import { Formik } from "formik";
import SearchWordPageView from "./SearchWordPageView";
import { useAuthContext } from "../../contexts/AuthContext";

type ObjectValues = {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: string;
  telephone: string;
  website: string;
  image: string;
  searchQuery: string;
};

export default function SearchWordPage() {
  const { searchWord } = useAuthContext();

  const objectValues: ObjectValues = {
    id: 0,
    name: "",
    city: "",
    address: "",
    aphoras: "",
    telephone: "",
    website: "",
    image: "",
    searchQuery: "",
  };

  // ESTO ES LO AÑADIDO POR EL TEMA "F5"
  const [foundWord, setFoundWord] = useState<ObjectValues | null | void>(null);
  useEffect(() => {}, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez

  async function searchObjectByWord(searchQuery: string) {
    try {
      const newData = await searchWord(searchQuery);
      // ESTO ES LO AÑADIDO POR EL TEMA "F5"
      setFoundWord(newData);
    } catch (error) {
      console.error("Error al hacer fetch de los datos:", error);
    }
  }

  return (
    <Formik<ObjectValues>
      initialValues={objectValues}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("Valores del objeto:", values);
        setSubmitting(true);
        await searchObjectByWord(values.searchQuery);
        setSubmitting(false);
      }}
    >
      {(props) => (
        <SearchWordPageView
          formik={props}
          onSubmit_Search={props.handleSubmit}
          foundWord={foundWord}
        />
      )}
    </Formik>
  );
}
