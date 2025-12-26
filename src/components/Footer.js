import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <img src="/assets/brand/logo-main.webp" alt="Tiny Logo" style={{ height: '32px', width: 'auto', opacity: 0.9 }} />
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
    );
}
