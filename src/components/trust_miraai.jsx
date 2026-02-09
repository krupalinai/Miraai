import React, { useState, useEffect } from 'react';
import WhyMiraaiImage from '../assets/images/why_Miraai.svg';

const TrustMiraai = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    const issues = [
        "High Production Costs And Large Budgets",
        "Weeks Or Months Of Turnaround Time",
        "Multiple Agencies And Vendors",
        "Language Localization Barriers",
        "Costly Re-Shoots And Revisions"
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
            <style>
                {`
                    @media (max-width: 900px) {
                        .trust-container {
                            display: flex !important;
                            flex-direction: column;
                        }
                        .trust-box {
                            order: -1;
                            margin-bottom: 2rem;
                            width: 100%;
                        }
                        .trust-content {
                            width: 100%;
                            padding-right: 0 !important;
                        }
                    }
                `}
            </style>

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        letterSpacing: '-0.02em'
                    }}>
                        Why Trust Miraai?
                    </h2>
                </div>

                {/* Content Section: Two Columns */}
                <div
                    className="trust-container"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >

                    {/* Left Column: Text and List */}
                    <div className="trust-content" style={{ paddingRight: '1rem' }}>
                        <h3 style={{
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            lineHeight: '1.4'
                        }}>
                            Content Creation Is Slow, Expensive & Hard To Scale
                        </h3>
                        <p style={{
                            color: '#9ca3af',
                            fontSize: '1rem',
                            marginBottom: '2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Traditional Video And Creative Production Is Slow, Expensive, And Difficult To Scale.
                        </p>

                        <h4 style={{
                            color: 'white',
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem'
                        }}>
                            Most Businesses Struggle With:
                        </h4>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {issues.map((issue, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                    color: '#9ca3af',
                                    fontSize: '1rem'
                                }}>
                                    <span style={{
                                        color: '#EF4444',
                                        marginRight: '1rem',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}>
                                        ✕
                                    </span>
                                    {issue}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Illustration */}
                    <div className="trust-box" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={WhyMiraaiImage}
                            alt="Why Trust Miraai"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustMiraai;
