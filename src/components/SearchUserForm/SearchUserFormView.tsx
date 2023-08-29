import { FormikValues, Form } from "formik";
import { TextField, Alert, Button, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import "../../style.css";

interface SearchUserFormViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
  // onSubmit_Update: () => void;
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

export default function SearchUserFormView({
  formik,
  onSubmit_Search,
  // onSubmit_Update,
}: SearchUserFormViewProps) {
  const { errorMessage } = useAuthContext();
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = formik;

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
      <p>
        Usuario encontrado: ID: {foundUser?.id} - Nombre: {foundUser?.name} - Apellidos: {foundUser?.surname} - Correo: {foundUser?.email} - Rol: {foundUser?.userRole}
      </p>
      <Form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          color="secondary"
          //   required
          fullWidth
          id="userId"
          label="ID de usuario"
          name="userId"
          defaultValue={foundUser?.id} // NO PONER "defaultValue" Y "value", que casca
          // value={foundUser?.id} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.userId && Boolean(errors.userId)}
          helperText={touched.userId && errors.userId}
          autoComplete="user-id"
        />
        <TextField
          margin="dense"
          color="secondary"
          //   required
          fullWidth
          id="name"
          label="Nombre"
          name="name"
          defaultValue={foundUser?.name} // NO PONER "defaultValue" Y "value", que casca
          // value={foundUser?.name} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          autoComplete="given-name"
        />
        <TextField
          margin="dense"
          color="secondary"
          //   required
          fullWidth
          id="surname"
          label="Apellidos"
          name="surname"
          defaultValue={foundUser?.surname} // NO PONER "defaultValue" Y "value", que casca
          // value={foundUser?.surname} // NO PONER "defaultValue" Y "value", que casca
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
          defaultValue={foundUser?.email} // NO PONER "defaultValue" Y "value", que casca
          // value={foundUser?.email} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="dense"
          color="secondary"
          //   required
          fullWidth
          id="password"
          label="Contraseña"
          name="password"
          type="password"
          // defaultValue={foundUser?.password} // NO PONER "defaultValue" Y "value", que casca
          // value={values.password} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          autoComplete="new-password"
        />
        <TextField
          margin="dense"
          color="secondary"
          //   required
          fullWidth
          id="role"
          label="Rol"
          name="role"
          defaultValue={foundUser?.userRole} // NO PONER "defaultValue" Y "value", que casca
          // value={foundUser?.userRole} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          error={touched.role && Boolean(errors.role)}
          helperText={touched.role && errors.role}
          autoComplete="user-role"
        />
        {errorMessage ? (
          <Alert variant="outlined" severity="error">
            {errorMessage}
          </Alert>
        ) : null}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            mx: "auto",
            width: "75%",
          }}
        >
          <Button
            id="searchUserButton"
            type="button"
            // fullWidth
            variant="contained"
            sx={{ mt: 1 }}
            size="large"
            color="secondary"
            onClick={onSubmit_Search}
          >
            Buscar usuario
          </Button>
          <Button
            id="updateUserButton"
            type="button"
            // fullWidth
            variant="contained"
            sx={{ mt: 1 }}
            size="large"
            color="secondary"
            // onClick={onSubmit_Update}
            onClick={handleSubmit}
          >
            Actualizar datos
          </Button>
          <Button
            id="deleteUserButton"
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 1 }}
            size="large"
            color="secondary"
            //   onClick={loggingOut}
          >
            Eliminar cuenta de usuario
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
