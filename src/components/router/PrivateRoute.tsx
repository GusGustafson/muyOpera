import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PrivateRoute() {
  const { user } = useAuthContext();

  // if (user) {
  //   return <Navigate to="/userLoggedIn" />;
  // }
  if (!user) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
