import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import Ecco from "../../assets/AngelesCastro_EccoRespiroAppena.mp4";

export default function UserLoggedIn() {
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
      <Navbar_User />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>
                <span className="muyOpera-text-color">
                  <strong>muyÓpera</strong>
                </span>
              </h3>
              <p>
                <strong>
                  Le damos la bienvenida a{" "}
                  <span className="muyOpera-text-color" id="muyOperaText">
                    muyÓpera
                  </span>
                  , la forma más fácil de encontrar los principales eventos
                  líricos de la temporada 2023/24.
                </strong>
              </p>
              {/* <br /> */}
              <p>
                En el menú superior dispone de opciones para ver los TEATROS,
                las ÓPERAS y los CANTANTES.
              </p>
              <p>
                Y, por supuesto, también puede acceder al BUSCADOR AVANZADO,
                nuestra funcionalidad principal.
              </p>
              <p>
                El BUSCADOR AVANZADO le permite encontrar fácilmente aquellos
                eventos que más le interesen.
              </p>
              <p>
                Además le ofrece la posibilidad de solicitar un presupuesto
                personalizado a nuestro agente de viajes,
              </p>
              <p>
                indicando si solo desea obtener entradas o si también quiere que
                le busquemos viaje y alojamiento.
              </p>
              <p>
                Esperamos que aquí encuentre un gran evento con el que disfrutar
                de la ópera.
              </p>
              <video controls height={180} autoPlay>
                <source src={Ecco} type="video/mp4" />
              </video>
              <p>
                Disfrute de su estancia aquí deleitándose con esta maravillosa
                aria de la ópera Adriana Lecouvreur, interpretada por la soprano
                Ángeles Castro.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container text-center">
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/fn7ImnM1fTs"
          title="Angeles Castro - Ecco Respiro Appena.avi"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div> */}
      <Footer />
    </Box>
  );
}
