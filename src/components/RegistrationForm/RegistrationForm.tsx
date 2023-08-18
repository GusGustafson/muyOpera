import { useState } from "react";
// import { Formik, useFormik, FormikHelpers } from "formik";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { RegistrationFormSchema } from "./RegistrationFormSchema";
import RegistrationFormView from "./RegistrationFormView";
// import { initialValues } from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";

type InitialValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export default function RegistrationForm() {
  const { registration } = useAuthContext();
  const initialValues: InitialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  //   const { values, touched, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
  //       initialValues,
  //       validationSchema: RegistrationFormSchema,
  //       onSubmit,
  //     });

  const [auth, setAuth] = useState<InitialValues>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

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
    // e.preventDefault();
    // values.preventDefault();
    registration(auth);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationFormSchema}
      auth={auth}
      onChange={handleAuth}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<InitialValues>) => (
        <RegistrationFormView formik={props} />
      )}
    </Formik>
  );
}
