import React, { useState, useEffect } from 'react';

// Importing all requested logos
import allenSolly from '../assets/images/Allen_Solly-SIL0FckF_brandlogos.net.svg';
import crocs from '../assets/images/crocs.svg';
import huggingFace from '../assets/images/huggingface.svg';
import logo4 from '../assets/images/id8mzHBwLP_logos.svg';
import logo5 from '../assets/images/idVsOLKccS_1770448108912.png';
import loreal from '../assets/images/L\'Oréal_logo.svg';
import nike from '../assets/images/Logo_NIKE.svg';
import maybelline from '../assets/images/Maybelline-Logo.svg';
import nykaa from '../assets/images/Nykaa_New_Logo.svg';
import tanishq from '../assets/images/Tanishq_Logo.svg';
import zara from '../assets/images/Zara_Logo.svg';

const GlobalGiants = () => {
    const companies = [
        { name: 'Allen Solly', icon: allenSolly },
        { name: 'Crocs', icon: crocs },
        { name: 'Hugging Face', icon: huggingFace, keepColor: true },
        { name: 'Biba', icon: logo4, keepColor: true },
        { name: 'Malabar', icon: logo5, keepColor: true },
        { name: 'L\'Oréal', icon: loreal },
        { name: 'Nike', icon: nike },
        { name: 'Maybelline', icon: maybelline },
        { name: 'Nykaa', icon: nykaa },
        { name: 'Tanishq', icon: tanishq },
        { name: 'Zara', icon: zara },
    ];

    // Duplicate list for seamless scrolling
    const scrollingCompanies = [...companies, ...companies];

    return (
        <div
            style={{
                backgroundColor: '#000004',
                minHeight: 'auto',
                padding: '3rem 0',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .marquee-container {
            width: 100%;
            overflow: hidden;
            display: flex;
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }

          .marquee-content {
            display: flex;
            gap: 4rem;
            animation: scroll 30s linear infinite;
            width: max-content;
            padding: 1rem 0;
          }

          .marquee-content:hover {
            animation-play-state: paused;
          }
        `}
            </style>

            {/* Background gradient glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '800px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                position: 'relative',
                zIndex: 1,
                padding: '0 2rem'
            }}>
                {/* Header */}
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '3.5rem',
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Trusted by Global Giants
                    </h2>
                    <p style={{
                        color: '#9ca3af',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Trusted By Businesses, Creators, And Institutions Across India For Scalable Content Production
                    </p>
                </div>
            </div>

            {/* Scrolling Marquee */}
            <div className="marquee-container">
                <div className="marquee-content">
                    {scrollingCompanies.map((company, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '120px',
                                height: '80px',
                                filter: company.keepColor ? 'none' : 'brightness(0) invert(1) opacity(0.7)',
                                transition: 'filter 0.3s ease, transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                if (!company.keepColor) {
                                    e.currentTarget.style.filter = 'brightness(0) invert(1) opacity(1)';
                                }
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                if (!company.keepColor) {
                                    e.currentTarget.style.filter = 'brightness(0) invert(1) opacity(0.7)';
                                }
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <img
                                src={company.icon}
                                alt={company.name}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    height: company.name === 'Biba' ? 'auto' : (company.name === 'Hugging Face' ? '50px' : '50px'),
                                    width: company.name === 'Biba' ? '120px' : 'auto'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GlobalGiants;
