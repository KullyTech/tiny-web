import React from 'react';
import './App.css';

const Orb = () => {
    return (
        <div className="orb-container">
            {/* Base Gradient Background */}
            <div className="orb-background"></div>

            {/* Animated Wrapper (Physics Controller) */}
            <div className="animated-orb">
                {/* 1. The Ring (behind) */}
                <div className="orb-ring"></div>

                {/* 2. The Orb (in front) */}
                <div className="orb-body">
                    {/* Rotating Glow Layers */}
                    <div className="orb-layer glow-layer-1"></div>
                    <div className="orb-layer glow-layer-2"></div>

                    {/* Wavy Blobs for Organic Movement */}
                    <div className="orb-blob blob-1"></div>
                    <div className="orb-blob blob-2"></div>

                    {/* Inner Realistic Glows/Outline */}
                    <div className="orb-outline outline-1"></div>
                    <div className="orb-outline outline-2"></div>

                    {/* Core Glow */}
                    <div className="orb-core-glow"></div>
                </div>
            </div>
        </div>
    );
};

export default Orb;
