import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
    return (
        <section id="features" className="features-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">The Experience</span>
                    <h2 className="section-title">Intimate. Simple. <span className="text-gradient">Magical.</span></h2>
                </motion.div>

                <motion.div
                    className="feature-row"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
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
                        <img src="/assets/images/mockup-face-front.webp" alt="Tiny App Interface" style={{ width: '100%', height: 'auto', maxWidth: '320px', display: 'block', margin: '0 auto' }} />
                    </div>
                </motion.div>

                <motion.div
                    className="feature-row reversed"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
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
                        <img src="/assets/images/mockup-mom-dad-same-room.webp" alt="Sharing Heartbeat" style={{ width: '100%', height: 'auto', maxWidth: '400px', display: 'block', margin: '0 auto' }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
