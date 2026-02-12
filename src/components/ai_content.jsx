import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import images
import fashionImg from '../assets/images/fashion.jpg';
import jewelleryImg from '../assets/images/jwellery.jpg';
import realEstateImg from '../assets/images/real_estate.png';
import ecommerceImg from '../assets/images/e-commerce.jpg';
import retailServiceImg from '../assets/images/retail___service.jpg';

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

const ImageBlock = ({ categories, activeTab }) => (
    <div className="relative w-full h-[320px] md:h-auto md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A]">
        {categories.map((cat, index) => (
            <motion.img
                key={index}
                src={cat.image}
                alt={cat.title}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeTab === index ? 1 : 0,
                    scale: activeTab === index ? 1 : 1.05
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: activeTab === index ? 10 : 0 }}
            />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
    </div>
);

const AiContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

    // Scroll Listener to update Active Tab
    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const isDesktop = window.innerWidth >= 768;
            const triggerLine = isDesktop ? 140 : viewportHeight * 0.6;

            let newActive = -1;
            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                if (rect.top <= triggerLine) {
                    newActive = index;
                }
            });

            if (newActive !== -1) {
                setActiveTab(newActive);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] relative w-full py-6 md:py-16 px-4 md:px-8 font-['Inter']">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <motion.div
                    className="text-center mb-8 md:mb-16"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={headerVariants}
                >
                    <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-bold text-white mb-6 tracking-tight leading-tight">
                        AI Content & Ad Creation Gallery
                    </h2>
                    <p className="text-gray-400 text-[clamp(1rem,1.2vw,1.25rem)] mx-auto max-w-[850px] opacity-80 leading-relaxed font-medium">
                        Explore Real Campaigns, Branding Ads, And AI-Generated Videos.
                    </p>
                </motion.div>

                {/* ===== DESKTOP LAYOUT ===== */}
                {/* 
                    Single relative container. 
                    Image: absolute left, h-full, with sticky inside.
                    Cards: normal flow on right half, determines container height.
                    Image stays sticky until cards are done → both scroll away together.
                */}
                <div className="hidden md:block relative">
                    {/* Image column: absolute positioned, full height of container */}
                    <div className="absolute left-0 top-0 h-full" style={{ width: 'calc(50% - 32px)' }}>
                        <div className="sticky top-[120px] z-30">
                            <ImageBlock categories={categories} activeTab={activeTab} />
                        </div>
                    </div>

                    {/* Cards column: normal flow on right side, determines container height */}
                    <div className="pb-[280px]" style={{ marginLeft: 'calc(50% + 32px)' }}>
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className={`
                                    w-full sticky 
                                    rounded-[2rem] p-8 
                                    border border-white/10 
                                    backdrop-blur-md transition-all duration-300
                                    mb-8
                                    flex flex-col justify-center
                                    cursor-pointer group
                                    min-h-[240px]
                                `}
                                style={{
                                    top: '120px',
                                    zIndex: 20 + index,
                                    backgroundColor: activeTab === index ? 'rgba(18, 18, 20, 0.95)' : 'rgba(10, 10, 10, 0.9)',
                                    borderColor: activeTab === index ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                                    boxShadow: activeTab === index ? '0 -10px 30px rgba(0,0,0,0.5)' : 'none'
                                }}
                                onClick={() => setActiveTab(index)}
                            >
                                {activeTab === index && (
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.8)] rounded-l-2xl" />
                                )}
                                <div className="pl-2 relative z-10">
                                    <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeTab === index ? 'text-[#8B5CF6]' : 'text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-base leading-relaxed transition-colors ${activeTab === index ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== MOBILE LAYOUT (Absolute Wrapper Approach for Perfect Scroll End) ===== */}
                <div className="md:hidden relative">
                    {/* 
                        Image Column: Absolute & Full Height. 
                        This forces the sticky image to stay within this section's bounds.
                        When this section scrolls up, the image MUST go with it.
                    */}
                    <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 50 }}>
                        <div className="sticky top-[71px] w-full">
                            <ImageBlock categories={categories} activeTab={activeTab} />
                        </div>
                    </div>

                    {/* 
                    {/* 
                        Cards Column: Normal flow content that drives the height.
                        We add top padding equal to Header (80px) + Image Height (350px) + Gap (40px)
                        Gap set to 40px for clean separation. Z-Index 40 ensures proper layering.
                    */}
                    <div className="relative z-40" style={{ paddingTop: 'calc(80px + 350px + 40px)' }}>
                        {/* Card mapping */}
                        {categories.map((item, index) => (
                            <div
                                key={`mobile-${index}`}
                                ref={el => {
                                    if (window.innerWidth < 768) {
                                        cardRefs.current[index] = el;
                                    }
                                }}
                                className={`
                                    w-full sticky 
                                    rounded-[2rem] p-6 
                                    border border-white/10 
                                    backdrop-blur-md transition-all duration-300
                                    {/* Remove margin from last card so section ends immediately */}
                                    ${index === categories.length - 1 ? 'mb-0' : 'mb-4'}
                                    flex flex-col justify-center
                                    cursor-pointer group
                                    min-h-[200px]
                                `}
                                style={{
                                    // Sticky position: Same as natural start position ideally
                                    // Header (80) + Image (350) + Gap (40) + Index offset
                                    top: `calc(80px + 350px + 40px + ${index * 10}px)`,
                                    zIndex: 40 + index,
                                    backgroundColor: activeTab === index ? 'rgba(18, 18, 20, 0.95)' : 'rgba(10, 10, 10, 0.9)',
                                    borderColor: activeTab === index ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                                    boxShadow: activeTab === index ? '0 -10px 30px rgba(0,0,0,0.5)' : 'none'
                                }}
                                onClick={() => setActiveTab(index)}
                            >
                                {activeTab === index && (
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.8)] rounded-l-2xl" />
                                )}
                                <div className="pl-2 relative z-10">
                                    <h3 className={`text-xl font-bold mb-3 transition-colors ${activeTab === index ? 'text-[#8B5CF6]' : 'text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed transition-colors ${activeTab === index ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
                html { scroll-behavior: smooth; }
            `}</style>
        </div>
    );
};

export default AiContent;

