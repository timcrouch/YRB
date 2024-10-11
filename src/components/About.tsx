import React from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">{t.aboutYellowRose}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Yellow Rose Bar Interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">{t.barDescription}</p>
            <p className="text-lg mb-4">{t.barOffers}</p>
            <div className="flex items-center mt-6">
              <Clock className="text-yellow-500 mr-2" />
              <p className="text-lg font-semibold">{t.openingHours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;