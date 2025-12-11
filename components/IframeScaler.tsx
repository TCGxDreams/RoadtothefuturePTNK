import React, { useEffect } from 'react';

export const IframeScaler: React.FC = () => {
    useEffect(() => {
        const handleResize = () => {
            // Check if running inside an iframe
            const isIframe = window.self !== window.top;
            if (!isIframe) return;

            // Detect mobile environment or small container
            const containerWidth = window.innerWidth;
            const designWidth = 375; // Standard mobile width base

            // Use root or body for scaling
            const root = document.getElementById('root');
            if (root) {
                // If container is smaller than 320px (e.g. some embeds), scale it down
                if (containerWidth < 320) {
                    const scale = containerWidth / 320;
                    // Apply scale to root
                    root.style.transform = `scale(${scale})`;
                    root.style.transformOrigin = 'top left';
                    root.style.width = `${320}px`; // Fix width to minimum base
                    root.style.height = `${100 / scale}%`; // Adjust height to compensate
                    root.style.overflowX = 'hidden';
                } else {
                    // Reset if width is sufficient
                    root.style.transform = '';
                    root.style.transformOrigin = '';
                    root.style.width = '';
                    root.style.height = '';
                    root.style.overflowX = '';
                }
            }
        };

        // Initial check
        handleResize();

        // Listen for resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return null; // This component handles logic only, no render
};
