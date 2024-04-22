import { Navigate, Outlet, json } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedLayout() {
  const { isAuthenticated, principal } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth"></Navigate>;
  }

  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
