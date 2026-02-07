import React, { useState } from 'react';
import defaultImage from '../assets/images/default.svg';

const AiContent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            title: "Fashion & Editorial",
            description: "High-Fidelity Virtual Models And Automated Studio Lighting For Global Apparel Brands."
        },
        {
            title: "Fashion & Editorial",
            description: "High-Fidelity Virtual Models And Automated Studio Lighting For Global Apparel Brands."
        },
        {
            title: "Fine Jewellery",
            description: "Macro-Detail Rendering Of Precious Metals And Gemstones With Hyper-Realistic Refraction."
        },
        {
            title: "Real Estate",
            description: "Photorealistic Interior Staging And Architectural Visualization From Floorplans."
        }
    ];

    return (
        <div
            style={{
                backgroundColor: '#000004',
                minHeight: 'auto',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        AI Content & Ad Creation Gallery
                    </h2>
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '0.95rem',
                        margin: '0 auto',
                        maxWidth: '700px'
                    }}>
                        Explore Real Campaigns, Branding Ads, And AI-Generated Videos Created For Businesses Across Industries.
                    </p>
                </div>

                {/* Content Section: Two Columns */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>

                    {/* Left Column: Image Display */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        borderRadius: '0', // Sharp corners as per image or slight radius if preferred
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={defaultImage}
                            alt="AI Generated Content"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    </div>

                    {/* Right Column: Interaction List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {categories.map((item, index) => {
                            const isActive = index === activeTab;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    style={{
                                        backgroundColor: isActive
                                            ? 'rgba(139, 92, 246, 0.1)'
                                            : '#0A0A0A',
                                        border: isActive
                                            ? '1px solid #8B5CF6'
                                            : '1px solid #1A1A1A',
                                        borderRadius: '1rem',
                                        padding: '1.5rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: isActive
                                            ? '0 0 30px rgba(139, 92, 246, 0.6)'
                                            : 'none',
                                        background: !isActive ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)' : undefined
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.borderColor = '#333';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.borderColor = '#1A1A1A';
                                        }
                                    }}
                                >
                                    <h3 style={{
                                        color: 'white',
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.5rem',
                                        lineHeight: '1.2'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: '#9ca3af',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        margin: 0
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AiContent;
