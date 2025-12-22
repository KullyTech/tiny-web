import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Experience from '../sections/Experience';
import Features from '../sections/Features';
import Stories from '../sections/Stories';
import CTA from '../sections/CTA';
import '../styles/App.css';

function LandingPage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Features />
      <Stories />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
