import React from 'react';
import { Link } from 'react-router-dom';

// Riceve i dati del prodotto come props
function ProductCard({ product }) {
  // Immagine placeholder se non c'è l'immagine reale
  const imageUrl = product.imageUrl || 'https://via.placeholder.com/300x200.png?text=Bici';

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/prodotto/${product.id}`}>
        <img src={imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.category || 'Categoria'}</p>
          <p className="text-xl font-bold text-red-600">{product.price ? `€ ${product.price.toFixed(2)}` : 'Prezzo non disponibile'}</p>
        </div>
      </Link>
      {/* Potresti aggiungere un bottone "Aggiungi al carrello" qui */}
      {/* <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 m-4">
        Aggiungi al carrello
      </button> */}
    </div>
  );
}

export default ProductCard;