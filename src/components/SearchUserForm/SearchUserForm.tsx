import { Formik } from "formik";
import SearchUserFormView from "./SearchUserFormView";
import { useAuthContext } from "../../contexts/AuthContext";

type UserValues = {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  userRole: number;
};

export default function SearchUserForm() {
  const { searchUser } = useAuthContext();

  const userValues: UserValues = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    password: "",
    userRole: 0,
  };

  function searchUserByEmail(email: string) {
    searchUser(email);
  }

  return (
    <Formik<UserValues>
      initialValues={userValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        searchUserByEmail(values.email);
        setSubmitting(false);
      }}
    >
      {(props) => (
        <SearchUserFormView
          formik={props}
          onSubmit_Search={props.handleSubmit}
        />
      )}
    </Formik>
  );
}
