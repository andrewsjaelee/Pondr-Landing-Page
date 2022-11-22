import React from 'react';
import '../styles.css';

const Testing = () => {
    return (
        <div>
            <div class="waveAnimation">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path
                    class="w1 waveTop"
                    d="M-8.74,71.55 C289.78,255.11 349.60,4.47 505.36,34.05 L500.00,150.00 L0.00,150.00 Z"
                    />
                    <path
                    class="w2 waveMiddle"
                    d="M-23.42,125.83 C187.63,45.89 299.38,57.73 526.80,123.86 L500.00,150.00 L0.00,150.00 Z"
                    />
                    <path
                    class="w3 waveBottom"
                    d="M-23.42,125.83 C172.96,-152.44 217.55,183.06 504.22,55.77 L500.00,150.00 L0.00,150.00 Z"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Testing;