import React from 'react';

function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-10">La Nostra Storia</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Passione su Due Ruote</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Benvenuti a CyclePro! Non siamo solo un negozio, siamo un punto di ritrovo per tutti gli amanti delle biciclette.
            La nostra avventura è iniziata nel [Anno di fondazione] dalla passione condivisa di un gruppo di amici ciclisti,
            determinati a creare un luogo dove competenza tecnica e amore per il ciclismo si incontrano.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Crediamo che la bicicletta sia molto più di un mezzo di trasporto: è libertà, avventura, benessere e uno stile di vita.
            Il nostro obiettivo è aiutarti a trovare la compagna perfetta per le tue pedalate, che tu sia un professionista
            in cerca della performance, un esploratore di sentieri sterrati o un ciclista urbano.
          </p>
        </div>
        <div>
          {/* Placeholder per un'immagine del negozio o del team */}
          <img
            src="https://via.placeholder.com/500x350.png?text=Il+Nostro+Negozio"
            alt="Il negozio CyclePro"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Il Nostro Team</h2>
        <p className="text-gray-700 leading-relaxed text-center mb-6 max-w-2xl mx-auto">
          Il cuore di CyclePro è il nostro team di esperti. Meccanici certificati, ex-atleti e consulenti appassionati
          sono pronti a condividere la loro conoscenza e ad assisterti in ogni fase, dalla scelta della bici alla manutenzione.
        </p>
        {/* Qui potresti mappare una lista di membri del team con foto e breve bio */}
        <div className="flex justify-center space-x-4">
          {/* Esempio membro team */}
          <div className="text-center">
             <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-500">Foto</div>
             <p className="font-semibold">Nome Membro</p>
             <p className="text-sm text-gray-600">Ruolo</p>
          </div>
           <div className="text-center">
             <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-500">Foto</div>
             <p className="font-semibold">Altro Membro</p>
             <p className="text-sm text-gray-600">Ruolo</p>
          </div>
        </div>
      </section>

       <section className="text-center bg-gray-100 p-8 rounded-lg">
         <h2 className="text-2xl font-semibold mb-3">I Nostri Valori</h2>
         <p className="text-gray-700 max-w-xl mx-auto">
            Qualità, Affidabilità, Comunità e Passione sono i pilastri su cui costruiamo ogni giorno il nostro lavoro.
         </p>
       </section>
    </div>
  );
}

export default AboutPage;