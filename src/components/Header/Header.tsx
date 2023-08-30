import { Link } from 'react-router-dom';
import claveDeSol from "../../assets/claveDeSol.png";
import "../../style.css";

export default function Header() {
  return (
    <header>
      <div className="container-md header d-flex align-items-center">
        <div className="container d-flex col-md-auto">
          <img src={claveDeSol} alt="logo" width="64px" height="64px" />
        </div>
        <div className="container d-flex col-md-auto">
        <Link to="/userLoggedIn">
          <h2>
            <span className="main-color" id="muyOperaTitle">muyÓpera</span>
          </h2>
          </Link>
        </div>
        <div className="container col-md-auto pb-0 text-warning">
          <h4>
            La forma más fácil de encontrar los principales eventos líricos
          </h4>
        </div>
      </div>
    </header>
  );
}
