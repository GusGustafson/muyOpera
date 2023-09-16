import { FormikValues, Form } from "formik";
import { TextField, Alert, Button, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";
import { useTranslation } from "react-i18next";

interface UpdateUserDataFormViewProps {
  formik: FormikValues;
}

export default function UpdateUserDataFormView({ formik }: UpdateUserDataFormViewProps) {
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
          label={t("UPDATEUSERDATAFORM_name")}
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
          label={t("UPDATEUSERDATAFORM_surname")}
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
          label={t("UPDATEUSERDATAFORM_email")}
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
          label={t("UPDATEUSERDATAFORM_password")}
          name="password"
          type="password"
          // defaultValue={values.password} // NO PONER "defaultValue" Y "value", que casca
          // value={values.password} // NO PONER "defaultValue" Y "value", que casca
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
          label={t("UPDATEUSERDATAFORM_repeatPassword")}
          name="repeatPassword"
          type="password"
          // defaultValue={values.repeatPassword} // NO PONER "defaultValue" Y "value", que casca
          // value={values.repeatPassword} // NO PONER "defaultValue" Y "value", que casca
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
          id="updateUserDataButton"
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="warning"
        >
          {t("UPDATEUSERDATAFORM_button")}
        </Button>
      </Form>
    </Box>
  );
}
