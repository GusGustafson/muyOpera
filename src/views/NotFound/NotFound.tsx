import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <br />
      <h1>
        <p dangerouslySetInnerHTML={{ __html: t("NOTFOUND_title") }} />
      </h1>
      <br />
      <Link to="/home">
        <Button variant="contained" color="warning">
          {t("NOTFOUND_button")}
        </Button>
      </Link>
      {/* <Footer /> */}
    </>
  );
}
