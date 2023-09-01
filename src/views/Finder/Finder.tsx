import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
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
                Aquí puede realizar búsquedas de eventos por TEATRO, por ÓPERA o
                por CANTANTE.
              </p>
              <p>
                Una vez localizado el evento que le interese, también puede solicitar,
                si lo desea, un presupuesto personalizado a nuestro agente de viajes,
                indicando si solo quiere obtener las entradas o si prefiere que le
                busquemos viaje y alojamiento.
              </p>
              <FinderEngine />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
