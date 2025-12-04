import React, { useEffect, useState, useRef } from 'react';

interface CounterAnimationProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = ''
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, end, duration]);

    const formatNumber = (num: number): string => {
        if (decimals > 0) {
            return num.toFixed(decimals);
        }
        return num.toLocaleString('vi-VN');
    };

    return (
        <div
            ref={counterRef}
            className={`${className} ${isVisible ? 'animate-counter-up' : 'opacity-0'}`}
        >
            {prefix}{formatNumber(count)}{suffix}
        </div>
    );
};
