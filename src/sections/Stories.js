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

export default function Stories() {
    const testimonials = [
        { quote: "\"I was skeptical, but hearing that little whoosh-whoosh sound for the first time... I cried. Tiny is magic.\"", author: "— Mia, 24 weeks" },
        { quote: "\"My husband is deployed. Sending him the heartbeat recording made him feel like he was right here with us.\"", author: "— Sarah, 32 weeks" },
        { quote: "\"The design is so calming. It doesn't feel medical; it feels like a special moment with my baby.\"", author: "— Emma, 28 weeks" }
    ];

    return (
        <section id="stories" className="testimonials-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Stories</span>
                    <h2 className="section-title">Moms love Tiny</h2>
                </motion.div>

                <motion.div
                    className="testimonials-grid"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {testimonials.map((t, i) => (
                        <motion.div key={i} className="testimonial-card" variants={fadeInUp}>
                            <div className="quote-text">{t.quote}</div>
                            <div className="author">{t.author}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
