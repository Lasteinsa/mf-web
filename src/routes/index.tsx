import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";

const Home = lazy(() => import("../pages/home"));
const GuideLayout = lazy(() => import("../pages/guide"));
const Privacy = lazy(() => import("../pages/privacy"));
const Support = lazy(() => import("../pages/support"));
const ClosedTesting = lazy(() => import("../pages/closed-testing"));
const Donate = lazy(() => import("../pages/donate"));
const Supporters = lazy(() => import("../pages/supporters"));
const Contributors = lazy(() => import("../pages/contributors"));
const UsbDacs = lazy(() => import("../pages/usb-dacs"));

const GuideIndex = lazy(() => import("../pages/guide/guide-index"));
const GettingStarted = lazy(() => import("../pages/guide/getting-started"));
const Customization = lazy(() => import("../pages/guide/customization"));
const LibraryManagement = lazy(
  () => import("../pages/guide/library-management"),
);
const Playback = lazy(() => import("../pages/guide/playback"));
const AudioEngine = lazy(() => import("../pages/guide/audio-engine"));
const Lyrics = lazy(() => import("../pages/guide/lyrics"));
const Plugins = lazy(() => import("../pages/guide/plugins"));

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "guide",
          element: <GuideLayout />,
          children: [
            { index: true, element: <GuideIndex /> },
            { path: "getting-started", element: <GettingStarted /> },
            { path: "customization", element: <Customization /> },
            { path: "library-management", element: <LibraryManagement /> },
            { path: "playback", element: <Playback /> },
            { path: "audio-engine", element: <AudioEngine /> },
            { path: "lyrics", element: <Lyrics /> },
            { path: "plugins", element: <Plugins /> },
          ],
        },
        { path: "privacy", element: <Privacy /> },
        { path: "support", element: <Support /> },
        { path: "closed-testing", element: <ClosedTesting /> },
        { path: "donate", element: <Donate /> },
        { path: "supporters", element: <Supporters /> },
        { path: "contributors", element: <Contributors /> },
        { path: "usb-dacs", element: <UsbDacs /> },
      ],
    },
  ]);
  return routes;
}
