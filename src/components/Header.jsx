import React from 'react';
import { Link } from 'react-router-dom'; // Usa Link per la navigazione interna

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md"> {/* Esempio stile */}
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          CyclePro {/* O il nome del tuo negozio */}
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-red-500">Home</Link></li>
          <li><Link to="/catalogo" className="hover:text-red-500">Catalogo</Link></li>
          <li><Link to="/servizi" className="hover:text-red-500">Servizi</Link></li>
          <li><Link to="/chi-siamo" className="hover:text-red-500">Chi Siamo</Link></li>
          <li><Link to="/contatti" className="hover:text-red-500">Contatti</Link></li>
          {/* Aggiungi qui icona carrello, login, ecc. */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;