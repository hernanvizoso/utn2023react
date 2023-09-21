import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import ProductosPage from "./pages/ProductosPage";
import TiendaPage from "./pages/TiendaPage";
import ConstruyendoPage from "./pages/ConstruyendoPage";


//  import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/tienda" element={<TiendaPage />} />
          <Route path="/construyendo" element={<ConstruyendoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
