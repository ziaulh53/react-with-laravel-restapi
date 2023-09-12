import { createBrowserRouter } from "react-router-dom";
import { Signup, Login, NotFound, Users, Dashboard } from "../pages";
import GuestLayout from "../components/GuestLayout";
import AuthLayout from "../components/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/app",
    Component: GuestLayout,
    children: [
      {
        path: "/app",
        Component: Dashboard,
      },
      {
        path: "/app/users",
        Component: Users,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
