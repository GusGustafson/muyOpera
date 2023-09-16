import { Link } from "react-router-dom";
import { FormikValues, Form } from "formik";
import { TextField, Button, Box } from "@mui/material";
import "../../style.css";
import { useTranslation } from "react-i18next";

interface SearchUserPageViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
  foundUser: FoundUser | null | void;
}

const FOUND_USER = "F_U";

interface FoundUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  userRole: number;
  registerDate: string;
  updateDate: string;
}

export default function SearchUserPageView({
  formik,
  onSubmit_Search,
}: SearchUserPageViewProps) {
  const { values, handleChange, handleSubmit } = formik;
  const { t } = useTranslation();

  const foundUserJSON = localStorage.getItem(FOUND_USER);
  const foundUser: FoundUser | null = foundUserJSON
    ? JSON.parse(foundUserJSON)
    : null;

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
      <h3>{t("SEARCHUSERPAGE_title")}</h3>
      <p>{t("SEARCHUSERPAGE_p1")}</p>
      <Form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          color="warning"
          required
          fullWidth
          id="email"
          label={t("SEARCHUSERPAGEFORM_email")}
          name="email"
          type="email"
          // defaultValue={foundUser?.id} // NO PONER "defaultValue" Y "value", que casca
          value={values.email} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          autoFocus
          autoComplete="email"
        />
        <Button
          id="searchUserButton"
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="warning"
          onClick={onSubmit_Search}
        >
          {t("SEARCHUSERPAGEFORM_button")}
        </Button>
      </Form>
      <br />
      <h4>{t("SEARCHUSERPAGE_subtitle")}</h4>
      <h5>{t("SEARCHUSERPAGE_id")} {foundUser?.id}</h5>
      <h5>{t("SEARCHUSERPAGE_name")} {foundUser?.name}</h5>
      <h5>{t("SEARCHUSERPAGE_surname")} {foundUser?.surname}</h5>
      <h5>{t("SEARCHUSERPAGE_email")} {foundUser?.email}</h5>
      <h5>{t("SEARCHUSERPAGE_userRole")} {foundUser?.userRole}</h5>
      <div className="registro">
        <Link to="/deleteUser">
        {t("SEARCHUSERPAGE_link")}
        </Link>
      </div>
    </Box>
  );
}
