import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function MainLayout() {
  const { pathname } = useLocation();
  const hideFooter = pathname === "/donate";

  return (
    <div className="bg-bg-dark selection:bg-primary flex min-h-screen flex-col font-sans text-slate-50 selection:text-black">
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
      {!hideFooter && <Footer />}
    </div>
  );
}
