import { Navigate, Outlet, json } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedLayout() {
  const { isAuthenticated, principal } = useAuth();
  // ndfdb-izceb-c36o6-e3xcd-w4y7q-3iw5w-3qndk-wbvs3-3e3kv-bsnp3-aae

  if (!isAuthenticated) {
    return <Navigate to="/auth?mode=login"></Navigate>;
  }

  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
