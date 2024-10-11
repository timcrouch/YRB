import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import LiveMusic from './components/LiveMusic';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InstagramFeed from './components/InstagramFeed';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main>
          <Hero />
          <About />
          <Events />
          <LiveMusic />
          <Menu />
          <Gallery />
          <InstagramFeed />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;