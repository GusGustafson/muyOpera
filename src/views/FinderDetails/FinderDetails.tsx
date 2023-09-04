import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import BudgetRequestForm from "../../components/BudgetRequestForm/BudgetRequestForm";

const EVENT_KEY = "E_K";

interface EventValues {
    id: string;
    idTheatre: string;
    idOpera: string;
    idSinger1: string;
    idSinger2: string;
    dateTime: string;
}

export default function FinderDetails() {
  const [event, setEvent] = useState<EventValues | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/event/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data: EventValues = await response.json();
          setEvent(data);
          localStorage.setItem(EVENT_KEY, JSON.stringify(data));
        } else {
          console.error("Error al hacer fetch de los datos");
        }
      } catch (error) {
        console.error("Error al hacer fetch de los datos:", error);
      }
    }
    fetchData();
  }, [id]);

  function removeEventKey() {
    localStorage.removeItem(EVENT_KEY);
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
              <h3>Información del evento</h3>
              <br />
              <h6>Núm. evento: {event?.id}</h6>
              <h6>Teatro: {event?.idTheatre}</h6>
              <h6>Ópera: {event?.idOpera}</h6>
              <h6>Cantante femenino: {event?.idSinger1}</h6>
              <h6>Cantante masculino: {event?.idSinger2}</h6>
              <h6>Fecha y hora: {event?.dateTime}</h6>
              <BudgetRequestForm />
              <br />
              <div className="registro">
                <Link to="/finder" onClick={removeEventKey}>
                  ¿No desea solicitar un presupuesto para este evento?
                  Haga clic aquí para volver atrás.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
