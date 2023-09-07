import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import UpdateUserDataForm from "../../components/UpdateUserDataForm/UpdateUserDataForm";
import "../../style.css";

const USER_KEY = "U_K";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export default function MyAccountView() {
  const userJSON = localStorage.getItem(USER_KEY);
  const user: User | null = userJSON ? JSON.parse(userJSON) : null;
  console.log(user);

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Header />
      <Navbar_User />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Actualización de datos de usuario</h3>
              <p>Modifique aquí cualquier dato de su cuenta:</p>
              <UpdateUserDataForm />
              <br />
              <div className="registro">
                <Link to="/userLoggedIn">
                  ¿No desea cambiar nada? Haga clic aquí para volver a la página
                  principal.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
