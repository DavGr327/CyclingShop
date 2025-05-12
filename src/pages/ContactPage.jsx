import React, { useState } from 'react';

function ContactPage() {
  // Stato semplice per il form (potresti usare librerie come react-hook-form)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui andrà la logica di invio (es. fetch a un endpoint o servizio terzo)
    console.log('Dati form inviati:', formData);
    alert('Grazie per averci contattato! Ti risponderemo presto.');
    // Reset form (opzionale)
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Mettiti in Contatto</h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Hai domande sui nostri prodotti, hai bisogno di assistenza o vuoi prenotare un servizio?
        Compila il form qui sotto o usa i nostri contatti diretti. Saremo felici di aiutarti!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Colonna Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Invia un Messaggio</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Oggetto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
              >
                Invia Messaggio
              </button>
            </div>
          </form>
        </div>

        {/* Colonna Info Contatto e Mappa */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Informazioni di Contatto</h2>
            <address className="not-italic space-y-3 text-gray-700">
              <p>
                <strong>Indirizzo:</strong><br />
                Via Delle Ruote, 123 <br />
                00100 Città, Italia <br/>
                {/* Link a Google Maps */}
                <a href="#" className="text-red-600 hover:underline">Visualizza su Google Maps</a>
              </p>
              <p><strong>Telefono:</strong> <a href="tel:+390123456789" className="text-red-600 hover:underline">+39 012 345 6789</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@cyclepro.example" className="text-red-600 hover:underline">info@cyclepro.example</a></p>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Orari di Apertura</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Lunedì - Venerdì:</strong> 09:00 - 13:00 / 15:30 - 19:30</li>
              <li><strong>Sabato:</strong> 09:00 - 13:00</li>
              <li><strong>Domenica:</strong> Chiuso</li>
            </ul>
          </div>

          {/* Placeholder per la mappa */}
          <div>
             <h2 className="text-2xl font-semibold mb-4">Dove Siamo</h2>
             <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center text-gray-500">
                Mappa (es. Google Maps Embed)
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;