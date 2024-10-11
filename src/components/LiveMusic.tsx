import React, { useState } from 'react';
import { Music, Mic, Headphones, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const LiveMusic = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showOpenMicInfo, setShowOpenMicInfo] = useState(false);
  const [showWednesdayInfo, setShowWednesdayInfo] = useState(false);
  const [showThursdayInfo, setShowThursdayInfo] = useState(false);
  const [showFridayInfo, setShowFridayInfo] = useState(false);
  const [showSaturdayInfo, setShowSaturdayInfo] = useState(false);

  const schedule = [
    { day: 'tuesday', event: 'openMicNight', time: '11 PM - 1 AM', icon: Mic },
    { day: 'wednesday', event: 'liveMusicians', time: '11 PM - 1 AM', icon: Music },
    { day: 'thursday', event: 'liveMusicians', time: '11 PM - 1 AM', icon: Music },
    { day: 'friday', event: 'djNight', time: 'Midnight - 4 AM', icon: Headphones },
    { day: 'saturday', event: 'liveMusicians', time: '11 PM - 1 AM', icon: Music },
  ];

  const renderInfoWindow = (title, description, onClose) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold mb-4 text-blue-900">{title}</h3>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="live-music" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">{t.liveMusicSchedule}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg shadow-md p-6 border-l-4 border-yellow-400 cursor-pointer transition-transform hover:scale-105"
              onClick={() => {
                if (item.day === 'tuesday') setShowOpenMicInfo(true);
                if (item.day === 'wednesday') setShowWednesdayInfo(true);
                if (item.day === 'thursday') setShowThursdayInfo(true);
                if (item.day === 'friday') setShowFridayInfo(true);
                if (item.day === 'saturday') setShowSaturdayInfo(true);
              }}
            >
              <div className="flex items-center mb-4">
                <item.icon className="text-red-600 mr-2" />
                <h3 className="text-xl font-bold text-blue-900">{t[item.day]}</h3>
              </div>
              <p className="text-lg font-semibold mb-2">{t[item.event]}</p>
              <p className="text-gray-600">{item.time}</p>
            </div>
          ))}
        </div>
      </div>

      {showOpenMicInfo && renderInfoWindow(
        t.openMicNight,
        t.openMicDescription,
        () => setShowOpenMicInfo(false)
      )}

      {showWednesdayInfo && renderInfoWindow(
        t.wednesdayMusicianTitle,
        t.wednesdayMusicianDescription,
        () => setShowWednesdayInfo(false)
      )}

      {showThursdayInfo && renderInfoWindow(
        t.thursdayMusicianTitle,
        t.thursdayMusicianDescription,
        () => setShowThursdayInfo(false)
      )}

      {showFridayInfo && renderInfoWindow(
        t.fridayDJTitle,
        t.fridayDJDescription,
        () => setShowFridayInfo(false)
      )}

      {showSaturdayInfo && renderInfoWindow(
        t.saturdayMusicianTitle,
        t.saturdayMusicianDescription,
        () => setShowSaturdayInfo(false)
      )}
    </section>
  );
};

export default LiveMusic;