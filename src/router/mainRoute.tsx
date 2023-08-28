import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingPage from "../pages/auth/LandingPage";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import MainLayout from "../components/common/MainLayout";
import HomeScreen from "../pages/screen/HomeScreen";
import ViewScreen from "../pages/screen/ViewScreen";
import ErrorPage from "../error/Error";
import CreateTask from "../pages/screen/CreateTask";
import AdminSignin from "../pages/admin/AdminSignin";
import AdminSignup from "../pages/admin/AdminSignup";
import AdminView from "../pages/admin/AdminView";
import AdminScreen from "../pages/admin/AdminScreen";
import AdminLayout from "../components/common/AdminLayout";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminTasks from "../pages/admin/AdminTasks";
import AdminProgress from "../pages/admin/AdminProgress";
import Ask from "../pages/auth/Ask";
import ViewProgress from "../pages/screen/ViewProgress";
import ViewTasks from "../pages/screen/ViewTasks";
// import UserLayOut from "../components/common/UserLayOut";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/ask",
    element: <Ask/>
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin/signin",
    element: <AdminSignin />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignup />,
  },
  {
    path: "/access",
    element: (
      // <PrivateRoute>
      <MainLayout />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/access/home",
        element: <HomeScreen />,
      },
      {
        path: "/access/view",
        element: <ViewScreen />,
      },
      {
        path: "/access/create",
        element: <CreateTask />,
      },
      {
        path: "/access/progress",
        element: <ViewProgress/>,
      },
      {
        path: "/access/task",
        element: <ViewTasks/>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      // </AdminRoute>
    ),
    children: [
      {
        path: "/admin/home",
        element: <AdminScreen />,
      },
      {
        path: "/admin/users",
        element: <AdminView />,
      },
      {
        path: "/admin/task",
        element: <AdminTasks />,
      },
      {
        path: "/admin/progress",
        element: <AdminProgress />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
