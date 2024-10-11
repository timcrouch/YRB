import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Events = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showHalloweenInfo, setShowHalloweenInfo] = useState(false);

  const events = [
    { date: '2023-10-31', name: t.halloweenParty, description: t.halloweenDescription },
    { date: '2023-11-23', name: t.thanksgivingFeast, description: t.thanksgivingDescription },
    { date: '2023-12-31', name: t.newYearsEve, description: t.newYearsDescription },
    { date: '2024-03-02', name: t.texasIndependence, description: t.texasIndependenceDescription },
  ];

  const renderHalloweenInfoWindow = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-orange-900 rounded-lg p-8 max-w-md relative border-4 border-purple-700 shadow-2xl">
        <button 
          onClick={() => setShowHalloweenInfo(false)}
          className="absolute top-2 right-2 text-orange-200 hover:text-orange-100"
        >
          <X size={24} />
        </button>
        <h3 className="text-3xl font-bold mb-4 text-orange-200 font-horror animate-wiggle">{t.halloweenParty}</h3>
        <div>
          <p className="text-lg text-orange-100 font-spooky mb-4">{t.halloweenInfoDescription}</p>
          <p className="text-lg text-orange-100 font-spooky mb-4">{t.halloweenTime}</p>
          <p className="text-lg text-orange-100 font-spooky">{t.halloweenDJ}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="events" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">{t.specialEvents}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-400 cursor-pointer transition-transform hover:scale-105"
              onClick={() => {
                if (event.date === '2023-10-31') setShowHalloweenInfo(true);
              }}
            >
              <div className="flex items-center mb-4">
                <Calendar className="text-red-600 mr-2" />
                <p className="text-lg font-semibold">{event.date}</p>
              </div>
              <h3 className={`text-xl font-bold mb-2 text-blue-900 ${event.date === '2023-10-31' ? 'animate-wiggle' : ''}`}>{event.name}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      {showHalloweenInfo && renderHalloweenInfoWindow()}
    </section>
  );
};

export default Events;