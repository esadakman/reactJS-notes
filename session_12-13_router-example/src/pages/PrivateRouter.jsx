import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  //   const navigate = useNavigate();
  // ? Aslında bu bilgi global state'den okunacak
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRouter;
