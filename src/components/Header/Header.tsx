import { Link } from "react-router-dom";
// import claveDeSol from "../../assets/claveDeSol.png";
import EN_ES from "../../assets/EN_ES.png";
import "../../style.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  function handleLanguage() {
    i18n.language === "es-ES"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("es-ES");
  }

  return (
    <header>
      <div className="container-md header d-flex align-items-center">
        <div className="container d-flex col-md-auto">
          {/* <img src={claveDeSol} alt="logo" width="64px" height="64px" /> */}
          <button onClick={handleLanguage}>
            <img src={EN_ES} alt="Cambiar idioma/Change language" />
          </button>
        </div>
        <div className="container d-flex col-md-auto">
          <Link to="/userLoggedIn">
            <h2>
              <span className="muyOpera-color" id="muyOperaTitle">
                muyÓpera
              </span>
            </h2>
          </Link>
        </div>
        <div className="container col-md-auto pb-0 text-warning">
          <h4>{t("HEADER_header")}</h4>
        </div>
      </div>
    </header>
  );
}
