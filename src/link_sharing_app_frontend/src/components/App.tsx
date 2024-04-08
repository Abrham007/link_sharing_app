import { Navigate, Route, Routes } from "react-router-dom";
import CreateAccounyPage from "./CreateAccountPage";
import DashboardLayout from "./DashboardPage/DashboardLayout";
import LoginPage from "./LoginPage";
import PreviewPage from "./PreviewPage/PreviewPage";
import HomeLayout from "./HomeLayout";
import CustomLinkPage from "./DashboardPage/CustomLinkPage/CustomLinkPage";
import ProfileDetailsPage from "./DashboardPage/ProfileDetailsPage/ProfileDetailsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout></HomeLayout>}>
          <Route
            index
            element={<Navigate to="/kogin" replace></Navigate>}
          ></Route>
          <Route path="login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="create-account"
            element={<CreateAccounyPage></CreateAccounyPage>}
          ></Route>
        </Route>
        <Route path="dashboard" element={<DashboardLayout></DashboardLayout>}>
          <Route
            index
            element={<Navigate to="/dashboard/links" replace></Navigate>}
          ></Route>
          <Route
            path="links"
            element={<CustomLinkPage></CustomLinkPage>}
          ></Route>
          <Route
            path="profile"
            element={<ProfileDetailsPage></ProfileDetailsPage>}
          ></Route>
          <Route path="preview" element={<PreviewPage></PreviewPage>}></Route>
        </Route>
      </Routes>
    </>
  );
}
