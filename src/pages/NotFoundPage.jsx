import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per tornare alla home

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      {/* Potresti aggiungere un'icona o immagine qui (es. una catena spezzata o una mappa sbagliata) */}
      {/* <img src="/path/to/404-image.svg" alt="Pagina non trovata" className="w-32 h-32 mb-6" /> */}

      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-3">Oops! Pagina Non Trovata</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Sembra che tu abbia preso una scorciatoia sbagliata o che la pagina che cerchi sia stata spostata.
        Niente paura, succede anche ai migliori ciclisti!
      </p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 text-lg"
      >
        Torna alla Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;