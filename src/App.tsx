import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import Layout from "./components/Layout";
import Landing from "./views/Landing";
import Home from "./views/Home";
import UserLoggedIn from "./views/UserLoggedIn";
import NotFound from "./views/NotFound";
import AuthContextProvider from "./contexts/AuthContext";

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
            </Route>
          </Route>

          {/* Rutas privadas */}
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/userloggedin" element={<UserLoggedIn />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
