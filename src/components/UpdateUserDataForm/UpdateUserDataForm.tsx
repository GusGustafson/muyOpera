import { useState } from "react";
// import { Formik, useFormik, FormikHelpers } from "formik";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { UpdateUserDataFormSchema } from "./UpdateUserDataFormSchema";
import UpdateUserDataFormView from "./UpdateUserDataFormView";
// import { initialValues } from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";

const USER_KEY = "U_K";

type InitialValues = {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
  userRole: number;
  registerDate: string;
  updateDate: string;
};

export default function UpdateUserDataForm() {
  const { updateUserData } = useAuthContext();

  const userJSON = localStorage.getItem(USER_KEY);
  const user: InitialValues | null = userJSON ? JSON.parse(userJSON) : null;

  const initialValues: InitialValues = {
    id: user!.id,
    name: user!.name,
    surname: user!.surname,
    email: user!.email,
    password: user!.password,
    repeatPassword: user!.password,
    userRole: user!.userRole,
    registerDate: user!.registerDate,
    updateDate: user!.updateDate,
  };

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
    updateUserData(auth);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UpdateUserDataFormSchema}
      auth={auth}
      onChange={handleAuth}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<InitialValues>) => (
        <UpdateUserDataFormView formik={props} />
      )}
    </Formik>
  );
}
