import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../styles/App.css'; // Reusing App.css for general styling if needed

const teamMembers = [
  { name: 'Arya', role: 'Product Manager', image: '/teams/arya-headshot.png', linkedin: 'https://www.linkedin.com/in/aryamaulanabratajayaa/' },
  { name: 'Jeje', role: 'Designer', image: '/teams/jeje-headshot.png', linkedin: 'https://www.linkedin.com/in/jessicahuangg20/' },
  { name: 'Vivi', role: 'Designer', image: '/teams/vivi-headshot.png', linkedin: 'https://www.linkedin.com/in/griselda-shavilla' },
  { name: 'Revan', role: 'iOS Developer', image: '/teams/revan-headshot.png', linkedin: 'https://www.linkedin.com/in/revanza-narendra/' },
  { name: 'Yoga', role: 'iOS Developer', image: '/teams/yoga-headshot.png', linkedin: 'https://www.linkedin.com/in/benedictus-yogatama' },
  { name: 'Destu', role: 'iOS Developer', image: '/teams/destu-headshot.png', linkedin: 'https://www.linkedin.com/in/destucikal/' },
];

function Teams() {
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
    <div className="teams-page">
      <header className="hero-section"> {/* Reusing hero-section for consistent header style */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <Link to="/"> {/* Link back to home */}
              <img src="/assets/brand/logo-main.png" alt="Tiny Logo" className="navbar-logo" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#stories">Stories</Link>
            <Link to="/teams">Teams</Link>
          </div>
          <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="nav-cta">Download</a>
        </nav>
        <div className="container hero-content" style={{ textAlign: 'center', display: 'block' }}>
          <div className="hero-text animate-in">
            <h1>The Team</h1>
            <p>The minds and hearts behind Tiny.</p>
          </div>
        </div>
      </header>

      <section className="team-members-grid animate-in delay-200">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <span className="team-member-role">{member.role}</span>
            {member.linkedin && (
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/assets/brand/logo-main.png" alt="Tiny Logo" style={{ height: '32px', width: 'auto', opacity: 0.9 }} />
              </div>
              <p>Hear the life within.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <Link to="/">Home</Link>
                <a href="/#features">Features</a>
                <a href="/#stories">Stories</a>
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

export default Teams;
