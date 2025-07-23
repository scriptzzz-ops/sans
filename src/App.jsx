// App.jsx

import React from 'react';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Statistics from './components/Statistics';
import KeyPeople from './components/KeyPeople';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import NewsGallery from './components/NewsGallery';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <TopBanner />
      <Navigation />
      <MainContent />
      <Statistics />
      <KeyPeople />
      <NewsGallery />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default App;
