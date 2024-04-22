import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./DashboardPage/DashboardLayout";
import PreviewPage from "./PreviewPage";
import CustomLinkPage from "./DashboardPage/CustomLinkPage/CustomLinkPage";
import ProfileDetailsPage from "./DashboardPage/ProfileDetailsPage/ProfileDetailsPage";
import PreviewLayout from "./ProtectedLayout";
import ProtectedLayout from "./ProtectedLayout";
import AuthenticationPage from "./AuthenticationPage";
import RootLayout from "./RootLayout";
import AuthLayout from "./AuthLayout";
import UserPage from "./UserPage";

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
              { path: "links", element: <CustomLinkPage></CustomLinkPage> },
              {
                path: "profile",
                element: <ProfileDetailsPage></ProfileDetailsPage>,
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
