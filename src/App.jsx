import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import MenusPage from "./pages/MenusPage";
import SaveursPage from "./pages/SaveursPage";
import AvocatCoriandrePage from "./pages/AvocatCoriandrePage";
import MenuDetailsPage from "./pages/MenuDetailsPage";
import SansCaliforniaPage from "./pages/SansCaliforniaPage";
import PrixTotalPage from "./pages/PrixTotalPage";
import ExtremesPage from "./pages/ExtremesPage";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Header />

      <main className="max-w-5xl mx-auto p-4 relative z-10">
        <Routes>
          <Route path="/" element={<MenusPage />} />
          <Route path="/saveurs" element={<SaveursPage />} />
          <Route path="/avocat-coriandre" element={<AvocatCoriandrePage />} />
          <Route path="/menu/:id" element={<MenuDetailsPage />} />
          <Route path="/sans-california" element={<SansCaliforniaPage />} />
          <Route path="/prix-total" element={<PrixTotalPage />} />
          <Route path="/extremes" element={<ExtremesPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
