
import { Navigate, Outlet } from "react-router-dom";

const RefreshUrl = () => {
  if ("token") {
    return <Navigate to="/login" />;
  }
  return <></>;
};

const ProtectedMain = () => {
  const isAuth = true

  return !isAuth ? <RefreshUrl /> : <Outlet />;
};

export default ProtectedMain;