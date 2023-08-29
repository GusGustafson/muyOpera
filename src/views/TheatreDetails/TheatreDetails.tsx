import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";

const THEATRE_KEY = "T_K";

interface Theatre {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: number;
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
          // localStorage.setItem(THEATRE_KEY, JSON.parse(data));
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
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Información del teatro</h3>
              <p>Aquí tiene la información del teatro:</p>
              <TextField
                margin="dense"
                color="warning"
                required
                fullWidth
                id="adasdname"
                label="Datos"
                name="asdasdname"
                value={JSON.stringify(theatre)} // NO PONER "defaultValue" Y "value", que casca
                // value={values.name} // NO PONER "defaultValue" Y "value", que casca
                // readOnly
              />
              <img src={theatre?.image} alt={theatre?.image} />
              <h6>Imagen: {theatre?.image}</h6>
              <h6>ID: {theatre?.id}</h6>
              <h6>Nombre: {THEATRE_KEY}</h6>
              <h6>Ciudad: {theatre?.city}</h6>
              <h6>Dirección: {theatre?.address}</h6>
              <h6>Aforo: {theatre?.aphoras}</h6>
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
