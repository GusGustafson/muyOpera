import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import FinderEngine from "../../components/FinderEngine/FinderEngine";
import { useTranslation } from "react-i18next";

export default function Finder() {
  const { t } = useTranslation();
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
              <h3>{t("FINDER_title")}</h3>
              <p>{t("FINDER_p1")}</p>
              <p>{t("FINDER_p2")}</p>
              <FinderEngine />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
