import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "../../style.css";

export default function RegistrationView() {
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
              <h3>Registro</h3>
              <p>
                Regístrese para disfrutar de todas las opciones que le ofrece
                muyÓpera:
              </p>
              <RegistrationForm />
              <br />
              <div className="registro">
                <Link to="/home">
                  ¿Ya hizo el registro? Haga clic aquí para iniciar sesión.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
