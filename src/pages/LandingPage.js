import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Experience from '../sections/Experience';
import Features from '../sections/Features';
import Stories from '../sections/Stories';
import CTA from '../sections/CTA';
import FAQ from '../sections/FAQ';
import '../styles/App.css';

function LandingPage() {
  return (
    <div className="App">
      <Helmet prioritizeSeoTags>
        <title>Tiny - Baby Heartbeat Listener | Tiny iOS App</title>
        <meta name="description" content="The safest tiny iOS app to listen to baby heartbeat. Tiny is a baby heartbeat listener that requires no extra device, just your iPhone." />
        <meta name="keywords" content="baby heartbeat listener, tiny app, tiny ios app, app to listen baby heartbeat, baby heartbeat app, fetal doppler app, listen to baby heartbeat iphone, pregnancy app, tiny" />
        <link rel="canonical" href="https://tinymiracle.life/" />
        <meta property="og:title" content="Tiny - Baby Heartbeat Listener & Tiny iOS App" />
        <meta property="og:description" content="The safest tiny iOS app to listen to baby heartbeat. No gels, no extra devices—just your iPhone." />
        <meta property="og:image" content="https://tinymiracle.life/assets/brand/og-image.png" />
        <meta property="og:url" content="https://tinymiracle.life/" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <Hero />
      <Experience />
      <Features />
      <Stories />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;