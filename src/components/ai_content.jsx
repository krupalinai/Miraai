import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import images
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import fashionImg from '../assets/images/fashion.jpg';
import jewelleryImg from '../assets/images/jewellery.png';
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
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import fashionImg from '../assets/images/fashion.svg';
import jewelleryImg from '../assets/images/jewellery.svg';
import realEstateImg from '../assets/images/real_estate.svg';
import ecommerceImg from '../assets/images/e-commerce.svg';
import retailServiceImg from '../assets/images/retail___service.svg';
>>>>>>> Stashed changes

const AiContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

    // Scroll Listener to update Active Tab
    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            // Determine active card based on position relative to center/trigger point
            // Mobile: Trigger is around 50% down (below image).
            // Desktop: Trigger is around center.

            const triggerLine = viewportHeight * 0.8;

            let newActive = -1;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();

                // If the top of the card is ABOVE the trigger line, it's a candidate.
                // We want the *last* card that has crossed the line.
                if (rect.top <= triggerLine) {
                    newActive = index;
                }
            });

            if (newActive !== -1) {
                setActiveTab(newActive);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

<<<<<<< Updated upstream
    // Animation Variants
    const headerVariants = {
=======
    const categories = [
        {
            title: "Fashion & Apparel Brands",
            description: "Traditional fashion shoots demand high budgets, models, and long production timelines. Miraai delivers hyper-realistic AI-generated visuals and catalogs that help brands launch collections faster while reducing creative costs.",
            image: fashionImg
        },
        {
            title: "Jewellery Businesses",
            description: "Luxury jewellery shoots are expensive and difficult to scale across campaigns. Miraai creates ultra-realistic product visuals and premium catalogs that build trust and boost online and offline sales.",
            image: jewelleryImg
        },
        {
            title: "Real Estate",
            description: "Property videos and walkthrough shoots often require heavy production and travel expenses. Miraai provides cinematic AI-generated visuals and promotional creatives that attract buyers and generate leads faster.",
            image: realEstateImg
        },
        {
            title: "E-Commerce Sellers",
            description: "Traditional product photography slows down catalog expansion and increases operational costs. Miraai enables scalable AI-generated product images and videos that improve conversions and speed up marketplace growth.",
            image: ecommerceImg
        },
        {
            title: "Retail & Service Businesses",
            description: "Professional ad shoots can be costly for growing local businesses. Miraai delivers high-quality AI-generated branding visuals and ads that help attract more customers without large production budgets.",
            image: retailServiceImg
        }
    ];

    // Animation variants
    // Animation variants
    const headerVariants = isMobile ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 }
    } : {
>>>>>>> Stashed changes
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] relative w-full py-6 md:py-16 px-4 md:px-8">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <motion.div
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                    className="text-center mb-8 md:mb-16"
=======
                    className="text-center mb-12 md:mb-16"
>>>>>>> Stashed changes
=======
                    className="text-center mb-12 md:mb-16"
>>>>>>> Stashed changes
=======
                    className="text-center mb-12 md:mb-16"
>>>>>>> Stashed changes
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={headerVariants}
                >
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                    <h2 className="text-2xl md:text-[3.5rem] font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">
                        AI Content & Ad Creation Gallery
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg mx-auto max-w-[900px]">
                        Explore Real Campaigns, Branding Ads, And AI-Generated Videos.
=======
                    <h2 className="text-xl sm:text-2xl md:text-[clamp(1.5rem,3.5vw,2.8rem)] font-bold text-white tracking-tight max-w-[90%] md:max-w-[1000px] mx-auto leading-tight mb-4 md:mb-6">
                        Creative Solutions Built for Every Industry
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide opacity-80 max-w-[600px] md:max-w-[850px] mx-auto leading-relaxed">
                        See how Miraai delivers high-quality AI-powered visuals, ads, and branded content that help businesses grow faster, attract customers, and scale their marketing effortlessly.
