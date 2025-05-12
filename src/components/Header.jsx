import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-4' : 'bg-transparent py-6'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer">
            CyclePro
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="home" smooth={true} className="text-white hover:text-red-500 cursor-pointer transition-colors">
              Home
            </Link>
            <Link to="catalogo" smooth={true} className="text-white hover:text-red-500 cursor-pointer transition-colors">
              Catalog
            </Link>
            <Link to="servizi" smooth={true} className="text-white hover:text-red-500 cursor-pointer transition-colors">
              Services
            </Link>
            <Link to="chi-siamo" smooth={true} className="text-white hover:text-red-500 cursor-pointer transition-colors">
              About
            </Link>
            <Link to="contatti" smooth={true} className="text-white hover:text-red-500 cursor-pointer transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;