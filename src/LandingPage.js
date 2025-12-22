import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.feature-row, .testimonial-card, .cta-content');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src="/tiny-logo.png" alt="Tiny Logo" style={{ height: '32px', width: 'auto' }} />
          </Link>
        </div>
        <div className="nav-links">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', color: 'inherit' }}>Home</button>
          <a href="#features">Features</a>
          <a href="#stories">Stories</a>
          <Link to="/teams">Team</Link>
        </div>
        <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="nav-cta">
          Try Beta <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </nav>

      <header className="hero-section">
        <div className="hero-orb"></div>
        <div className="hero-orb-2"></div>

        <div className="container hero-content">
          <div className="hero-text animate-in">
            <h1><span className="text-gradient">Listen to your baby's heartbeat</span> with just your iPhone</h1>
            <p className="hero-subtitle">
              Tiny lets you listen to your baby's heartbeat using just your iPhone. No extra equipment needed—safe, simple, and always with you.
            </p>
            <div className="hero-cta-group">
              <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="app-store-badge">
                <svg className="badge-icon" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                </svg>
                <div className="badge-text">
                  <span className="badge-small">Download on</span>
                  <span className="badge-large">TestFlight</span>
                </div>
              </a>
              <span style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>Requires iOS 26+</span>
            </div>
          </div>

          <div className="hero-visual animate-in delay-200">
            <div className="phone-mockup">
              <div className="demo-video-wrapper" style={{ height: '100%', position: 'relative' }}>
                <video
                  className="demo-video"
                  src="/video-hero.mp4"
                  playsInline
                  autoPlay
                  loop
                  muted
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px' }}
                />
              </div>
              <img
                src="/iphone-15-bezel.png"
                alt="iPhone Bezel"
                className="phone-bezel-overlay"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <div className="section-header animate-in">
            <span className="section-label">The Experience</span>
            <h2 className="section-title">Intimacy, simplified.</h2>
          </div>

          <div className="steps-grid">
            <div className="step-card animate-in delay-100">
              <div className="step-visual">
                <img src="/ilustrasi iphone-10655.png" alt="Grab your iPhone" />
              </div>
              <h3>1. Just your iPhone</h3>
              <p>Forget the medical devices and messy gels. Tiny safely uses your phone’s microphone to listen, requiring nothing but the device you already own.</p>
            </div>
            <div className="step-card animate-in delay-200">
              <div className="step-visual">
                <img src="/ilustrasi airpods-10646.png" alt="Connect Headphones" />
              </div>
              <h3>2. Create your sanctuary</h3>
              <p>Connect your headphones to block out the world. This ensures you hear every subtle movement and heartbeat with crystal clarity.</p>
            </div>
            <div className="step-card animate-in delay-300">
              <div className="step-visual">
                <img src="/ilustrasi tutorial app-10615.gif" alt="Listen and Record" />
              </div>
              <h3>3. Capture the connection</h3>
              <p>Place the phone on your belly to find the rhythm. Watch it visualize, record the memory, and share the joy instantly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header animate-in">
            <span className="section-label">The Experience</span>
            <h2 className="section-title">Intimate. Simple. <span className="text-gradient">Magical.</span></h2>
          </div>

          <div className="feature-row animate-in">
            <div className="feature-text">
              <h3>Pure Simplicity</h3>
              <p>
                <strong>Why?</strong> Because medical gels are messy and extra devices are expensive. Tiny listens carefully to isolate your baby's heartbeat using just your phone. Safe for daily use.
              </p>
              <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="btn-text-arrow">
                Try Tiny Beta &rarr;
              </a>
            </div>
            <div className="feature-visual">
              <img src="/mockup-face-front.png" alt="Tiny App Interface" style={{ width: '100%', height: 'auto', maxWidth: '320px', display: 'block', margin: '0 auto' }} />
            </div>
          </div>

          <div className="feature-row reversed animate-in">
            <div className="feature-text">
              <h3>Share the Moment</h3>
              <p>
                <strong>Why?</strong> Because the joy of a heartbeat is meant to be shared. Record the sound and instantly send it to partners or grandparents, bridging the distance in seconds.
              </p>
              <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="btn-text-arrow">
                Start Sharing &rarr;
              </a>
            </div>
            <div className="feature-visual">
              <img src="/mockup-mom-dad-same-room.png" alt="Sharing Heartbeat" style={{ width: '100%', height: 'auto', maxWidth: '400px', display: 'block', margin: '0 auto' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="stories" className="testimonials-section">
        <div className="container">
          <div className="section-header animate-in">
            <span className="section-label">Stories</span>
            <h2 className="section-title">Moms love Tiny</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-in delay-100">
              <div className="quote-text">"I was skeptical, but hearing that little whoosh-whoosh sound for the first time... I cried. Tiny is magic."</div>
              <div className="author">— Mia, 24 weeks</div>
            </div>
            <div className="testimonial-card animate-in delay-200">
              <div className="quote-text">"My husband is deployed. Sending him the heartbeat recording made him feel like he was right here with us."</div>
              <div className="author">— Sarah, 32 weeks</div>
            </div>
            <div className="testimonial-card animate-in delay-300">
              <div className="quote-text">"The design is so calming. It doesn't feel medical; it feels like a special moment with my baby."</div>
              <div className="author">— Emma, 28 weeks</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card animate-in">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <h2>Ready to listen?</h2>
              <p>Join the Tiny beta and start bonding with your baby today.</p>
              <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="app-store-badge">
                <svg className="badge-icon" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                </svg>
                <div className="badge-text">
                  <span className="badge-small">Download on</span>
                  <span className="badge-large">TestFlight</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/tiny-logo.png" alt="Tiny Logo" style={{ height: '32px', width: 'auto', opacity: 0.9 }} />
              </div>
              <p>Hear the life within.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <Link to="/">Home</Link>
                <a href="#features">Features</a>
                <a href="#stories">Stories</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <Link to="/teams">Team</Link>
                <a href="mailto:hello@tiny.app">Contact</a>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <Link to="/privacy-policy">Privacy</Link>
                <Link to="/terms-and-conditions">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
