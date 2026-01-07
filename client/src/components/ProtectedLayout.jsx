import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function ProtectedLayout() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ProtectedLayout;
