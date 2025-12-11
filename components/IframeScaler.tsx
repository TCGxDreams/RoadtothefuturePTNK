import React, { useEffect } from 'react';

export const IframeScaler: React.FC = () => {
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                // Check if running inside an iframe
                const isIframe = window.self !== window.top;
                if (!isIframe) return;

                const containerWidth = window.innerWidth;
                const BASE_WIDTH = 400; // Increase base width to ensure layout integrity

                const content = document.getElementById('scalable-content');
                if (content) {
                    if (containerWidth < BASE_WIDTH) {
                        const scale = containerWidth / BASE_WIDTH;
                        content.style.transform = `scale(${scale})`;
                        content.style.transformOrigin = 'top left';
                        content.style.width = `${BASE_WIDTH}px`;
                        // content.style.height = `${100 / scale}%`; // Let flex grow handle height normally or specific adjustments
                        content.style.overflowX = 'hidden';

                        // We do NOT position absolute here if we want it to flow, but usually scale requires layout adjustment
                        // Since it's flex-grow logic, let's keep it simple. 
                        // If we scale top-left, the visual height shrinks. We might need marginBottom to compensate?
                    } else {
                        content.style.transform = '';
                        content.style.transformOrigin = '';
                        content.style.width = '';
                        content.style.overflowX = '';
                    }
                }
            }, 100); // Debounce delay
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return null; // This component handles logic only, no render
};
