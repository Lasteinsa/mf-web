import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Privacy from "./pages/Privacy";

import Footer from "./components/Footer";
import Support from "./pages/Support";
import ClosedTesting from "./pages/ClosedTesting";
import Donate from "./pages/Donate";

function AppContent() {
  const { pathname } = useLocation();
  const hideFooter = pathname === "/donate";

  return (
    <div className="min-h-screen bg-bg-dark text-slate-50 font-sans selection:bg-primary selection:text-black flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/closed-testing" element={<ClosedTesting />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
