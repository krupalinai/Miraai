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
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
        <div className="bg-[#000004] min-h-auto py-8 md:py-12 relative overflow-hidden flex flex-col items-center">
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollMobile {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                `}
            </style>

            {/* Background gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

            <div className="max-w-[1200px] w-full relative z-[1] px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-8 md:mb-14">
                    <h2 className="text-2xl md:text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-3 md:mb-4 tracking-tight">
                        Trusted by Global Giants
                    </h2>
                    <p className="text-gray-400 text-xs md:text-[clamp(0.875rem,2vw,1rem)] max-w-[700px] mx-auto leading-relaxed px-2">
                        Trusted By Businesses, Creators, And Institutions Across India For Scalable Content Production
                    </p>
                </div>
            </div>

            {/* Scrolling Marquee */}
            <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                <div
                    className={`flex w-max py-4 ${isMobile ? 'gap-8 animate-[scroll_20s_linear_infinite]' : 'gap-16 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]'}`}
                >
                    {scrollingCompanies.map((company, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center transition-all duration-300 ease-in-out ${isMobile
                                ? 'min-w-[80px] h-12'
                                : 'min-w-[120px] h-20'
                                } ${company.keepColor
                                    ? 'hover:scale-110'
                                    : 'brightness-0 invert opacity-70 hover:brightness-0 hover:invert hover:opacity-100 hover:scale-110'
                                }`}
                        >
                            <img
                                src={company.icon}
                                alt={company.name}
                                className={`max-w-full max-h-full object-contain ${isMobile
                                    ? 'h-[30px] w-auto'
                                    : company.name === 'Hugging Face'
                                        ? 'h-[50px]'
                                        : 'h-[50px] w-auto'
                                    } ${company.name === 'Biba' && !isMobile ? 'w-[120px] h-auto' : ''} ${company.name === 'Biba' && isMobile ? 'w-[80px] h-auto' : ''}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GlobalGiants;
