import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6 mt-auto"> {/* mt-auto lo spinge in basso */}
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} CyclePro. Tutti i diritti riservati.</p>
        {/* Aggiungi link social, contatti rapidi, ecc. */}
        <div className="mt-2">
          <a href="#" className="px-2 hover:text-white">Privacy Policy</a>
          <a href="#" className="px-2 hover:text-white">Termini di Servizio</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;