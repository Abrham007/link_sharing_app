import { Outlet } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";
import { UserDataContextProvider } from "../hooks/useUserData";

export default function RootLayout() {
  return (
    <AuthProvider>
      <UserDataContextProvider>
        <Outlet></Outlet>
      </UserDataContextProvider>
    </AuthProvider>
  );
}
