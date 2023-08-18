import { FormikValues, Form } from "formik";
import { TextField, Alert, Button, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

interface RegistrationFormViewProps {
  formik: FormikValues;
}

export default function RegistrationFormView({ formik }: RegistrationFormViewProps) {
  const { errorMessage } = useAuthContext();
  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // mx: "auto",
        // width: "50%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          color="secondary"
          required
          fullWidth
          id="name"
          label="Nombre"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          autoFocus
          autoComplete="given-name"
        />
        <TextField
          margin="dense"
          color="secondary"
          required
          fullWidth
          id="surname"
          label="Apellidos"
          name="surname"
          value={values.surname}
          onChange={handleChange}
          error={touched.surname && Boolean(errors.surname)}
          helperText={touched.surname && errors.surname}
          autoComplete="family-name"
        />
        <TextField
          margin="dense"
          color="secondary"
          required
          fullWidth
          id="email"
          label="Dirección de correo electrónico"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
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
          autoComplete="new-password"
        />
        {errorMessage ? (
          <Alert variant="outlined" severity="error">
            {errorMessage}
          </Alert>
        ) : null}
        <Button
          id="registrationButton"
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="secondary"
        >
          Registrar usuario
        </Button>
      </Form>
    </Box>
  );
}
