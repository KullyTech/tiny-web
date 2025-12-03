import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="App">
      <header className="hero-section" id="hero">
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <img src="/app-icon.png" alt="Tiny Logo" className="navbar-logo" />
          </div>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#mia">Stories</a>
          </div>
          <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="nav-cta">Download</a>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Bond with Your Baby, One Heartbeat at a Time.
            </h1>
            <p>Safely listen to, record, and share your baby’s heartbeat from home. No extra devices needed—just you and your phone.</p>
            <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="primary-cta">
              <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor" style={{marginRight: '10px'}}>
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-54.5-127.1-54.5-127.1zM221.9 51.4c18.4-32.4 65.7-50.5 65.7-50.5s45.7 68.7-26 120.9c-17 12.5-45.8 25.3-68.7 18.4-2.3-42.9 18.9-76.2 29-88.8z"/>
              </svg>
              Start Listening Today
            </a>
          </div>
          <div className="hero-image">
            <img src="/tiny-logo.png" alt="Tiny Logo" className="tiny-logo" />
            <img src="/timy-png.png" alt="Timy PNG" className="timy-png" />
          </div>
        </div>
      </header>

      <main>
        <section className="testimonials-section" id="mia">
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
      </footer>
    </div>
  );
}

export default App;
