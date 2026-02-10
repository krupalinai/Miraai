import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import defaultImage from '../assets/images/default.svg';

const AiContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.15, margin: "-50px" });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

    // Animation variants - same as do_best.jsx
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.05 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] min-h-auto py-8 md:py-12 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header Section */}
                {isMobile ? (
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                            AI Content &<br />Ad Creation Gallery
                        </h2>
                        <p className="text-gray-400 text-xs mx-auto max-w-[700px] px-2">
                            Explore Real Campaigns, Branding Ads, And AI-Generated Videos Created For Businesses Across Industries.
                        </p>
                    </div>
                ) : (
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={headerVariants}
                    >
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4 tracking-tight">
                            AI Content & Ad Creation Gallery
                        </h2>
                        <p className="text-gray-400 text-[0.95rem] mx-auto max-w-[700px]">
                            Explore Real Campaigns, Branding Ads, And AI-Generated Videos Created For Businesses Across Industries.
                        </p>
                    </motion.div>
                )}

                {/* Content Section: Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 md:gap-12 items-start">

                    {/* Left Column: Image Display */}
                    {isMobile ? (
                        <div className="w-full h-full overflow-hidden rounded-none flex items-center justify-center">
                            <img
                                src={defaultImage}
                                alt="AI Generated Content"
                                className="w-full max-w-[300px] h-auto object-cover block"
                            />
                        </div>
                    ) : (
                        <motion.div
                            className="w-full h-full overflow-hidden rounded-none flex items-center justify-center"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={imageVariants}
                        >
                            <img
                                src={defaultImage}
                                alt="AI Generated Content"
                                className="w-full h-auto object-cover block"
                            />
                        </motion.div>
                    )}

                    {/* Right Column: Interaction List */}
                    {isMobile ? (
                        <div className="flex flex-col gap-3">
                            {categories.map((item, index) => {
                                const isActive = index === activeTab;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${isActive
                                            ? 'bg-[rgba(139,92,246,0.1)] border border-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.6)]'
                                            : 'bg-[#0A0A0A] border border-[#1A1A1A] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)]'
                                            }`}
                                    >
                                        <h3 className="text-white text-base font-bold mb-1 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs leading-relaxed m-0">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <motion.div
                            className="flex flex-col gap-4"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            {categories.map((item, index) => {
                                const isActive = index === activeTab;
                                return (
                                    <motion.div
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out ${isActive
                                            ? 'bg-[rgba(139,92,246,0.1)] border border-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.6)]'
                                            : 'bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#333] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)]'
                                            }`}
                                        variants={cardVariants}
                                    >
                                        <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed m-0">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default AiContent;
