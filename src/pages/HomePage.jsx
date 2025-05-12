import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  useEffect(() => {
    // Add fade-in animation to elements with animate class
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach((element) => {
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2539400/pexels-photo-2539400.jpeg"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              COOL
              <span className="text-red-500"> E-BIKES</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Futuristic electric bikes with innovative energy technology.
              Experience the perfect blend of style and performance.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/catalogo"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Discover Now
              </Link>
              <Link 
                to="/contatti"
                className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex justify-start gap-12 text-gray-300 animate">
              <div>
                <span className="text-4xl font-bold">2h</span>
                <p className="text-sm">Battery Life</p>
              </div>
              <div>
                <span className="text-4xl font-bold">100km/h</span>
                <p className="text-sm">Top Speed</p>
              </div>
              <div>
                <span className="text-4xl font-bold">75kg</span>
                <p className="text-sm">Weight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate">
            EXPERIENCE THE FUN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-black rounded-lg transform hover:-translate-y-2 transition-all duration-300 animate"
              >
                <div className="text-red-500 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "Quick and secure delivery right to your doorstep within 24 hours."
  },
  {
    icon: "🛠️",
    title: "Free Support",
    description: "24/7 technical support and maintenance for your e-bike needs."
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    description: "Hassle-free return policy with full money-back guarantee."
  }
];

export default HomePage;