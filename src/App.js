// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import FeaturesSection from './components/Featuresection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DataDisplayComponent from './components/DataDisplay';
import GoogleAuth from './components/oauth';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-4xl">
        <HeroSection />
        <FeaturesSection />
        <DataDisplayComponent />
        <GoogleAuth /> {/* Add GoogleAuth component here */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
