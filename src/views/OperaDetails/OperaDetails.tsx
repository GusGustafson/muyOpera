import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
// import FinderEngineWithIdProvided from "../../components/FinderEngineWitIdProvided/FinderEngineWithIdProvided";
import FinderEngine_Opera from "../../components/FinderEngine_Opera/FinderEngine_Opera";
import Carousel from "nuka-carousel";
import { useTranslation } from "react-i18next";

const OPERA_KEY = "O_K";

interface Opera {
  id: number;
  name: string;
  composer: string;
  language: string;
  date: number;
  duration: string;
  website: string;
  image: string;
  image2: string;
  image3: string;
}

export default function OperaDetails() {
  const [opera, setOpera] = useState<Opera | null>(null);
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

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
              <h3>{t("OPERADETAILS_title")}</h3>
              <div className="container d-flex">
                <Carousel
                  autoplay={true}
                  autoplayInterval={2000}
                  wrapAround={true}
                  withoutControls={true}
                  slidesToShow={3}
                  cellSpacing={1}
                  className="carouselFrame"
                  // className="card"
                >
                  {/* <img src={opera?.image} alt={opera?.image} height={300} /> */}
                  <img src={opera?.image} />
                  <img src={opera?.image2} />
                  <img src={opera?.image3} />
                </Carousel>
              </div>
              <h5>
                {t("OPERADETAILS_name")} {opera?.name}
              </h5>
              <h5>
                {t("OPERADETAILS_composer")} {opera?.composer}
              </h5>
              <h5>
                {t("OPERADETAILS_language")} {opera?.language}
              </h5>
              <h5>
                {t("OPERADETAILS_date")} {opera?.date}
              </h5>
              <h5>
                {t("OPERADETAILS_duration")} {opera?.duration}
              </h5>
              <h5>
                {t("OPERADETAILS_website")}{" "}
                <a href={opera?.website} target="_blank">
                  {opera?.website}
                </a>
              </h5>
              {/* <FinderEngineWithIdProvided operaName={opera?.name} /> */}
              {/* <FinderEngineWithIdProvided /> */}
              <FinderEngine_Opera />
              <div className="registro">
                <Link to="/operas" onClick={removeOperaKey}>
                  {t("OPERADETAILS_link")}
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
