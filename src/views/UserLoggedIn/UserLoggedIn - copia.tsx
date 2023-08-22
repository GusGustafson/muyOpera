import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import background from "../../assets/background.jpg";
import { useAuthContext } from "../../contexts/AuthContext";
import Navbar_User from "../../components/Navbar_User/Navbar_User";

const USER_KEY = "U_K";

export default function UserLoggedIn() {
  const user = localStorage.getItem(USER_KEY);

  const { logout } = useAuthContext();

  function loggingOut() {
    logout();
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navbar_User />
      <h2>UserLoggedIn</h2>
      <p>Usuario que ha iniciado sesión: {user}</p>
      <Link to="/home">
        <Button variant="contained" onClick={loggingOut}>
          Cerrar sesión
        </Button>
      </Link>
    </Box>
  );
}
