// import { Formik, useFormik, FormikHelpers } from "formik";
import { Formik, FormikHelpers } from "formik";
import { LoginSchema } from "./LoginSchema";
import LoginView from "./LoginView";
// import { initialValues } from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";

type InitialValues = {
  email: string;
  password: string;
};

export default function Login() {
  const { login } = useAuthContext();
  const initialValues: InitialValues = {
    email: "",
    password: "",
  };
  // const { values, touched, errors, handleChange, handleSubmit } = useFormik({
  //   initialValues,
  //   validationSchema: LoginSchema,
  //   onSubmit,
  // });

  function onSubmit(
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) {
    login(values);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {(props) => <LoginView formik={props} />}
    </Formik>
  );
}
