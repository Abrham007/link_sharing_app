import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthClient } from "@dfinity/auth-client";
import { useNavigate } from "react-router-dom";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";
import { UserData } from "../interface/UserData";
import { Principal } from "@dfinity/principal";

export type AuthContextType = {
  id: string | undefined;
  userData: UserData | null;
  login: (connect: () => Promise<AuthClient>) => {};
  createAccount: (connect: () => Promise<AuthClient>) => {};
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState<string>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  async function login(connect: () => Promise<AuthClient>) {
    const authClient = await connect();
    let principalId = authClient.getIdentity().getPrincipal();
    setId(principalId.toText());

    let response = await backend.hasAccount(principalId);

    if (response) {
      let response = await backend.getUser(principalId);
      setUserData(response);
      console.log(userData);
      navigate("/dashboard/links");
    } else {
      navigate("/");
    }
  }

  async function createAccount(connect: () => Promise<AuthClient>) {
    const authClient = await connect();
    let principalId = authClient.getIdentity().getPrincipal();
    setId(principalId.toText());

    let response = await backend.createUser(principalId);
    console.log(response);

    if (response) {
      let response = await backend.getUser(principalId);
      setUserData(response);

      navigate("/dashboard/links");
    } else {
      navigate("/");
    }
  }

  const value = useMemo(
    () => ({
      id,
      userData,
      login,
      createAccount,
    }),
    [userData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  return useContext(AuthContext);
}
