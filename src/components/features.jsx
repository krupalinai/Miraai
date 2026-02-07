import React, { useState, useEffect } from 'react';

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    const features = [
        {
            title: "AI Video Generation",
            description: "Create High-Quality Marketing Videos, Ads, And Explainers Instantly From Scripts And Ideas.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
            )
        },
        {
            title: "AI Image Generation",
            description: "Generate Professional Product And Lifestyle Images Without Photoshoots Or Studios.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            )
        },
        {
            title: "AI Product Catalog Generation",
            description: "Automatically Create Complete Product Catalogs With Visuals, Descriptions, And Branding.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
            )
        },
        {
            title: "UGC-Style Video Ads Creator",
            description: "Produce Authentic, Influencer-Style Short Videos For Social Media And Performance Ads.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
            )
        },
        {
            title: "Infinite Customization",
            description: "Customize Colors, Fonts, Layouts, And Formats To Match Your Brand Identity.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            )
        },
        {
            title: "Virtual Characters & Avatars",
            description: "Use AI-Powered Models And Presenters For Ads, Explainers, And Promotions.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            )
        },
        {
            title: "High-Impact Branding Ads",
            description: "Design And Launch Powerful Ad Creatives Optimized For Digital Platforms.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
            )
        },
        {
            title: "Automated Editing & Effects",
            description: "Apply Professional Editing, Transitions, Color Grading, And Audio Optimization Automatically.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
            )
        },
        {
            title: "Brand Consistency",
            description: "Maintain A Consistent Brand Identity Across All Content And Campaigns.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            )
        }
    ];

    return (
        <div
            style={{
                backgroundColor: '#000004',
                minHeight: '100vh',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background glow similar to previous components */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '50%',
                    transform: 'translateX(50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Powerful Platform Features
                    </h2>
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '1.125rem',
                        margin: '0 auto',
                        maxWidth: '600px'
                    }}>
                        Everything You Need In One AI Production Platform.
                    </p>
                </div>

                {/* Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '1rem',
                                padding: '2.5rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                                e.currentTarget.style.borderColor = '#8B5CF6';
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.6)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Icon Container */}
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: 'white'
                            }}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                color: 'white',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                lineHeight: '1.4'
                            }}>
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                color: '#9CA3AF',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
