import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import UpdateUserDataForm from "../../components/UpdateUserDataForm/UpdateUserDataForm";
import "../../style.css";

const USER_KEY = "U_K";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export default function AdminView() {
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
              <p>Modifica cualquier dato del usuario seleccionado:</p>
              {/* HAY QUE CAMBIAR ESTE FORMULARIO POR EL DEL ADMINISTRADOR: */}
              {/* <UpdateUserDataForm /> */}
              <p>---FORMULARIO DE CAMBIO DE DATOS---</p>
              <p>Haz clic en este botón para eliminar la cuenta del usuario seleccionado:</p>
              <p>---BOTÓN PARA ELIMINAR LA CUENTA DEL USUARIO---</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
