import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
      <Header />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Registro</h3>
              <p>
                Regístrese para disfrutar de todas las funcionalidades que le
                ofrece{" "}
                <span>
                  <strong>muyÓpera</strong>
                </span>
                :
              </p>
              <RegistrationForm />
              <br />
              <div className="registro">
                <Link to="/home">
                  ¿Ya se registró anteriormente? Haga clic aquí para iniciar
                  sesión.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