>>>>>>> Stashed changes
=======
                    <h2 className="text-xl sm:text-2xl md:text-[clamp(1.5rem,3.5vw,2.8rem)] font-bold text-white tracking-tight max-w-[90%] md:max-w-[1000px] mx-auto leading-tight mb-4 md:mb-6">
                        Creative Solutions Built for Every Industry
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide opacity-80 max-w-[600px] md:max-w-[850px] mx-auto leading-relaxed">
                        See how Miraai delivers high-quality AI-powered visuals, ads, and branded content that help businesses grow faster, attract customers, and scale their marketing effortlessly.
>>>>>>> Stashed changes
=======
                    <h2 className="text-xl sm:text-2xl md:text-[clamp(1.5rem,3.5vw,2.8rem)] font-bold text-white tracking-tight max-w-[90%] md:max-w-[1000px] mx-auto leading-tight mb-4 md:mb-6">
                        Creative Solutions Built for Every Industry
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide opacity-80 max-w-[600px] md:max-w-[850px] mx-auto leading-relaxed">
                        See how Miraai delivers high-quality AI-powered visuals, ads, and branded content that help businesses grow faster, attract customers, and scale their marketing effortlessly.
>>>>>>> Stashed changes
                    </p>
                </motion.div>

                {/* Unified Sticky Layout */}
                {/* 
                   Using CSS Sticky for both columns.
                   Left: Image, sticky at top.
                   Right: Cards, sticky at offset to create stacking.
                */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-start relative">

                    {/* Left Column: Images */}
                    {/* 
                        Mobile: Sticky at ~80px (below header). Height 40vh.
                        Desktop: Sticky at ~100px. Aspect Square.
                    */}
                    <div className="w-full sticky top-[80px] md:top-[120px] z-10 self-start pb-[300px] md:pb-0 mb-8 md:mb-0">
                        <div className="relative w-full h-[38vh] md:h-auto md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A]">
                            {/* Images */}
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
                    </div>

                    {/* Right Column: Cards */}
                    {/* 
                        We want these to stack directly BELOW the image on mobile.
                        Image Ends at: 80px + 38vh = ~48vh.
                        So Cards start sticking at ~50vh.
                    */}
                    <div className="flex flex-col w-full relative z-20 pb-4 -mt-[300px] md:mt-0">
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className={`
                                    w-full sticky 
                                    rounded-[2rem] p-6 md:p-8 
                                    border border-white/10 
                                    backdrop-blur-md transition-all duration-300
                                    mb-4 md:mb-8
                                    flex flex-col justify-center
                                    cursor-pointer group
                                    min-h-[200px] md:min-h-[240px]
                                `}
                                style={{
                                    // STICKY TOP CALCULATION
                                    // Mobile: 
                                    // Base = 85px (Header) + 38vh (Image) + 20px (Gap) ~= calc(38vh + 110px).
                                    // Plus index offset for stacking: index * 10px.

                                    // Desktop:
                                    // Base = 120px + Gap? 
                                    // No, on desktop cards are side-by-side. 
                                    // We can stack them nicely too.
                                    // Top = 150px + index * 60px.

                                    top: window.innerWidth < 768
                                        ? `calc(38vh + 90px + ${index * 10}px)`
                                        : `calc(120px + ${index * 20}px)`,

                                    zIndex: 20 + index,
                                    backgroundColor: activeTab === index ? 'rgba(18, 18, 20, 0.95)' : 'rgba(10, 10, 10, 0.9)',
                                    borderColor: activeTab === index ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                                    boxShadow: activeTab === index ? '0 -10px 30px rgba(0,0,0,0.5)' : 'none'
                                }}
                                onClick={() => setActiveTab(index)}
                            >
                                {/* Active Stripe */}
                                {activeTab === index && (
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.8)] rounded-l-2xl" />
                                )}

                                <div className="pl-2 relative z-10">
                                    <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${activeTab === index ? 'text-[#8B5CF6]' : 'text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm md:text-base leading-relaxed transition-colors ${activeTab === index ? 'text-gray-300' : 'text-gray-500'}`}>
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
