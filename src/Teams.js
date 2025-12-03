import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Reusing App.css for general styling if needed

const teamMembers = [
  { name: 'Arya', role: 'Product Manager', image: '/teams/arya-product-manager.png', linkedin: 'https://www.linkedin.com/in/aryamaulanabratajayaa/' },
  { name: 'Jeje', role: 'Designer', image: '/teams/jeje-designer.png', linkedin: 'https://www.linkedin.com/in/jessicahuangg20/' },
  { name: 'Vivi', role: 'Designer', image: '/teams/vivi-designer.png', linkedin: 'https://www.linkedin.com/in/griselda-shavilla' }, // Assuming Vivi is Griselda Shavilla
  { name: 'Revan', role: 'iOS Developer', image: '/teams/revan-ios-developer.png', linkedin: 'https://www.linkedin.com/in/revanza-narendra/' },
  { name: 'Yoga', role: 'iOS Developer', image: '/teams/yoga-ios-developer.png', linkedin: 'https://www.linkedin.com/in/benedictus-yogatama' },
  { name: 'Destu', role: 'iOS Developer', image: '/teams/destu-ios-developer.png', linkedin: 'https://www.linkedin.com/in/destucikal/' },
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
              <img src="/tiny-logo.png" alt="Tiny Logo" className="navbar-logo" />
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
        <div className="hero-content">
          <div className="hero-text">
            <h1>Meet Our Amazing Team</h1>
            <p>The dedicated individuals making Tiny a reality.</p>
          </div>
        </div>
      </header>

      <section className="team-members-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            {member.linkedin && (
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </section>

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

export default Teams;
