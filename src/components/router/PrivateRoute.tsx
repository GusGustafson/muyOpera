import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

interface PrivateRouteProps {
  allowedRoles: number[];
}

export default function PrivateRoute({ allowedRoles }: PrivateRouteProps) {
  const location = useLocation();
  const { user } = useAuthContext();

  // if (user) {
  //   return <Navigate to="/userLoggedIn" />;
  // }
  // if (!user) {
  //   return <Navigate to="/home" />;
  // }

  return allowedRoles?.includes(user?.userRole) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
