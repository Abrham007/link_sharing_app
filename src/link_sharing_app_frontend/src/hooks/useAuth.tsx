import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext({
  user: "",
  login: (s: string) => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState("");

  function login(userPrincipal: string) {
    setUser(userPrincipal);
  }

  function logout() {}

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  return useContext(AuthContext);
}
