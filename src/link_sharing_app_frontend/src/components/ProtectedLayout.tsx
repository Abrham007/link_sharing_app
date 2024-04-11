import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedLayout() {
  const { user } = useAuth();

  if (false) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
