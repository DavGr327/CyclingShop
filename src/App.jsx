import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'; // Pagina per URL non validi

// Importa qui il tuo file CSS principale se non usi Tailwind o altro
// import './App.css';

function App() {
  return (
    <div className="App flex flex-col min-h-screen"> {/* Esempio con classi Tailwind */}
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8"> {/* Contenuto principale */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          {/* Nota il :productId per il parametro dinamico */}
          <Route path="/prodotto/:productId" element={<ProductDetailPage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Rotta per 404 */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;