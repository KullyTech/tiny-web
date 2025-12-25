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

export default function Experience() {
    const steps = [
        {
            img: "/assets/images/illustration-iphone.png",
            title: "1. Just your iPhone",
            desc: "Forget the medical devices and messy gels. Tiny safely uses your phone’s microphone to listen, requiring nothing but the device you already own.",
            alt: "Illustration of iPhone showing how to listen to baby heartbeat without extra devices"
        },
        {
            img: "/assets/images/illustration-airpods.png",
            title: "2. Create your sanctuary",
            desc: "Connect your headphones to block out the world. This ensures you hear every subtle movement and heartbeat with crystal clarity.",
            alt: "AirPods connected to iPhone for clear fetal heartbeat listening"
        },
        {
            img: "/assets/images/illustration-tutorial.gif",
            title: "3. Capture the connection",
            desc: "Place the phone on your belly to find the rhythm. Watch it visualize, record the memory, and share the joy instantly.",
            alt: "Animation showing how to place iPhone on pregnant belly to record heartbeat"
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">The Experience</span>
                    <h2 className="section-title">Intimacy, simplified.</h2>
                </motion.div>

                <motion.div
                    className="steps-grid"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="step-card"
                            variants={fadeInUp}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="step-visual">
                                <img src={step.img} alt={step.alt} width="160" height="160" />
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
