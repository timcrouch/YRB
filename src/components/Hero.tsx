import React from 'react';
import { Music } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center justify-center text-yellow-300">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://drive.google.com/uc?export=view&id=1J9u87rHKP311zmNpZ0MjkHEzwQ4FxOtD')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-4 text-shadow-lg">{t.welcome}</h2>
        <p className="text-xl mb-8 text-shadow-md">{t.experienceTexas}</p>
        <div className="flex justify-center items-center space-x-4">
          <Music size={24} className="text-yellow-300" />
          <p className="text-lg text-shadow-sm">{t.liveMusicEveryNight}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;