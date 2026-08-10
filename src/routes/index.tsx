import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";

const Home = lazy(() => import("../pages/home"));
const Guide = lazy(() => import("../pages/guide"));
const Privacy = lazy(() => import("../pages/privacy"));
const Support = lazy(() => import("../pages/support"));
const ClosedTesting = lazy(() => import("../pages/closed-testing"));
const Donate = lazy(() => import("../pages/donate"));

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "guide", element: <Guide /> },
        { path: "privacy", element: <Privacy /> },
        { path: "support", element: <Support /> },
        { path: "closed-testing", element: <ClosedTesting /> },
        { path: "donate", element: <Donate /> },
      ],
    },
  ]);
  return routes;
}
