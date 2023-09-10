// import logo from "../../assets/logo.png";
import "../../style.css";

export default function Footer() {
  return (
    <footer>
      <div className="container-md footer text-light d-flex justify-content-evenly">
        <div className="container d-flex flex-column align-items-center">
            {/* <img src={logo} alt="logo" width="50px" /> */}
            <h6>
              <span className="muyOpera-color">muyÓpera</span> © Augusto Blanco - Todos los
              derechos reservados
            </h6>
        </div>
      </div>
    </footer>
  );
}
