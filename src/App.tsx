import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Registration from "./views/Registration";
import UserLoggedIn from "./views/UserLoggedIn";
import Theatres from "./views/Theatres";
import Operas from "./views/Operas";
import Singers from "./views/Singers";
import MyAccount from "./views/MyAccount";
import Admin from "./views/Admin";
import Unauthorized from "./views/Unauthorized";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import { roles } from "./const/roles";


export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* Rutas públicas */}
          <Route element={<PublicRoute />}>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
            </Route>
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* Rutas privadas */}
          <Route element={<PrivateRoute allowedRoles={roles.ALL_USERS} />}>
            <Route element={<Layout />}>
              <Route path="/userLoggedIn" element={<UserLoggedIn />} />
              <Route path="/theatres" element={<Theatres />} />
              <Route path="/operas" element={<Operas />} />
              <Route path="/singers" element={<Singers />} />
              <Route path="/myAccount" element={<MyAccount />} />
            </Route>
          </Route>
          <Route
            path="admin"
            element={<PrivateRoute allowedRoles={[roles.ADMIN]} />}
          >
            <Route index element={<Admin />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
