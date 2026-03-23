import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Cotizador from "./pages/Cotizador"
import Contacto from "./pages/Contacto";
import FAQ from "./pages/faq";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { APP_ROUTES } from "./constants/routes";

export default function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.COTIZADOR} element={<Cotizador />} />
        <Route path={APP_ROUTES.CONTACTO} element={<Contacto />} />
        <Route path={APP_ROUTES.FAQ} element={<FAQ />} />
        <Route path={APP_ROUTES.ABOUT} element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
