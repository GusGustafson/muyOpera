import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

const USER_KEY = "U_K";

export default function UserLoggedIn() {
  const user = localStorage.getItem(USER_KEY);

  const { logout } = useAuthContext();

  function loggingOut() {
    logout();
  }

  return (
    <>
    <h2>UserLoggedIn</h2>
    <p>Usuario que ha iniciado sesión: {user}</p>
    <Link to="/home">
      <Button variant="contained" onClick={loggingOut}>
        Cerrar sesión
        </Button>
        </Link>
    </>
    )
}
