import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
// import { useProductFilters } from '../hooks/useProductFilters'; // Esempio custom hook

// Dati finti per iniziare (mettili in src/data/products.js se diventano tanti)
const fakeProducts = [
  { id: 'bc-001', name: 'Bici da Corsa Pro', price: 1999.99, category: 'Bici da Corsa', imageUrl: '/images/bici-corsa-1.jpg' },
  { id: 'mtb-002', name: 'Mountain Bike Explorer', price: 899.00, category: 'Mountain Bike', imageUrl: '/images/mtb-1.jpg' },
  { id: 'ebk-003', name: 'E-Bike Urban Commuter', price: 2450.50, category: 'E-bike', imageUrl: '/images/ebike-1.jpg' },
  { id: 'acc-004', name: 'Casco Aero Speed', price: 120.00, category: 'Accessori', imageUrl: '/images/casco-1.jpg' },
  // Aggiungi altri prodotti...
];

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Qui potresti usare state per filtri: [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    // Simula il caricamento dati (sostituisci con fetch reale o da json-server)
    setTimeout(() => {
      setProducts(fakeProducts);
      setLoading(false);
    }, 500); // Simula un piccolo ritardo
  }, []);

  // Qui logica per applicare i filtri ai 'products' prima del map

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Catalogo Prodotti</h1>

      {/* Area Filtri - Implementa i componenti filtro */}
      <div className="mb-8 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Filtra per:</h2>
        {/* Esempi di filtri (da rendere interattivi) */}
        <div className="flex flex-wrap gap-4">
          <select className="p-2 border rounded">
            <option value="all">Tutte le Categorie</option>
            <option value="corsa">Bici da Corsa</option>
            <option value="mtb">Mountain Bike</option>
            <option value="ebike">E-bike</option>
            <option value="accessori">Accessori</option>
          </select>
          <select className="p-2 border rounded">
            <option value="all">Qualsiasi Marca</option>
            {/* Aggiungi marche */}
          </select>
          {/* Aggiungi filtri per prezzo, taglia, ecc. */}
        </div>
      </div>

      {/* Griglia Prodotti */}
      {loading ? (
        <p className="text-center">Caricamento prodotti...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center">Nessun prodotto trovato.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CatalogPage;