import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
// import madrid from "../../assets/theatres/TeatroReal_Madrid_small2.jpg";
// import malaga from "../../assets/theatres/TeatroCervantes_Malaga_small2.jpg";
// import oviedo from "../../assets/theatres/TeatroCampoamor_Oviedo_small2.jpg";
// import barcelona from "../../assets/theatres/TeatreDelLiceu_Barcelona_small.jpg";
// import sevilla from "../../assets/theatres/TeatroMaestranza_Sevilla_small2.jpg";
// import lasPalmas from "../../assets/theatres/AuditorioAlfredoKraus_LasPalmas_small2.jpg";
import Header from "../../components/Header/Header";
import FramerMotion_Theatres from "../../components/FramerMotion_Theatres/FramerMotion_Theatres";
import FramerMotion_Operas from "../../components/FramerMotion_Operas/FramerMotion_Operas";
import Login from "../../components/Login/Login";
// import Carousel from "nuka-carousel";
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
      <Header />
      {/* <Box
        sx={{
          maxHeight: "400px",
          minHeight: "400px",
          width: "50%",
          ml: 87,
          mt: 2,
        }}
        >
      <Carousel autoplay={true} wrapAround={true} withoutControls={true}  slidesToShow={1}>
        <img src={madrid} />
        <img src={malaga} />
        <img src={oviedo} />
        <img src={barcelona} />
        <img src={sevilla} />
        <img src={lasPalmas} />
      </Carousel>
      </Box> */}

      {/* <Box
        sx={{
          mt: 2,
        }}
      >
        <FramerMotion />
      </Box> */}

      <div className="container d-flex justify-content-evenly mt-3">
        <FramerMotion_Theatres />
        <FramerMotion_Operas />
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Inicie sesión</h3>
              <p>
                Introduzca sus credenciales para levantar el telón y disfrutar
                de todas las opciones que le ofrece muyÓpera:
              </p>
              <Login />
              <br />
              <div className="registro">
                <Link to="/registration">
                  ¿Aún no tiene cuenta? Haga clic aquí para registrarse.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
