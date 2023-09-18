import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { roles } from "../../const/roles";
// import SearchField from "../../components/SearchField/SearchField"
import "../../style.css";
import { useTranslation } from "react-i18next";

export default function Navbar_User() {
  const { t } = useTranslation();

  const { logout, user } = useAuthContext();
  function loggingOut() {
    logout();
  }

  const [searchQuery, setSearchQuery] = useState<string>("");
  useEffect(() => {}, []); // El array de dependencias vacío garantiza que el efecto solo se ejecute una vez
  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  async function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      // Perform your search logic with the searchQuery state value
      console.log("Input del usuario para la query de búsqueda:", searchQuery);
      // You can implement the actual search functionality here
    } catch (error) {
      console.error("Error al hacer fetch de los datos:", error);
    }
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

      {/* <div className="searchField" id="campoBuscar">
      <SearchField />
      </div> */}

      <form className="searchForm" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar palabra..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Buscar</button>
      </form>

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
