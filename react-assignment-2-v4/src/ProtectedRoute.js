import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [checkAcces] = useSearchParams();

  if (!checkAcces.get("password")) {
    return <Navigate to="/unauthorized" />;
  } else if (checkAcces.get("password") !== "secret") {
    return <Navigate to="/unauthorized" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
