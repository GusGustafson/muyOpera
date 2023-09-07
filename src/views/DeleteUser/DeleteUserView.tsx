import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from '../../components/Header/Header';
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import "../../style.css";

const FOUND_USER = "F_U";

interface FoundUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    userRole: number;
    regDate: string;
    updDate: string;
  }

interface DeleteUserViewProps {
onSubmit: () => void;
}


export default function DeleteUserView(props: DeleteUserViewProps) {
    const foundUserJSON = localStorage.getItem(FOUND_USER);
    const foundUser: FoundUser | null = foundUserJSON
      ? JSON.parse(foundUserJSON)
      : null;

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
              <h3>Eliminación de cuenta de usuario</h3>
              <p>
                Haz clic en el botón para eliminar definitivamente esta cuenta de usuario:
              </p>
              <h4>Cuenta de usuario:</h4>
              <h5>ID: <span id="userFoundId">{foundUser?.id}</span></h5>
              <h5>Nombre: {foundUser?.name}</h5>
              <h5>Apellidos: {foundUser?.surname}</h5>
              <h5>Correo electrónico: {foundUser?.email}</h5>
              <h5>Rol: {foundUser?.userRole}</h5>
              <Button
                  id="deleteUserButton"
                  // type="button"
                  // fullWidth
                  variant="contained"
                  sx={{ mt: 1 }}
                  size="large"
                  color="warning"
                  onClick={props.onSubmit}
                >
                  Eliminar cuenta de usuario
                </Button>
                <br />
                <br />
              <div className="registro">
                <Link to="/admin">
                  ¿No deseas eliminar esta cuenta de usuario? Haz clic aquí para volver atrás.
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
