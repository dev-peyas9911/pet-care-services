import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      { path: "/sevices", Component: Services },
      { path: "/profile", Component: Profile },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
