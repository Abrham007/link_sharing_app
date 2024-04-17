import { Navigate, Outlet, json } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import { useEffect, useState } from "react";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client";

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();
  // ndfdb-izceb-c36o6-e3xcd-w4y7q-3iw5w-3qndk-wbvs3-3e3kv-bsnp3-aae

  if (false) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
