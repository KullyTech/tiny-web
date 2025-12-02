import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">tiny</div>
          <button type="button" className="nav-cta">Download</button>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hear Your Baby's Heartbeat, Anytime, Anywhere.</h1>
            <p>Experience an intimate connection with your baby through crystal-clear audio of their heartbeat. Safe, secure, and ready whenever you are.</p>
            <button type="button" className="primary-cta">Try Tiny - Download for iOS</button>
          </div>
          <div className="hero-image">
            {/* Placeholder for iPhone with app UI */}
            <img src="https://storage.googleapis.com/gemini-repo-pdp/gemini-tool-aot/img/240502_140029.352_0.png" alt="App on iPhone" />
          </div>
        </div>
      </header>

      <main>
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

        <section className="testimonials-section">
          <h2>Loved by Parents Like You</h2>
          <div className="testimonial">
            <blockquote>
              "Using Tiny has been such a magical experience. Hearing our baby's heartbeat at home brought us so much peace and joy. It's a must-have for any expectant parent."
            </blockquote>
            <div className="testimonial-author">
              {/* Placeholder for author image */}
              <img src="https://storage.googleapis.com/gemini-repo-pdp/gemini-tool-aot/img/240502_140029.352_3.png" alt="Parent" />
              <cite>- Sarah & Tom</cite>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <h2>Start Your Journey Today</h2>
          <p>Download Tiny and begin a new chapter of connection with your baby.</p>
          <button type="button" className="app-store-cta">
            {/* Placeholder for App Store badge */}
            <img src="https://storage.googleapis.com/gemini-repo-pdp/gemini-tool-aot/img/240502_140029.352_4.png" alt="Download on the App Store" />
          </button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tiny. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
