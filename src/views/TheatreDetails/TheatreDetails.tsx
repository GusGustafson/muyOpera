import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";

const THEATRE_KEY = "T_K";

interface Theatre {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: number;
  telephone: number;
  website: string;
  image: string;
}

export default function TheatreDetails() {
  const [theatre, setTheatre] = useState<Theatre | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/theatre/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data: Theatre = await response.json();
          setTheatre(data);
          localStorage.setItem(THEATRE_KEY, JSON.stringify(data));
        } else {
          console.error("Error al hacer fetch de los datos");
        }
      } catch (error) {
        console.error("Error al hacer fetch de los datos:", error);
      }
    }
    fetchData();
  }, [id]);

  function removeTheatreKey() {
    localStorage.removeItem(THEATRE_KEY);
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
              <h3>Información del teatro</h3>
              <br />
              <img src={theatre?.image} alt={theatre?.image} />
              <h6>Imagen: {theatre?.image}</h6>
              {/* <h6>ID: {theatre?.id}</h6> */}
              <h6>Nombre: {theatre?.name}</h6>
              <h6>Ciudad: {theatre?.city}</h6>
              <h6>Dirección: {theatre?.address}</h6>
              <h6>Teléfono: {theatre?.telephone}</h6>
              <h6>Sitio web: <a href={theatre?.website} target="_blank">{theatre?.website}</a></h6>
              <h6>Aforo: {theatre?.aphoras} espectadores</h6>
              <br />
              <div className="registro">
                <Link to="/theatres" onClick={removeTheatreKey}>
                  ¿Ha terminado de ver la información? Haga clic aquí para
                  volver atrás.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
