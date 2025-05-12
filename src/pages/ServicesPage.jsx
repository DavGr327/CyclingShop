import React from 'react';
import { Link } from 'react-router-dom';

// Potresti creare un componente CardServizio riutilizzabile
function ServiceCard({ title, description, icon }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            {/* Icona (puoi usare librerie come react-icons) */}
            {/* <div className="text-4xl text-red-600 mb-4">{icon}</div> */}
             <div className="text-3xl text-red-600 mb-4">⚙️</div> {/* Placeholder icona */}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
             {/* <Link to="/contatti" className="text-red-600 hover:underline mt-4 inline-block">Scopri di più</Link> */}
        </div>
    );
}

function ServicesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Assistenza e Servizi Dedicati</h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Da CyclePro, la tua passione è la nostra priorità. Offriamo una gamma completa di servizi per mantenere
        la tua bicicletta in perfette condizioni e migliorare la tua esperienza di guida, grazie alla nostra officina specializzata
        e al nostro personale esperto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Officina Specializzata"
          description="Manutenzione ordinaria e straordinaria, riparazioni complesse, sostituzione componenti. Usiamo solo ricambi di alta qualità."
          // icon={<FaWrench />} // Esempio con react-icons
        />
        <ServiceCard
          title="Bike Fitting Professionale"
          description="Ottimizza la tua posizione in sella per comfort e performance. Utilizziamo tecniche avanzate per adattare la bici al tuo corpo."
        />
        <ServiceCard
          title="Test Ride Gratuiti"
          description="Prova la tua prossima bici prima di acquistarla! Offriamo la possibilità di testare diversi modelli direttamente su strada o sentiero."
        />
         <ServiceCard
          title="Assemblaggio e Personalizzazione"
          description="Hai acquistato online o vuoi creare la bici dei tuoi sogni? Ci occupiamo dell'assemblaggio perfetto e della personalizzazione dei componenti."
        />
         <ServiceCard
          title="Riparazioni Rapide"
          description="Forature, regolazioni cambio/freni al volo? Offriamo un servizio rapido per le piccole emergenze, per rimetterti in sella il prima possibile."
        />
        <ServiceCard
          title="Consulenza Esperta"
          description="Non sai quale bici scegliere o quali accessori fanno per te? Il nostro team è a disposizione per consigliarti al meglio."
        />
      </div>

      <div className="text-center mt-16 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Hai Bisogno di Assistenza?</h2>
          <p className="text-gray-700 mb-6">
            Prenota un appuntamento in officina o passa a trovarci per una consulenza.
          </p>
          <Link
            to="/contatti"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
          >
            Contattaci Ora
        </Link>
      </div>
    </div>
  );
}

export default ServicesPage;