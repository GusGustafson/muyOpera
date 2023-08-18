import claveDeSol from "../../assets/claveDeSol.png";
import "../../style.css";

export default function Header() {
  return (
    <header>
      <div className="container-md d-flex align-items-center">
        <div className="container d-flex col-md-auto">
          <img src={claveDeSol} alt="logo" width="64px" height="64px" />
        </div>
        <div className="container d-flex col-md-auto">
          <h2>
            <span className="main-color">muyÓpera</span>
          </h2>
        </div>
        <div className="container col-md-auto text-warning">
          <h4>
            La forma más fácil de encontrar los principales eventos líricos
          </h4>
        </div>
      </div>
    </header>
  );
}
