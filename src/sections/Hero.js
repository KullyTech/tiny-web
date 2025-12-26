import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Hero() {
    return (
        <header className="hero-section">
            <div className="hero-orb"></div>
            <div className="hero-orb-2"></div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp}>
                        <span className="text-gradient">Baby Heartbeat Listener</span> on Your iPhone
                    </motion.h1>
                    <motion.p className="hero-subtitle" variants={fadeInUp}>
                        Tiny is the tiny iOS app to listen to baby heartbeat sounds safely. No extra equipment needed—simple and always with you.
                    </motion.p>
                    <motion.div className="hero-cta-group" variants={fadeInUp}>
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
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="phone-mockup">
                        <motion.div
                            className="phone-aura"
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.4, 0.6, 0.4]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="demo-video-wrapper" style={{ height: '100%', position: 'relative' }}>
                            <video
                                className="demo-video"
                                playsInline
                                autoPlay
                                loop
                                muted
                                preload="auto"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px' }}
                            >
                                <source src="/assets/videos/hero-demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <img
                            src="/assets/images/iphone-bezel.webp"
                            alt="iPhone Bezel"
                            className="phone-bezel-overlay"
                        />
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
