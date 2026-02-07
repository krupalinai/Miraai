import React, { useState, useEffect } from 'react';

const DoBest = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    const benefits = [
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
            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        letterSpacing: '-0.02em'
                    }}>
                        What We Do Best
                    </h2>
                </div>

                {/* Content Section: Two Columns */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* Left Column: Special Gradient Box */}
                    <div style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
                        border: '1px solid #FFFFFF1A', // Using the exact color code provided
                        borderRadius: '1.5rem',
                        height: '400px',
                        width: '100%',
                        position: 'relative'
                    }}>
                        {/* Box content is empty as per image, serving as a visual element or placeholder */}
                    </div>

                    {/* Right Column: Text and List */}
                    <div style={{ paddingLeft: '1rem' }}>
                        <h3 style={{
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            lineHeight: '1.4'
                        }}>
                            Your AI-Powered Creative Team
                        </h3>
                        <p style={{
                            color: '#9ca3af',
                            fontSize: '1rem',
                            marginBottom: '2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Miraai Combines Advanced Artificial Intelligence With Human Creativity To Deliver Enterprise-Grade Content Production.
                        </p>

                        <h4 style={{
                            color: 'white',
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem'
                        }}>
                            With Miraai, You Can:
                        </h4>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {benefits.map((benefit, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                    color: '#9ca3af',
                                    fontSize: '1rem'
                                }}>
                                    <span style={{
                                        color: '#22C55E', // Green checkmark
                                        marginRight: '1rem',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}>
                                        ✔
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DoBest;
