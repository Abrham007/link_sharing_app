import { Outlet } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { UserDataContextProvider } from "../hooks/useUserData";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <UserDataContextProvider>
        <Outlet></Outlet>
      </UserDataContextProvider>
    </AuthProvider>
  );
}
