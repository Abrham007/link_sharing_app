import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccounyPage from "./CreateAccountPage";
import DashboardLayout from "./DashboardPage/DashboardLayout";
import LoginPage from "./LoginPage";
import PreviewPage from "./PreviewPage/PreviewPage";
import RootLayout from "./RootLayout";
import CustomLinkPage from "./DashboardPage/CustomLinkPage/CustomLinkPage";
import ProfileDetailsPage from "./DashboardPage/ProfileDetailsPage/ProfileDetailsPage";
import PreviewLayout from "./ProtectedLayout";
import ProtectedLayout from "./ProtectedLayout";
import AuthLayout from "./AuthLayout";

const router = createBrowserRouter([
  {
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
          { path: "", element: <LoginPage></LoginPage> },
          {
            path: "create-account",
            element: <CreateAccounyPage></CreateAccounyPage>,
          },
        ],
      },
      {
        path: "/dashboard",
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
