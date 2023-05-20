import { Navigate } from "react-router";

export const RequiresAuth = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};
