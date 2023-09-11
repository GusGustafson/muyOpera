import { useState } from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";
import BudgetRequestFormView from "./BudgetRequestFormView";
import { initialValues } from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";

type InitialValues = {
  id: number;
  idUser: number;
  idEvent: number;
  tickets: number;
  theatreZone: string;
  travel: string;
  travelLevel: string;
  hotel: string;
  hotelStars: number;
  hotelNights: number;
  notes: string;
};

export default function BudgetRequestForm() {
  const { budgetRequest } = useAuthContext();

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
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) {
    console.log("Valores del formulario:", values);
    budgetRequest(auth);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
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
