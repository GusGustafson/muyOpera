import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from '../../components/Header/Header';
import Navbar_User from "../../components/Navbar_User/Navbar_User";
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
              <h5>Cuenta de usuario:</h5>
              <h6>ID: <div id="userFoundId">{foundUser?.id}</div></h6>
              <h6>Nombre: <div>{foundUser?.name}</div></h6>
              <h6>Apellidos: <div>{foundUser?.surname}</div></h6>
              <h6>Correo electrónico: <div>{foundUser?.email}</div></h6>
              <h6>Rol: <div>{foundUser?.userRole}</div></h6>
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
    </Box>
  );
}
