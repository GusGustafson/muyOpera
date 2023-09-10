import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import FramerMotion_Theatres from "../../components/FramerMotion_Theatres/FramerMotion_Theatres";
// import FramerMotion_Operas from "../../components/FramerMotion_Operas/FramerMotion_Operas";
import Login from "../../components/Login/Login";
import Carousel from "nuka-carousel";
import { images } from "./image-data";
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
          // width: "50%",
          // ml: 87,
          mt: 2,
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        > */}
      <div className="container d-flex mt-3">
        <Carousel
          autoplay={true}
          autoplayInterval={2500}
          wrapAround={true}
          withoutControls={true}
          slidesToShow={3}
          // cellSpacing={16}
          className="carouselFrame"
          // className="card"
        >
          {images.map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Carousel>
      </div>
      {/* </Box> */}

      {/* <div className="container d-flex justify-content-evenly mt-3">
        <FramerMotion_Theatres />
        <FramerMotion_Operas />
      </div> */}

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Inicie sesión</h3>
              <p>
                Introduzca sus credenciales para acceder a nuestro teatro
                virtual y disfrutar de todo lo que le ofrece{" "}
                <span>
                  <strong>muyÓpera</strong>
                </span>
                :
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
      <Footer />
    </Box>
  );
}
