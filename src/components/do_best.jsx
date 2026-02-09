import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WhyMiraaiImage from '../assets/images/why_Miraai.svg';

const DoBest = () => {
    const sectionRef = useRef(null);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.15,
        margin: "-50px"
    });

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const benefits = [
        "High Production Costs And Large Budgets",
        "Weeks Or Months Of Turnaround Time",
        "Multiple Agencies And Vendors",
        "Language Localization Barriers",
        "Costly Re-Shoots And Revisions"
    ];

    // Animation variants - only used on desktop
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.05 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
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

    const listItemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] min-h-auto py-5 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header Section */}
                {isMobile ? (
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            What We Do Best ?
                        </h2>
                    </div>
                ) : (
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={headerVariants}
                    >
                        <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-white tracking-tight">
                            What We Do Best ?
                        </h2>
                    </motion.div>
                )}

                {/* Content Section: Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 md:gap-16 items-center">

                    {/* Left Column: Illustration */}
                    {isMobile ? (
                        <div className="w-full flex justify-center items-center">
                            <img
                                src={WhyMiraaiImage}
                                alt="Miraai Illustration"
                                className="w-full max-w-[280px] h-auto object-contain"
                            />
                        </div>
                    ) : (
                        <motion.div
                            className="w-full flex justify-center items-center"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={imageVariants}
                        >
                            <img
                                src={WhyMiraaiImage}
                                alt="Miraai Illustration"
                                className="w-full h-auto object-contain"
                            />
                        </motion.div>
                    )}

                    {/* Right Column: Text and List */}
                    {isMobile ? (
                        <div className="pl-0">
                            <h3 className="text-white text-lg font-semibold mb-3 leading-snug">
                                Your AI-Powered Creative Team
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Miraai Combines Advanced Artificial Intelligence With Human Creativity To Deliver Enterprise-Grade Content Production.
                            </p>

                            <h4 className="text-white text-base font-semibold mb-4">
                                With Miraai, You Can:
                            </h4>

                            <ul className="list-none p-0">
                                {benefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center mb-3 text-gray-400 text-sm"
                                    >
                                        <span className="text-green-500 mr-3 font-bold text-base">
                                            ✔
                                        </span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <motion.div
                            className="pl-4"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            <motion.h3
                                className="text-white text-2xl font-semibold mb-4 leading-snug"
                                variants={textVariants}
                            >
                                Your AI-Powered Creative Team
                            </motion.h3>

                            <motion.p
                                className="text-gray-400 text-base mb-10 leading-relaxed"
                                variants={textVariants}
                            >
                                Miraai Combines Advanced Artificial Intelligence With Human Creativity To Deliver Enterprise-Grade Content Production.
                            </motion.p>

                            <motion.h4
                                className="text-white text-xl font-semibold mb-6"
                                variants={textVariants}
                            >
                                With Miraai, You Can:
                            </motion.h4>

                            <motion.ul
                                className="list-none p-0"
                                variants={containerVariants}
                            >
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center mb-4 text-gray-400 text-base"
                                        variants={listItemVariants}
                                    >
                                        <span className="text-green-500 mr-4 font-bold text-xl">
                                            ✔
                                        </span>
                                        {benefit}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default DoBest;
