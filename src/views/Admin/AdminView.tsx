import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
// import SearchUserForm from "../../components/SearchUserForm/SearchUserForm";
import SearchUserPage from "../../components/SearchUserPage/SearchUserPage";
import "../../style.css";

const USER_KEY = "U_K";
// const FOUND_USER = "F_U";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  userRole: number;
  registerDate: string;
  updateDate: string;
}

// interface FoundUser {
//   id: number;
//   name: string;
//   surname: string;
//   email: string;
//   userRole: number;
//   registerDate: string;
//   updateDate: string;
// }

export default function AdminView() {
  const userJSON = localStorage.getItem(USER_KEY);
  const user: User | null = userJSON ? JSON.parse(userJSON) : null;
  console.log(user);
  // const foundUserJSON = localStorage.getItem(FOUND_USER);
  // const foundUser: FoundUser | null = foundUserJSON ? JSON.parse(foundUserJSON) : null;
  // console.log(foundUser);

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
      {/* <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="caja destacado">
                <h3>Búsqueda de usuario</h3>
                <p>Introduce un email para buscar ese usuario:</p>
                <SearchUserForm />
              </div>
            </div>
          </div>
        </div> */}
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              {/* <h3>Actualización de datos de usuario</h3> */}
              {/* <p>Modifique aquí cualquier dato de su cuenta:</p> */}
              <SearchUserPage />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
