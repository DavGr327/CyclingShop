import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Potresti importare qui la libreria per la galleria immagini (es. react-image-gallery)
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css"; // Importa stili galleria

// Dati finti (dovresti recuperarli in base all'ID)
const fakeGetProductById = (id) => {
    const products = [
        { id: 'bc-001', name: 'Bici da Corsa Pro', price: 1999.99, category: 'Bici da Corsa', description: 'Telaio in carbonio leggero, gruppo Shimano Ultegra...', specs: { peso: '7.8 kg', telaio: 'Carbonio HM', cambio: 'Shimano Ultegra 11v' }, images: [{ original: '/images/bici-corsa-1.jpg', thumbnail: '/images/bici-corsa-1-thumb.jpg' }, { original: '/images/bici-corsa-2.jpg', thumbnail: '/images/bici-corsa-2-thumb.jpg' }] },
        { id: 'mtb-002', name: 'Mountain Bike Explorer', price: 899.00, category: 'Mountain Bike', description: 'Perfetta per sentieri sterrati, forcella ammortizzata...', specs: { peso: '13.5 kg', telaio: 'Alluminio 6061', cambio: 'Shimano Deore 10v' }, images: [{ original: '/images/mtb-1.jpg', thumbnail: '/images/mtb-1-thumb.jpg' }] },
         { id: 'ebk-003', name: 'E-Bike Urban Commuter', price: 2450.50, category: 'E-bike', description: 'Motore potente, batteria a lunga durata...', specs: { peso: '22 kg', telaio: 'Alluminio', motore: 'Bosch Performance Line CX' }, images: [{ original: '/images/ebike-1.jpg', thumbnail: '/images/ebike-1-thumb.jpg' }] },
         { id: 'acc-004', name: 'Casco Aero Speed', price: 120.00, category: 'Accessori', description: 'Leggero, aerodinamico e sicuro.', specs: { taglie: 'S, M, L', peso: '250g (M)' }, images: [{ original: '/images/casco-1.jpg', thumbnail: '/images/casco-1-thumb.jpg' }] },
    ];
    return products.find(p => p.id === id);
}


function ProductDetailPage() {
  const { productId } = useParams(); // Ottiene l'ID dall'URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula il recupero del prodotto specifico
    setLoading(true);
    setTimeout(() => {
      const foundProduct = fakeGetProductById(productId); // Usa la funzione finta
      setProduct(foundProduct);
      setLoading(false);
    }, 300); // Simula ritardo fetch
  }, [productId]); // Riesegui quando cambia productId

  if (loading) {
    return <p className="text-center">Caricamento prodotto...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-600">Prodotto non trovato!</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Galleria Immagini */}
        <div>
          {/* Qui userai react-image-gallery o simile */}
          {product.images && product.images.length > 0 ? (
             <img src={product.images[0].original} alt={product.name} className="w-full rounded-lg shadow-md" />
             /* Esempio con ImageGallery:
             <ImageGallery items={product.images} showPlayButton={false} />
             */
          ) : (
            <img src="https://via.placeholder.com/600x400.png?text=Bici" alt={product.name} className="w-full rounded-lg shadow-md" />
          )}
        </div>

        {/* Dettagli Prodotto */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-2xl font-bold text-red-600 mb-6">€ {product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Specifiche Tecniche */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Specifiche Tecniche</h2>
            <ul className="list-disc list-inside space-y-1">
              {product.specs && Object.entries(product.specs).map(([key, value]) => (
                <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
              ))}
            </ul>
          </div>

          {/* Bottone Aggiungi al Carrello (o Prenota Test Ride) */}
          <button className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition duration-300 w-full md:w-auto">
            Aggiungi al Carrello
          </button>
           {/* <button className="ml-4 border border-red-600 text-red-600 px-6 py-3 rounded font-semibold hover:bg-red-50 transition duration-300">
             Prenota Test Ride
           </button> */}
        </div>
      </div>

      {/* Sezione Recensioni Utenti (da implementare) */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recensioni</h2>
        <p className="text-gray-600">Nessuna recensione ancora. Sii il primo!</p>
        {/* Qui andrebbe il form per aggiungere recensioni e la lista delle recensioni */}
      </div>
    </div>
  );
}

export default ProductDetailPage;