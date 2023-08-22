import { FormikValues, Form } from "formik";
import { TextField, Alert, Button, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

interface LoginViewProps {
  formik: FormikValues;
}

export default function LoginView({ formik }: LoginViewProps) {
  const { errorMessage } = useAuthContext();
  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
        width: "80%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          color="secondary"
          required
          fullWidth
          id="email"
          label="Dirección de correo electrónico"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          autoFocus
          autoComplete="email"
        />
        <TextField
          margin="dense"
          color="secondary"
          required
          fullWidth
          id="password"
          label="Contraseña"
          name="password"
          type="password"
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
          // fullWidth
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="secondary"
        >
          Iniciar sesión
        </Button>
      </Form>
    </Box>
  );
}
