import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { roles } from "../../const/roles";
import "../../style.css";
import { useTranslation } from "react-i18next";

export default function Navbar_User() {
  const { t } = useTranslation();

  const { logout, user } = useAuthContext();
  function loggingOut() {
    logout();
  }

  return (
    // <nav className="container navbar" id="navegacion">
    <nav className="navbar" id="navegacion">
      <div className="col-izq">
        <ul className="menu d-flex gap-4">
          <li>
            <Link to="/theatres">{t("NAVBAR_theatres")}</Link>
          </li>
          <li>
            <Link to="/operas">{t("NAVBAR_operas")}</Link>
          </li>
          <li>
            <Link to="/singers">{t("NAVBAR_singers")}</Link>
          </li>
          <li>
            <Link to="/finder">{t("NAVBAR_finder")}</Link>
          </li>
        </ul>
      </div>

      <div className="col-der">
        <ul className="menu d-flex gap-4">

          <li>
          {user!.userRole === roles.ADMIN ? (
              <Link to="/admin">{t("NAVBAR_admin")}</Link>
            ) : null}
          </li>

          <li>
            <Link to="/myAccount">{t("NAVBAR_myAccount")}</Link>
          </li>
          <li>
            <Link to="/home" onClick={loggingOut}>
            {t("NAVBAR_logout")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
