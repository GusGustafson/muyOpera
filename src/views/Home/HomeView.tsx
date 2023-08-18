import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Login from "../../components/Login/Login";
import "../../style.css";

export default function HomeView() {
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
        <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Inicie sesión</h3>
              <p>Introduzca sus credenciales para levantar el telón y disfrutar de todas las opciones que le ofrece muyÓpera</p>
              <Login />
              <p>¿Aún no tiene cuenta? Haga clic aquí para registrarse.</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
