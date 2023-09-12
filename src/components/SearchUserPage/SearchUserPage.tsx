import { useState, useEffect } from "react";
import { Formik } from "formik";
import SearchUserPageView from "./SearchUserPageView";
import { useAuthContext } from "../../contexts/AuthContext";

type UserValues = {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  userRole: number;
  registerDate: string;
  updateDate: string;
};

export default function SearchUserPage() {
  const { searchUser } = useAuthContext();

  const userValues: UserValues = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    password: "",
    userRole: 0,
    registerDate: "",
    updateDate: "",
  };

  // ESTO ES LO AÑADIDO POR EL TEMA "F5"
  const [foundUser, setFoundUser] = useState<UserValues | null | void>(null);
  useEffect(() => {}, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez

  async function searchUserByEmail(email: string) {
    try {
      const newData = await searchUser(email);
      // ESTO ES LO AÑADIDO POR EL TEMA "F5"
      setFoundUser(newData);
  } catch (error) {
    console.error("Error al hacer fecth de los datos:", error);
  }
}

  return (
    <Formik<UserValues>
      initialValues={userValues}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("Valores del usuario:", values);
        setSubmitting(true);
        await searchUserByEmail(values.email);
        setSubmitting(false);
      }}
    >
      {(props) => (
        <SearchUserPageView
          formik={props}
          onSubmit_Search={props.handleSubmit}
          foundUser={foundUser}
        />
      )}
    </Formik>
  );
}
