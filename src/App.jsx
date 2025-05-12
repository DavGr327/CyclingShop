import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import { FaBicycle, FaTools, FaUsers, FaPhone } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <Element name="home">
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/2539400/pexels-photo-2539400.jpeg"
              alt="Background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-7xl font-bold mb-6 leading-tight">
                COOL
                <span className="text-red-500"> E-BIKES</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Futuristic electric bikes with innovative energy technology.
                Experience the perfect blend of style and performance.
              </p>
              <div className="flex gap-6">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  Discover Now
                </button>
                <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Catalog Section */}
      <Element name="catalogo">
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Our Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-black rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <span className="text-red-500 font-bold text-xl">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Services Section */}
      <Element name="servizi">
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex items-center gap-4 mb-4">
                        {service.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <button className="text-white hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* About Section */}
      <Element name="chi-siamo">
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <img
                  src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg"
                  alt="About Us"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div data-aos="fade-left">
                <h2 className="text-4xl font-bold mb-6">About Us</h2>
                <p className="text-gray-400 mb-6">
                  We are passionate about delivering the best electric bikes to our customers.
                  With years of experience and dedication to quality, we ensure that every
                  bike meets the highest standards of performance and design.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contatti">
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6" data-aos="fade-up">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-zinc-900 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-zinc-900 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-zinc-900 rounded-lg px-4 py-3 text-white"
                  ></textarea>
                </div>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </Element>

      <Footer />
    </div>
  );
}

const products = [
  {
    name: "Urban Explorer E-Bike",
    description: "Perfect for city commuting with style",
    price: "€2,499",
    image: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg"
  },
  {
    name: "Mountain Master E-Bike",
    description: "Conquer any terrain with ease",
    price: "€3,299",
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg"
  },
  {
    name: "Speed Demon E-Bike",
    description: "For the thrill-seekers and racers",
    price: "€4,199",
    image: "https://images.pexels.com/photos/5465247/pexels-photo-5465247.jpeg"
  }
];

const services = [
  {
    title: "Automatic - AutoGuard",
    description: "Next generation fire protection system",
    image: "https://images.pexels.com/photos/3845162/pexels-photo-3845162.jpeg",
    tags: ["Software", "Monitoring", "Hardware", "Mechanics", "Automatization"]
  },
  {
    title: "Huddle - Inventas",
    description: "Critical settings flow for operations",
    image: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg",
    tags: ["Designing", "Research", "Product Development"]
  }
];

export default App;