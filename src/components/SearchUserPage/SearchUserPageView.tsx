import { Link } from "react-router-dom";
import { FormikValues, Form } from "formik";
import { TextField, Button, Box } from "@mui/material";
import "../../style.css";

interface SearchUserPageViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
}

const FOUND_USER = "F_U";

interface FoundUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  userRole: number;
  regDate: string;
  updDate: string;
}

export default function SearchUserPageView({
  formik,
  onSubmit_Search,
}: SearchUserPageViewProps) {
  const { values, handleChange, handleSubmit } = formik;

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
      <h3>Búsqueda de usuario</h3>
      <p>
        Introduce aquí la dirección de correo electrónico del usuario para
        buscarlo:
      </p>
      <Form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          color="warning"
          required
          fullWidth
          id="email"
          label="Dirección de correo electrónico"
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
          Buscar usuario
        </Button>
      </Form>
      <br />
      <h5>Usuario encontrado:</h5>
      <p>ID: {foundUser?.id}</p>
      <p>Nombre: {foundUser?.name}</p>
      <p>Apellidos: {foundUser?.surname}</p>
      <p>Correo electrónico: {foundUser?.email}</p>
      <p>Rol: {foundUser?.userRole}</p>
      <div className="registro">
        <Link to="/deleteUser">
          ¿Quieres eliminar la cuenta del usuario? Haz clic aquí para acceder a
          la página de confirmación.
        </Link>
      </div>
    </Box>
  );
}
