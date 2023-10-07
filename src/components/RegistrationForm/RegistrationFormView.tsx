import { FormikValues, Form } from "formik";
import { TextField, Alert, Button, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";
import { useTranslation } from "react-i18next";

interface RegistrationFormViewProps {
  formik: FormikValues;
}

export default function RegistrationFormView({
  formik,
}: RegistrationFormViewProps) {
  const { errorMessage } = useAuthContext();
  const { values, touched, errors, handleChange, handleSubmit } = formik;
  const { t } = useTranslation();

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
          label={t("REGISTRATIONFORM_name")}
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
          color="warning"
          required
          fullWidth
          id="surname"
          label={t("REGISTRATIONFORM_surname")}
          name="surname"
          value={values.surname}
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
          label={t("REGISTRATIONFORM_email")}
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
          color="warning"
          required
          fullWidth
          id="password"
          label={t("REGISTRATIONFORM_password")}
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          autoComplete="new-password"
        />
        <TextField
          margin="dense"
          color="warning"
          required
          fullWidth
          id="repeatPassword"
          label={t("REGISTRATIONFORM_repeatPassword")}
          name="repeatPassword"
          type="password"
          value={values.repeatPassword}
          onChange={handleChange}
          error={touched.repeatPassword && Boolean(errors.repeatPassword)}
          helperText={touched.repeatPassword && errors.repeatPassword}
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
          color="warning"
        >
          {t("REGISTRATIONFORM_button")}
        </Button>
      </Form>
    </Box>
  );
}
