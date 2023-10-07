import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "../../style.css";
import { useTranslation } from "react-i18next";

export default function RegistrationView() {
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
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>{t("REGISTRATION_title")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("REGISTRATION_p1") }} />
              <RegistrationForm />
              <br />
              <div className="registro">
                <Link to="/home">{t("REGISTRATION_link")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
