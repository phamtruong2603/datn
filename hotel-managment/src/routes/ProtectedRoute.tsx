import { Navigate, Outlet } from "react-router-dom";

const RefreshUrl = () => {
  const token = localStorage.getItem("token")
  if (token) {
    return <Navigate to="/login" />;
  }
  return <></>;
};

const ProtectedMain = () => {
  const isAuth = true

  return !isAuth ? <RefreshUrl /> : <Outlet />;
};

export default ProtectedMain;