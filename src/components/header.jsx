import React from 'react';
import miraiLogo from '../assets/images/mirai.svg';

const Header = ({ openForm }) => {
    return (
        <>
            <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[1200px] z-[1000] flex justify-center">
                <div className="w-full flex items-center justify-between px-4 md:px-8 py-2 md:py-3 rounded-2xl md:rounded-3xl bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src={miraiLogo}
                            alt="Mirai Logo"
                            className="h-8 md:h-10 w-auto"
                        />
                    </div>

                    {/* Button Section */}
                    <button
                        onClick={openForm}
                        className="bg-[#8B5CF6] text-white border-none py-2 px-4 md:py-[0.6rem] md:px-6 rounded-[2rem] font-semibold text-xs md:text-[0.9rem] cursor-pointer transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
