import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Is Tiny safe for my baby?",
        answer: "Yes, absolutely. Tiny uses your iPhone's existing microphone to listen passively. Unlike dopplers that send sound waves into the body, Tiny emits no waves, radiation, or energy. It's just like a voice recorder—completely safe for you and your little one."
    },
    {
        question: "When can I start hearing the heartbeat?",
        answer: "Most moms can start detecting a heartbeat with Tiny between 24-30 weeks. Some may hear it earlier depending on the baby's position and the placenta's location. We recommend using it in a quiet room for the best experience."
    },
    {
        question: "Do I need special equipment?",
        answer: "No! Tiny works with just your iPhone. For the best audio clarity, we highly recommend wearing AirPods or wired headphones to isolate the sound, but no extra medical devices or gels are required."
    },
    {
        question: "Can I share the recordings?",
        answer: "Yes! You can save your recordings and share them instantly via iMessage, WhatsApp, or social media. It's a perfect way to keep partners, grandparents, and friends involved in your journey."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    className="section-header"
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Common Questions</span>
                    <h2 className="section-title">Everything you need to know</h2>
                </motion.div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    padding: '1.5rem 0',
                                    color: 'var(--text)',
                                    fontSize: '1.2rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                {faq.question}
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'inline-block', marginLeft: '1rem', color: 'var(--accent-secondary)' }}
                                >
                                    ▼
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p style={{
                                            paddingBottom: '1.5rem',
                                            color: 'var(--text-muted)',
                                            lineHeight: '1.6',
                                            margin: 0
                                        }}>
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                
                {/* Structured Data for FAQ Page */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })}
                </script>
            </div>
        </section>
    );
}
