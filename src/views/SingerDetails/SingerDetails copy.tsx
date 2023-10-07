import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
// import FinderEngineWithIdProvided from "../../components/FinderEngineWitIdProvided/FinderEngineWithIdProvided";
import FinderEngine_Singer from "../../components/FinderEngine_Singer/FinderEngine_Singer";
import { useTranslation } from "react-i18next";

const SINGER_KEY = "S_K";

interface Singer {
  id: number;
  name: string;
  surname: string;
  voice: string;
  birthYear: number;
  nationality: string;
  website: string;
  image: string;
}

export default function SingerDetails() {
  const [singer, setSinger] = useState<Singer | null>(null);
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/singer/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data: Singer = await response.json();
          setSinger(data);
          localStorage.setItem(SINGER_KEY, JSON.stringify(data));
        } else {
          console.error("Error al hacer fetch de los datos");
        }
      } catch (error) {
        console.error("Error al hacer fetch de los datos:", error);
      }
    }
    fetchData();
  }, [id]);

  function removeSingerKey() {
    localStorage.removeItem(SINGER_KEY);
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
              <h3>{t("SINGERDETAILS_title")}</h3>
              <img src={singer?.image} alt={singer?.image} height={300} />
              <h5>
                {t("SINGERDETAILS_name")} {singer?.name} {singer?.surname}
              </h5>
              <h5>
                {t("SINGERDETAILS_voice")} {singer?.voice}
              </h5>
              <h5>
                {t("SINGERDETAILS_birthYear")} {singer?.birthYear}
              </h5>
              <h5>
                {t("SINGERDETAILS_nationality")} {singer?.nationality}
              </h5>
              <h5>
                {t("SINGERDETAILS_website")}{" "}
                <a href={singer?.website} target="_blank">
                  {singer?.website}
                </a>
              </h5>
              {/* <FinderEngineWithIdProvided operaName={singer?.name} /> */}
              {/* <FinderEngineWithIdProvided /> */}
              <FinderEngine_Singer />
              <div className="registro">
                <Link to="/singers" onClick={removeSingerKey}>
                  {t("SINGERDETAILS_link")}
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
