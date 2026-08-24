import { Outlet, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "../../components/navbar";

const Footer = lazy(() => import("../../components/footer"))

export default function MainLayout() {
  const { pathname } = useLocation();
  const hideFooter = ["/donate", "/privacy"].includes(pathname);

  return (
    <div className="bg-bg-dark selection:bg-primary flex min-h-screen flex-col font-sans text-slate-900 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center">
              Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Suspense>
        {!hideFooter && <Footer />}
      </Suspense>
    </div>
  );
}
