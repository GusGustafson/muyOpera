import { FormikValues, Form } from "formik";
import { TextField, Alert, Button } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

interface LoginViewProps {
    formik: FormikValues;
}

export default function LoginView({ formik }: LoginViewProps) {
  const { errorMessage } = useAuthContext();
  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Dirección de correo electrónico"
        name="email"
        size="medium"
        value={values.email}
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Contraseña"
        name="password"
        type="password"
        size="medium"
        value={values.password}
        onChange={handleChange}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      {errorMessage ? (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      ) : null}
      <Button
        id="loginButton"
        type="submit"
        fullWidth
        variant="contained"
        size="large"
      >
        Iniciar sesión
      </Button>
    </Form>
  );
}
