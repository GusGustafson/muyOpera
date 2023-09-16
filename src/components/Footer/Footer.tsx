// import logo from "../../assets/logo.png";
import "../../style.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container-md footer text-light d-flex justify-content-evenly">
        <div className="container d-flex flex-column align-items-center">
          {/* <img src={logo} alt="logo" width="50px" /> */}
          <h6>{t("FOOTER_footer")}</h6>
        </div>
      </div>
    </footer>
  );
}
