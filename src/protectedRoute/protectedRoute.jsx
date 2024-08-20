import { Navigate } from "react-router-dom";
import { UserContext } from "../context/appContext";
import { useContext } from "react";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return children;
};
