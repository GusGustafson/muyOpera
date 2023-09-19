import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import "../../style.css";
import { useTranslation } from "react-i18next";

const FOUND_WORD = "F_W";

interface FoundObject {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: string;
  telephone: string;
  image: string;
}

export default function SearchResultsView() {
  const foundObjectJSON = localStorage.getItem(FOUND_WORD);
  const foundObject: FoundObject[] | null = foundObjectJSON ? JSON.parse(foundObjectJSON) : null;

  const { t } = useTranslation();

  // ESTO ES LO AÑADIDO POR EL TEMA "F5"
  const [foundObjects, setFoundObjects] = useState<FoundObject[] | null>(foundObject);
  useEffect(() => {}, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez

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
              <h3>{t("SEARCHRESULTS_title")}</h3>
              <p>{t("SEARCHRESULTS_p1")}</p>

              {foundObjects && foundObjects.length > 0 ? (
                <div>
                  {foundObjects.map((obj) => (
                    <div key={obj.id}>
                      <img src={obj?.image} alt={obj?.image} height={100} />
                      <p>{t("SEARCHRESULTS_data1")} {obj.name}</p>
                      <p>{t("SEARCHRESULTS_data2")} {obj.city}</p>
                      <p>{t("SEARCHRESULTS_data3")} {obj.address}</p>
                      <p>{t("SEARCHRESULTS_data4")} {obj.aphoras}</p>
                      <p>{t("SEARCHRESULTS_data5")} {obj.telephone}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{t("SEARCHRESULTS_notFound")}</p>
              )}

              <br />
              <div className="registro">
                <Link to="/userLoggedIn">
                {t("SEARCHRESULTS_link")}
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
