import React, { useState } from 'react';
import { Menu, X, Beer, Music, Calendar, Camera, PhoneCall, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const navItems = [
    { href: "#about", text: translations[language].about, icon: Beer },
    { href: "#events", text: translations[language].events, icon: Calendar },
    { href: "#live-music", text: translations[language].liveMusic, icon: Music },
    { href: "#menu", text: translations[language].menu, icon: Beer },
    { href: "#gallery", text: translations[language].gallery, icon: Camera },
    { href: "#contact", text: translations[language].contact, icon: PhoneCall },
  ];

  return (
    <header className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-4 px-6 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Beer size={36} className="text-white mr-2" />
          <span className="sr-only">Yellow Rose Bar</span>
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center hover:bg-white hover:text-red-500 px-3 py-2 rounded-full transition-colors duration-300"
            >
              <item.icon className="mr-2" size={20} />
              <span>{item.text}</span>
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-white text-red-500 px-3 py-2 rounded-full transition-colors duration-300 hover:bg-red-100"
          >
            <Globe size={20} className="mr-2" />
            <span>{language === 'en' ? 'EN' : 'PT'}</span>
          </button>
        </nav>
        <button 
          className="md:hidden bg-white text-red-500 p-2 rounded-full" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <nav className="md:hidden mt-16 bg-white rounded-lg p-4 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto absolute right-4 left-4 z-50">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center text-red-500 hover:bg-red-100 px-3 py-4 rounded-lg transition-colors duration-300 mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="mr-4 flex-shrink-0" size={24} />
                <span className="text-lg font-medium">{item.text}</span>
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center w-full text-red-500 hover:bg-red-100 px-3 py-4 rounded-lg transition-colors duration-300 mt-4"
            >
              <Globe size={24} className="mr-4 flex-shrink-0" />
              <span className="text-lg font-medium">{language === 'en' ? 'English' : 'Português'}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;