import React from 'react';
import miraiLogo from '../assets/images/mirai.svg';

const Header = () => {
    return (
        <div style={{
            position: 'fixed',
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1200px',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 2rem',
                borderRadius: '1.5rem',
                background: 'rgba(20, 20, 20, 0.4)', // Slightly transparent dark background
                backdropFilter: 'blur(16px)', // Key glass effect
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}>
                {/* Logo Section */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={miraiLogo}
                        alt="Mirai Logo"
                        style={{
                            height: '40px', // Adjust size as needed based on the SVG
                            width: 'auto'
                        }}
                    />
                </div>

                {/* Button Section */}
                <button style={{
                    backgroundColor: '#8B5CF6', // Purple color from reference
                    color: 'white',
                    border: 'none',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '2rem', // Pill shape
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)' // Glow effect
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 0 25px rgba(139, 92, 246, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.4)';
                    }}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Header;
