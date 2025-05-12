import React from 'react';

function HomePage() {
  return (
    <div>
      {/* Sezione Hero */}
      <section className="text-center py-20 bg-gray-100 rounded-lg mb-10">
        <h1 className="text-4xl font-bold mb-4">Pedala verso nuove avventure</h1>
        <p className="text-lg text-gray-700 mb-6">Scopri la nostra collezione di bici da corsa, MTB e e-bike.</p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300">
          Scopri la Collezione
        </button>
        {/* Qui potresti aggiungere un link tipo <Link to="/catalogo"> */}
      </section>

      {/* Sezione Novità / Prodotti in evidenza */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Novità e Offerte</h2>
        {/* Qui inserirai una griglia o uno slider di ProductCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Esempio statico - da sostituire con dati reali */}
          <p className="text-center col-span-full">Caricamento prodotti...</p>
          {/* <ProductCard product={...} /> */}
          {/* <ProductCard product={...} /> */}
          {/* <ProductCard product={...} /> */}
        </div>
      </section>

      {/* Altre sezioni... */}
    </div>
  );
}

export default HomePage;