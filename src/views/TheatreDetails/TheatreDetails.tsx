import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
// import FinderEngineWithIdProvided from "../../components/FinderEngineWitIdProvided/FinderEngineWithIdProvided";
import FinderEngine_Theatre from "../../components/FinderEngine_Theatre/FinderEngine_Theatre";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
              <h3>{t("THEATREDETAILS_title")}</h3>
              <img src={theatre?.image} alt={theatre?.image} height={300} />
              <h5>{t("THEATREDETAILS_name")} {theatre?.name}</h5>
              <h5>{t("THEATREDETAILS_city")} {theatre?.city}</h5>
              <h5>{t("THEATREDETAILS_address")} {theatre?.address}</h5>
              <h5>{t("THEATREDETAILS_telephone")} {theatre?.telephone}</h5>
              <h5>{t("THEATREDETAILS_website")} <a href={theatre?.website} target="_blank">
                  {theatre?.website}
                </a>
              </h5>
              <h5>{t("THEATREDETAILS_aphorus")} {theatre?.aphoras} {t("THEATREDETAILS_aphorus2")}</h5>
              {/* <FinderEngineWithIdProvided theatreName={theatre?.name} /> */}
              {/* <FinderEngineWithIdProvided /> */}
              <FinderEngine_Theatre />
              <div className="registro">
                <Link to="/theatres" onClick={removeTheatreKey}>
                {t("THEATREDETAILS_link")}
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
