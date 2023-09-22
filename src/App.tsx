import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Registration from "./views/Registration";
import UserLoggedIn from "./views/UserLoggedIn";
import Theatres from "./views/Theatres";
import TheatreDetails from "./views/TheatreDetails";
import Operas from "./views/Operas";
import OperaDetails from "./views/OperaDetails";
import Singers from "./views/Singers";
import SingerDetails from "./views/SingerDetails";
import Finder from "./views/Finder";
import FinderDetails from "./views/FinderDetails";
import SearchWord from "./views/SearchWord";
import Admin from "./views/Admin";
import DeleteUser from "./views/DeleteUser";
import MyAccount from "./views/MyAccount";
import SearchResults from "./views/SearchResults";
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
              <Route path="home" element={<Home />} />
              <Route path="registration" element={<Registration />} />
            </Route>
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* Rutas privadas */}
          <Route element={<PrivateRoute allowedRoles={roles.ALL_USERS} />}>
            <Route element={<Layout />}>
              <Route path="userLoggedIn" element={<UserLoggedIn />} />
              <Route path="theatres">
                <Route index element={<Theatres />} />
                <Route path=":id" element={<TheatreDetails />} />
              </Route>
              <Route path="operas">
                <Route index element={<Operas />} />
                <Route path=":id" element={<OperaDetails />} />
              </Route>
              <Route path="singers">
                <Route index element={<Singers />} />
                <Route path=":id" element={<SingerDetails />} />
              </Route>
              <Route path="finder" element={<Finder />} />
              <Route path="event/:id" element={<FinderDetails />} />
              <Route path="searchWord" element={<SearchWord />} />
              <Route path="myAccount" element={<MyAccount />} />
              {/* COMO EL COMPONENTE "SearchField" DA EL PROBLEMA DE F5, LO HE ANULADO ("COMENTADO") ENTERO. */}
              {/* <Route path="searchResults" element={<SearchResults />} /> */}
            </Route>
          </Route>

          <Route element={<PrivateRoute allowedRoles={[roles.ADMIN]} />}>
            <Route element={<Layout />}>
              <Route path="admin" element={<Admin />} />
              <Route path="deleteUser" element={<DeleteUser />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
