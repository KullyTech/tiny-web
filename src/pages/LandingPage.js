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
        <title>Tiny Miracle - Baby Heartbeat Monitor App for iPhone</title>
        <meta name="description" content="Turn your iPhone into a safe baby heartbeat monitor. No extra devices needed. Listen, record, and share your baby's heartbeat securely." />
        <meta name="keywords" content="baby heartbeat app, fetal doppler app, listen to baby heartbeat iphone, pregnancy app, tiny miracle, baby heartbeat monitor" />
        <link rel="canonical" href="https://tinymiracle.life/" />
        <meta property="og:title" content="Tiny Miracle - Hear Your Baby's Heartbeat" />
        <meta property="og:description" content="Safe, simple, and magical. Listen to your baby's heartbeat using just your iPhone microphone." />
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