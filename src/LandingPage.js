import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css'; // Assuming App.css contains styles for LandingPage

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the location object from react-router-dom

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) { // Use location.hash instead of window.location.hash
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]); // Rerun effect when hash changes (from react-router-dom)


  return (
    <div className="App">
      <header className="hero-section" id="hero">
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <Link to="/">
              <img src="/tiny-logo.png" alt="Tiny Logo" className="navbar-logo" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="#features">Features</a>
            <a href="#stories">Stories</a>
            <Link to="/teams">Teams</Link>
          </div>
          <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="nav-cta">Download</a>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Cherish your Tiny miracle
            </h1>
            <p>Safely listen to, record, and share your baby’s heartbeat from home. No extra devices needed, just you and your phone.</p>
            <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="primary-cta">
              <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor" style={{ marginRight: '10px' }}>
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-54.5-127.1-54.5-127.1zM221.9 51.4c18.4-32.4 65.7-50.5 65.7-50.5s45.7 68.7-26 120.9c-17 12.5-45.8 25.3-68.7 18.4-2.3-42.9 18.9-76.2 29-88.8z" />
              </svg>
              Start Listening Today
            </a>
          </div>
          <div className="hero-image">
            <img src="/timy-png.png" alt="Timy PNG" className="timy-png" />
          </div>
        </div>
      </header>

      <section className="mockup-section" id="features">
        <h2>Tiny using iPhone and AirPods to record baby's <span className="highlight-word">heartbeat</span> then transforming it into a precious shareable <span className="highlight-word">memory</span></h2>
        <div className="first-feature-images">
          <img src="/mockup-face-front.png" alt="Tiny App Mockup Front" className="mockup-image-front" />
          <img src="/mockup-face-diagonal.png" alt="Tiny App Mockup Diagonal" className="mockup-image-diagonal" />
        </div>
      </section>

      <section className="share-feature-section">
        <div className="share-feature-content">
          <h2>Share the <span className="highlight-word">Miracle</span> with Loved Ones</h2>
          <p>Easily share your baby's recorded heartbeats with your partner, no matter where they are. Create lasting memories together.</p>
        </div>
        <div className="second-feature-images">
          <img src="/mockup-mom-dad-same-room.png" alt="Tiny App Mockup Mom Dad Same Room" className="mockup-image-mom-dad" />
        </div>
      </section>

      <main>
        <section className="testimonials-section" id="stories">
          <h2>What Moms Say</h2>
          <div className="testimonial">
            <blockquote>
              "I was nervous at first, wondering if I'd really hear it. But when I found that little heartbeat, the joy was overwhelming. It takes a little patience, but the moment is absolutely magical."
            </blockquote>
            <div className="testimonial-author">
              <cite>- Mia</cite>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tiny. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
