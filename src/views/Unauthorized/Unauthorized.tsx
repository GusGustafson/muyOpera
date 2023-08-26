import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
import Header from "../../components/Header/Header";

export default function Unauthorized() {
  const { logout } = useAuthContext();

  function loggingOut() {
    logout();
  }

  return (
    <>
      <Header />
      <br />
      <h1>
        <em>Sin autorización</em>
      </h1>
      <br />
      <p>No tiene autorización para acceder a la página solicitada.</p>
      <br />
      <Link to="/home" onClick={loggingOut}>
        <Button variant="contained">
          Haga clic aquí para ir al inicio de sesión
        </Button>
      </Link>
    </>
  );
}
