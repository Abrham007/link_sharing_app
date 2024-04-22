import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./DashboardPage/DashboardLayout";
import PreviewPage from "../pages/Preview";
import LinkPage from "../pages/Link";
import ProfilePage from "../pages/Profile";
import PreviewLayout from "./ProtectedLayout";
import ProtectedLayout from "./ProtectedLayout";
import AuthenticationPage from "../pages/Authentication";
import RootLayout from "./RootLayout";
import AuthLayout from "./AuthLayout";
import UserPage from "../pages/User";

const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,

    children: [
      {
        path: "*",
        element: <Navigate to="auth"></Navigate>,
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            index: true,
            element: <AuthenticationPage></AuthenticationPage>,
          },
        ],
      },
      {
        path: "user/:userPrincipal",
        element: <UserPage></UserPage>,
      },
      {
        path: "dashboard",
        element: <ProtectedLayout></ProtectedLayout>,
        children: [
          {
            path: "",
            element: <DashboardLayout></DashboardLayout>,
            children: [
              { path: "links", element: <LinkPage></LinkPage> },
              {
                path: "profile",
                element: <ProfilePage></ProfilePage>,
              },
            ],
          },
          {
            path: "preview",
            element: <PreviewPage></PreviewPage>,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
