import { useState } from "react";
import { Formik, FormikProps } from "formik";
import BudgetRequestFormView from "./BudgetRequestFormView";
import { initialValues } from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";

type InitialValues = {
    id: number;
    idUser: string;
    // dateTime: string;
    idEvent: string;
    tickets: string;
    theatreZone: string;
    travel: string;
    travelLevel: string;
    hotel: string;
    hotelStars: string;
    hotelNights: string;
    // requestStatus: string;
}

export default function BudgetRequestForm() {
  const { budgetRequest } = useAuthContext();
//   const initialValues: InitialValues = {
//     name: "",
//     surname: "",
//     email: "",
//     password: "",
//   };

  const [auth, setAuth] = useState<InitialValues>(initialValues);

  function handleAuth(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAuth((prevAuth) => ({
      ...prevAuth,
      //   [e.target.name]: e.target.value,
      [name]: value,
    }));
  }

  function onSubmit(
    // values: InitialValues,
    // actions: FormikHelpers<InitialValues>
  ) {
    budgetRequest(auth);
    // actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
    //   validationSchema={RegistrationFormSchema}
      auth={auth}
      onChange={handleAuth}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<InitialValues>) => (
        <BudgetRequestFormView formik={props} />
      )}
    </Formik>
  );
}
