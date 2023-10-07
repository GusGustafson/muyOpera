import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

export default function Unauthorized() {
  const { t } = useTranslation();

  const { logout } = useAuthContext();
  function loggingOut() {
    logout();
  }

  return (
    <>
      <Header />
      <br />
      <h1>
        <p dangerouslySetInnerHTML={{ __html: t("UNAUTHORIZED_title") }} />
      </h1>
      <br />
      <p>{t("UNAUTHORIZED_p1")}</p>
      <br />
      <Link to="/home" onClick={loggingOut}>
        <Button variant="contained" color="warning">
          {t("UNAUTHORIZED_button")}
        </Button>
      </Link>
      {/* <Footer /> */}
    </>
  );
}
