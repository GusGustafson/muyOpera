import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";

const OPERA_KEY = "O_K";

interface Opera {
  id: number;
  name: string;
  composer: string;
  librettist: string;
  language: string;
  date: number;
  duration: string;
  image: string;
}

export default function OperaDetails() {
  const [opera, setOpera] = useState<Opera | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/opera/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data: Opera = await response.json();
          setOpera(data);
          localStorage.setItem(OPERA_KEY, JSON.stringify(data));
        } else {
          console.error("Error al hacer fetch de los datos");
        }
      } catch (error) {
        console.error("Error al hacer fetch de los datos:", error);
      }
    }
    fetchData();
  }, [id]);

  function removeOperaKey() {
    localStorage.removeItem(OPERA_KEY);
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
      <Header />
      <Navbar_User />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Información de la ópera</h3>
              <img src={opera?.image} alt={opera?.image} />
              <br />
              {/* <h6>Imagen: {opera?.image}</h6> */}
              {/* <h6>ID: {opera?.id}</h6> */}
              <br />
              <h5>Nombre: {opera?.name}</h5>
              <h5>Compositor: {opera?.composer}</h5>
              <h5>Libretista: {opera?.librettist}</h5>
              <h5>Idioma: {opera?.language}</h5>
              <h5>Fecha: {opera?.date}</h5>
              <h5>Duración: {opera?.duration}</h5>
              <div className="registro">
                <Link to="/operas" onClick={removeOperaKey}>
                  ¿Ha terminado de ver la información? Haga clic aquí para
                  volver atrás.
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
