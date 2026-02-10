import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Import images
import defaultImage from '../assets/images/default.svg';
import fashionImg from '../assets/images/fashion.svg';
import jewelleryImg from '../assets/images/jewellery.svg';
import realEstateImg from '../assets/images/real_estate.svg';
import ecommerceImg from '../assets/images/e-commerce.svg';
import retailServiceImg from '../assets/images/retail___service.svg';

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

        // Preload all images for instant switching
        categories.forEach((cat) => {
            const img = new Image();
            img.src = cat.image;
        });

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const categories = [
        {
            title: "Fashion & Apparel Brands",
            description: "We help clothing and fashion brands increase sales with professional product shoots, catalogs, and social media ads.",
            image: fashionImg
        },
        {
            title: "Jewellery Businesses",
            description: "We create premium visuals and catalogs that build trust and boost jewellery sales online and offline.",
            image: jewelleryImg
        },
        {
            title: "Real Estate",
            description: "We support developers and agents with property videos, walkthroughs, and lead-generation ads.",
            image: realEstateImg
        },
        {
            title: "E-Commerce Sellers",
            description: "We help online sellers grow faster with high-converting product images, videos, and marketplace creatives.",
            image: ecommerceImg
        },
        {
            title: "Retail & Service Businesses",
            description: "We help local and growing businesses attract more customers through effective digital ads and branding.",
            image: retailServiceImg
        }
    ];

    // Animation variants
    // Animation variants
    const headerVariants = isMobile ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 }
    } : {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const containerVariants = isMobile ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
    } : {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const cardVariants = isMobile ? {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 }
    } : {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] min-h-auto py-6 md:py-12 px-4 md:px-8 relative">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header Section */}
                <motion.div
                    className="text-center mb-12 md:mb-12"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={headerVariants}
                >
                    <h2 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-white mb-2 tracking-tight leading-tight">
                        AI Content & Ad Creation Gallery
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg mx-auto max-w-[900px] leading-relaxed">
                        Explore Real Campaigns, Branding Ads, And AI-Generated Videos Created For Businesses Across Industries.
                    </p>
                </motion.div>

                {/* Content Section: Two Columns - Split View on Mobile */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-16 items-start h-[85vh] md:h-[600px]">

                    {/* Left Column: Image Display - Fixed Height on Mobile */}
                    <div className="w-full h-[40%] md:h-full flex flex-col justify-center shrink-0">
                        <div className="aspect-square md:aspect-square overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A] shadow-2xl relative">
                            {categories.map((cat, index) => (
                                <motion.img
                                    key={index}
                                    src={cat.image}
                                    alt={cat.title}
                                    initial={false}
                                    animate={{
                                        opacity: activeTab === index ? 1 : 0,
                                        scale: activeTab === index ? 1 : 1.05,
                                        zIndex: activeTab === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }}
                                />
                            ))}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none z-20" />
                        </div>
                    </div>

                    {/* Right Column: Interaction List - Internally Scrollable on Mobile too */}
                    <motion.div
                        className="flex flex-col gap-5 md:gap-6 w-full h-[60%] md:h-full overflow-y-auto pr-2 py-2 hide-scrollbar mt-2 md:mt-0 relative z-20"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        onScroll={(e) => {
                            const container = e.target;
                            const scrollTop = container.scrollTop;
                            const cards = container.children;
                            let newActive = activeTab;

                            // Loop through cards to find which one is currently 'active' (sticky/topmost)
                            for (let i = 0; i < categories.length; i++) {
                                const card = cards[i]; // Assuming mapped order matches
                                if (card) {
                                    // Threshold: When card is near the top (sticky position 16px)
                                    if (card.offsetTop - 50 <= scrollTop) {
                                        newActive = i;
                                    }
                                }
                            }

                            // Check if scrolled to bottom - force activate last item
                            // This fixes the issue where the last item never reaches the top threshold
                            if (scrollTop + container.clientHeight >= container.scrollHeight - 10) {
                                newActive = categories.length - 1;
                            }

                            if (newActive !== activeTab) {
                                setActiveTab(newActive);
                            }
                        }}
                    >
                        {categories.map((item, index) => {
                            const isActive = index === activeTab;
                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    // Removed onViewportEnter as we control via onScroll
                                    style={{ zIndex: index + 1 }}
                                    className={`sticky top-4 md:static shrink-0 p-6 md:p-8 rounded-[2rem] cursor-pointer transition-all duration-500 relative group overflow-hidden min-h-[240px] flex flex-col justify-center ${isActive ? 'bg-[#121214] border border-[#8B5CF680] shadow-[0_20px_50px_rgba(139,92,246,0.15)] scale-[1.02]' : 'bg-[#0A0A0A] border border-white/10 hover:border-white/20 shadow-2xl'}`}
                                    variants={cardVariants}
                                >
                                    {/* Glossy Gradient Overlay matching Comparison.jsx */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-100 pointer-events-none" />

                                    {isActive && (
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10" />
                                    )}

                                    <div className="relative z-10">
                                        <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-[#8B5CF6]' : 'text-white'}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>


            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div >
    );
};

export default AiContent;
