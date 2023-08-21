import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
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
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <h3>Actualización de datos de usuario</h3>
              <p>
                Modifique aquí cualquier dato de su cuenta:
              </p>
              <p>Usuario que ha iniciado sesión: {user?.id} {user?.name} {user?.surname} {user?.email}</p>
              <UpdateUserDataForm />
              <br />
              <div className="registro">
                <Link to="/userLoggedIn">
                  ¿No desea cambiar nada? Haga clic aquí para volver atrás.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
