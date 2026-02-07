import React, { useState, useEffect, useRef } from 'react';

const Percentage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const containerRef = useRef(null);

    const stats = [
        { value: 99.8, suffix: '%', label: 'Satisfaction Rate' },
        { value: 24, suffix: '/7', label: 'AI Availability' },
        { value: 70, suffix: '%', label: 'Cost Reduction' },
        { value: 10, suffix: 'x', label: 'Faster Delivery' }
    ];

    useEffect(() => {
        // Trigger fade-in animation on mount
        setTimeout(() => setIsVisible(true), 100);

        // Animate numbers counting up
        const duration = 3000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts(stats.map(stat => {
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                return stat.value * easeOutQuart;
            }));

            if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(stats.map(stat => stat.value));
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            style={{
                backgroundColor: '#000004',
                minHeight: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10rem 2rem 3rem 2rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated background glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite',
                    pointerEvents: 'none'
                }}
            />

            <style>
                {`
          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              opacity: 0.8;
              transform: translate(-50%, -50%) scale(1.1);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          .stat-card {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
          }

          .stat-card:nth-child(1) { animation-delay: 0.1s; }
          .stat-card:nth-child(2) { animation-delay: 0.2s; }
          .stat-card:nth-child(3) { animation-delay: 0.3s; }
          .stat-card:nth-child(4) { animation-delay: 0.4s; }
        `}
            </style>

            <div
                ref={containerRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="stat-card"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '1rem',
                            padding: '2.5rem 2rem',
                            textAlign: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Shimmer effect on hover */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                                transition: 'left 0.5s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.left = '100%';
                            }}
                        />

                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '0.75rem',
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {index === 1
                                ? Math.floor(counts[index]) + stat.suffix
                                : counts[index].toFixed(index === 0 ? 1 : 0) + stat.suffix
                            }
                        </div>
                        <div style={{
                            color: '#9ca3af',
                            fontSize: '0.875rem',
                            fontWeight: '400',
                            letterSpacing: '0.02em',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Percentage;
