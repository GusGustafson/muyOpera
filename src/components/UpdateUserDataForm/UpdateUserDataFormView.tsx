import { FormikValues, Form } from "formik";
import { TextField, Alert, Button, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

interface UpdateUserDataFormViewProps {
  formik: FormikValues;
}

export default function UpdateUserDataFormView({ formik }: UpdateUserDataFormViewProps) {
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
          color="warning"
          required
          fullWidth
          id="name"
          label="Nombre"
          name="name"
          defaultValue={values.name} // NO PONER "defaultValue" Y "value", que casca
          // value={values.name} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          autoComplete="given-name"
        />
        <TextField
          margin="dense"
          color="warning"
          required
          fullWidth
          id="surname"
          label="Apellidos"
          name="surname"
          defaultValue={values.surname} // NO PONER "defaultValue" Y "value", que casca
          // value={values.surname} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.surname && Boolean(errors.surname)}
          helperText={touched.surname && errors.surname}
          autoComplete="family-name"
        />
        <TextField
          margin="dense"
          color="warning"
          required
          fullWidth
          id="email"
          label="Dirección de correo electrónico"
          name="email"
          type="email"
          defaultValue={values.email} // NO PONER "defaultValue" Y "value", que casca
          // value={values.email} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          autoComplete="email"
        />
        <TextField
          margin="dense"
          color="warning"
          required
          fullWidth
          id="password"
          label="Contraseña"
          name="password"
          type="password"
          // defaultValue={values.password} // NO PONER "defaultValue" Y "value", que casca
          // value={values.password} // NO PONER "defaultValue" Y "value", que casca
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
          id="updateUserDataButton"
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="warning"
        >
          Actualizar datos
        </Button>
      </Form>
    </Box>
  );
}
