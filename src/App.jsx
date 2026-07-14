import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Guide from "./pages/Guide";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-dark text-slate-50 font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
