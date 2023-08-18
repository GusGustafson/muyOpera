import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PublicRoute() {

  const { user } = useAuthContext();

  // if (!user) {
  //   return <Navigate to="/home" />;
  // }
  if (user) {
    return <Navigate to="/userLoggedIn" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
