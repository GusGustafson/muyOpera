import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

interface PrivateRouteProps {
  allowedRoles: number[];
}

export default function PrivateRoute({ allowedRoles }: PrivateRouteProps) {
  const location = useLocation();
  const { user } = useAuthContext();

  // OPCIÓN 1:
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  if (!allowedRoles?.includes(user.userRole)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
  return <Outlet />;

  // OPCIÓN 2:
  // return allowedRoles?.includes(user?.userRole) ? (
  //   <Outlet />
  // ) : user ? (
  //   <Navigate to="/unauthorized" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/" state={{ from: location }} replace />
  // );
}
