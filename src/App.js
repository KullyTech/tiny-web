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
            <img src="/tiny-logo.png" alt="Tiny Logo" className="navbar-logo" />
          </div>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#mia">Mia</a>
          </div>
          <button type="button" className="nav-cta">Download</button>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hear Your Baby's Heartbeat, Anytime, Anywhere.</h1>
            <p>Experience an intimate connection with your baby through crystal-clear audio of their heartbeat. Safe, secure, and ready whenever you are.</p>
            <button type="button" className="primary-cta">Try Tiny - Download for iOS</button>
          </div>
          <div className="hero-image">
            <img src="/tiny-logo.png" alt="Tiny Logo" className="tiny-logo" />
            <img src="/timy-png.png" alt="Timy PNG" className="timy-png" />
          </div>
        </div>
      </header>

      <main>
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="features-section">
          <div className="feature">
            <div className="feature-text">
              <h2>Crystal-Clear Sound</h2>
              <p>Our advanced technology provides a high-fidelity audio experience, allowing you to hear every precious beat with clarity.</p>
            </div>
            <div className="feature-visual">
              {/* Placeholder for waveform visual */}
              <img src="https://storage.googleapis.com/gemini-repo-pdp/gemini-tool-aot/img/240502_140029.352_1.png" alt="Sound waveform" />
            </div>
          </div>
          <div className="feature reverse">
            <div className="feature-text">
              <h2>Safe, Secure & Private</h2>
              <p>Your moments are yours alone mom. Tiny is designed with the utmost respect for your privacy and security, ensuring a worry-free experience.</p>
            </div>
            <div className="feature-visual">
              {/* Placeholder for security icon */}
              <img src="https://storage.googleapis.com/gemini-repo-pdp/gemini-tool-aot/img/240502_140029.352_2.png" alt="Security icon" />
            </div>
          </div>
        </section>

=======
>>>>>>> 222d570 (refactor: Update UI, remove sections, and fix styling issues)
        <section className="testimonials-section">
=======
        <section className="testimonials-section" id="mia">
<<<<<<< HEAD
>>>>>>> 25310a4 (feat: Enhance navbar with scroll effect and navigation; update Mia section style)
          <h2>Mia</h2>
=======
          <h2>What Moms Say</h2>
>>>>>>> a2b60ab (fix: Improve hero layout visibility and update testimonial structure)
          <div className="testimonial">
            <blockquote>
              "perasaanya pas nyoba aplikasi nya deg-degan sebenernya karena jadi ikutan penasaran juga bakal bisa kedengeran ngga ya? dan pas kedengeran happy sih walaupun nyari nya ngga gampang"
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
