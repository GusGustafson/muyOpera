import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import BudgetRequestForm from "../../components/BudgetRequestForm/BudgetRequestForm";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { useTranslation } from "react-i18next";

const EVENT_KEY = "E_K";

interface EventValues {
  id: string;
  idTheatre: string;
  theatreName: string;
  idOpera: string;
  operaName: string;
  idSinger1: string;
  singer1Fullname: string;
  idSinger2: string;
  singer2Fullname: string;
  dateTime: string;
}

export default function FinderDetails() {
  const [event, setEvent] = useState<EventValues | null>(null);
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

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

  const formattedDate = event ? format(new Date(event.dateTime), "dd/MM/yyyy - HH:mm", { locale: es }) : "";

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
              <h3>{t("FINDERDETAILS_title")}</h3>
              <br />
              <h5>{t("FINDERDETAILS_id")} {event?.id}</h5>
              <h5>{t("FINDERDETAILS_theatreName")} {event?.theatreName}</h5>
              <h5>{t("FINDERDETAILS_operaName")} {event?.operaName}</h5>
              <h5>{t("FINDERDETAILS_singer1Fullname")} {event?.singer1Fullname}</h5>
              <h5>{t("FINDERDETAILS_singer2Fullname")} {event?.singer2Fullname}</h5>
              <h5>{t("FINDERDETAILS_formattedDate")} {formattedDate}</h5>
              <br />
              <div>{t("FINDERDETAILS_div")}</div>
              <BudgetRequestForm />
              <br />
              <div className="registro">
                <Link to="/finder" onClick={removeEventKey}>
                {t("FINDERDETAILS_link")}
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
