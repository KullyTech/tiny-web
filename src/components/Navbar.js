import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <Link to="/">
                    <img src="/assets/brand/logo-main.png" alt="Tiny Logo" style={{ height: '32px', width: 'auto' }} />
                </Link>
            </div>
            <div className="nav-links">
                <button
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', color: 'inherit' }}
                >
                    Home
                </button>
                <a href="#features">Features</a>
                <a href="#stories">Stories</a>
                <Link to="/teams">Team</Link>
            </div>
            <a href="https://testflight.apple.com/join/sHZ4FgyN" target="_blank" rel="noopener noreferrer" className="nav-cta">
                Try Beta
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </nav>
    );
}
