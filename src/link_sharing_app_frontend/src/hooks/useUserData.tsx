import React, { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "../interface/UserData";
import { useAuth } from "./useAuth";
import { link_sharing_app_backend as backend } from "../../../declarations/link_sharing_app_backend";

const UserDataContext = createContext({} as any);

export function UserDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { principal, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);

  async function getUserData() {
    if (isAuthenticated) {
      const userDataResponse = await backend.getUser(principal);
      setUserData(userDataResponse);
      return userDataResponse;
    }
  }

  return (
    <UserDataContext.Provider value={{ userData, getUserData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
