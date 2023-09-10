import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import FinderEngine from "../../components/FinderEngine/FinderEngine";

export default function Finder() {
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
              <h3>Buscador avanzado</h3>
              <p>
                Indique uno o varios datos para buscar eventos por TEATRO, por
                ÓPERA o por CANTANTE.
              </p>
              <p>
                Cuando encuentre el evento que le interese, puede solicitar, si
                lo desea, un presupuesto personalizado a nuestro agente de
                viajes, indicando si solo quiere obtener las entradas o si
                prefiere que el agente le busque viaje y alojamiento.
              </p>
              <FinderEngine />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
