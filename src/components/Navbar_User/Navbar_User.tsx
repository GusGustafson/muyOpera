import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { roles } from "../../const/roles";
import "../../style.css";

export default function Navbar_User() {
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
            <Link to="/theatres">Teatros</Link>
          </li>
          <li>
            <Link to="/operas">Óperas</Link>
          </li>
          <li>
            <Link to="/singers">Cantantes</Link>
          </li>
          <li>
            <Link to="/finder">Buscador avanzado</Link>
          </li>
        </ul>
      </div>

      <div className="col-der">
        <ul className="menu d-flex gap-4">

          <li>
          {user!.userRole === roles.ADMIN ? (
              <Link to="/admin">ADMIN</Link>
            ) : null}
          </li>

          <li>
            <Link to="/myAccount">Mi cuenta</Link>
          </li>
          <li>
            <Link to="/home" onClick={loggingOut}>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
