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
    const testimonial = { 
        quote: "\"I was skeptical, but hearing that little whoosh-whoosh sound for the first time... I cried. Tiny is magic.\"", 
        author: "— Mia, 24 weeks" 
    };

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
                    className="testimonial-single-wrapper"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <motion.div className="testimonial-card" variants={fadeInUp} style={{ maxWidth: '600px', textAlign: 'center' }}>
                        <div className="quote-text">{testimonial.quote}</div>
                        <div className="author" style={{ fontSize: '1.1rem' }}>{testimonial.author}</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
