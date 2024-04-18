import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./DashboardPage/DashboardLayout";
import PreviewPage from "./PreviewPage/PreviewPage";
import CustomLinkPage from "./DashboardPage/CustomLinkPage/CustomLinkPage";
import ProfileDetailsPage from "./DashboardPage/ProfileDetailsPage/ProfileDetailsPage";
import PreviewLayout from "./ProtectedLayout";
import ProtectedLayout from "./ProtectedLayout";
import AuthenticationPage from "./AuthenticationPage";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,

    children: [
      {
        path: "*",
        element: <Navigate to="auth/?mode=login"></Navigate>,
      },
      {
        path: "auth",
        element: <AuthenticationPage></AuthenticationPage>,
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
