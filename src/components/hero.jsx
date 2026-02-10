import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useMemo, useState, useRef } from 'react';

// Import local images (these exist in your assets)
import textileImg from '../assets/images/Textile.png';
import lifestyleImg from '../assets/images/Lifestyle.png';
import jwelleryImg from '../assets/images/Jwellery.png';
import aiGenImg from '../assets/images/ai genration.png';
import inputVisionImg from '../assets/images/input your vision.png';
import reviewDeployImg from '../assets/images/review and deploy.png';

// Image sources array
const imageSources = [textileImg, lifestyleImg, jwelleryImg, aiGenImg, inputVisionImg, reviewDeployImg];

// Card positions around center - balanced layout (3 left, 3 right)
const cardConfigs = [
  // Left side cards
  { x: -200, y: -200, rotate: -12, scale: 0.95 },
  { x: -380, y: 80, rotate: 8, scale: 0.92 },
  { x: -100, y: 220, rotate: -10, scale: 0.88 },
  // Right side cards
  { x: 200, y: -200, rotate: 12, scale: 0.95 },
  { x: 380, y: 80, rotate: -8, scale: 0.92 },
  { x: 100, y: 220, rotate: 6, scale: 0.88 },
];

// Desktop Floating Image Card Component
const FloatingImageCard = ({ src, config, index, randomValues }) => {
  const controls = useAnimationControls();
  const { duration, xAmp, yAmp, rotAmp } = randomValues;

  useEffect(() => {
    const animateSequence = async () => {
      await controls.start({
        x: -config.x * 0.15,
        y: -config.y * 0.15,
        rotate: -config.rotate * 0.3,
        scale: 0.5,
        opacity: 0.6,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 20,
          mass: 1,
          delay: index * 0.08,
        },
      });

      await controls.start({
        x: config.x,
        y: config.y,
        rotate: config.rotate,
        scale: config.scale,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 45,
          damping: 18,
          mass: 1.2,
          delay: 0.05,
        },
      });

      controls.start({
        x: [config.x - xAmp, config.x + xAmp, config.x - xAmp],
        y: [config.y - yAmp, config.y + yAmp, config.y - yAmp],
        rotate: [config.rotate - rotAmp, config.rotate + rotAmp, config.rotate - rotAmp],
        transition: {
          x: { duration, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: duration * 1.4, repeat: Infinity, ease: 'easeInOut' },
        },
      });
    };

    animateSequence();
  }, [controls, config, index, duration, xAmp, yAmp, rotAmp]);

  return (
    <motion.div
      className="floating-card"
      initial={{ x: 0, y: 0, scale: 0.65, opacity: 0, rotate: 0 }}
      animate={controls}
      whileHover={{
        scale: config.scale * 1.08,
        rotate: 0,
        zIndex: 100,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.22 },
      }}
    >
      <img src={src} alt="" className="card-media" />
    </motion.div>
  );
};

// Mobile Image Card
const MobileImageCard = ({ src, isActive, index, cardRef }) => {
  return (
    <motion.div
      ref={cardRef}
      className={`mobile-card ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <img src={src} alt="" className="mobile-card-media" />
      {isActive && <div className="active-indicator" />}
    </motion.div>
  );
};

// Hero Content Variants
const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0 },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Main Hero Component
export default function FloatingVideoHero() {
  const contentControls = useAnimationControls();
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-cycle images on mobile (two by two)
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 2) % imageSources.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Auto-scroll to center active image pair
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;

    const startIndex = Math.floor(activeImageIndex / 2) * 2;
    const firstCard = cardRefs.current[startIndex];
    const lastCard = cardRefs.current[startIndex + 1] || firstCard;

    if (!firstCard) return;

    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const pairLeft = firstCard.offsetLeft;
    const pairWidth = lastCard.offsetLeft + lastCard.offsetWidth - pairLeft;

    const scrollTo = pairLeft - (containerWidth / 2) + (pairWidth / 2);
    container.scrollTo({ left: scrollTo, behavior: 'smooth' });
  }, [activeImageIndex, isMobile]);

  // Generate random values for desktop floating
  const randomValues = useMemo(() =>
    cardConfigs.map(() => ({
      duration: 4 + Math.random() * 3,
      xAmp: 8 + Math.random() * 17,
      yAmp: 10 + Math.random() * 20,
      rotAmp: 2 + Math.random() * 4,
    })), []
  );

  // Content entry animation
  useEffect(() => {
    const timer = setTimeout(() => {
      contentControls.start('visible');
    }, isMobile ? 500 : 1500);
    return () => clearTimeout(timer);
  }, [contentControls, isMobile]);

  return (
    <section className={`hero-section ${isMobile ? 'mobile' : ''}`}>
      {/* Desktop: Floating Cards */}
      {!isMobile && (
        <div className="cards-container">
          {imageSources.map((src, index) => (
            <FloatingImageCard
              key={index}
              src={src}
              config={cardConfigs[index]}
              index={index}
              randomValues={randomValues[index]}
            />
          ))}
        </div>
      )}

      {/* Center Content */}
      <motion.div
        className="hero-content"
        variants={contentContainerVariants}
        initial="hidden"
        animate={contentControls}
      >
        <motion.h1 className="hero-heading" variants={contentItemVariants}>
          India's 1st Premium AI-Powered Image & Video Production Services
        </motion.h1>

        <motion.p className="hero-subheading" variants={contentItemVariants}>
          Turn scripts into stunning videos and visuals in days, not months. 70% Cost reduction, 10x faster — no studios or crews required.
        </motion.p>

        <motion.button className="hero-button" variants={contentItemVariants}>
          Talk to Our Expert
        </motion.button>
      </motion.div>

      {/* Mobile: Horizontal Image Row */}
      {isMobile && (
        <div className="mobile-images-container">
          <div className="mobile-images-row" ref={scrollContainerRef}>
            {imageSources.map((src, index) => {
              const isActive = Math.floor(index / 2) === Math.floor(activeImageIndex / 2);
              return (
                <MobileImageCard
                  key={index}
                  src={src}
                  isActive={isActive}
                  index={index}
                  cardRef={(el) => (cardRefs.current[index] = el)}
                />
              );
            })}
          </div>
          {/* Progress dots - mapped to pairs */}
          <div className="progress-dots">
            {[...Array(Math.ceil(imageSources.length / 2))].map((_, i) => (
              <button
                key={i}
                className={`dot ${Math.floor(activeImageIndex / 2) === i ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(i * 2)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,500&display=swap');

        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a24 50%, #0d0d14 100%);
        }

        /* Mobile Layout */
        .hero-section.mobile {
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 150px;
          gap: 60px;
        }

        /* Cards Container - Desktop */
        .cards-container {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        /* Floating Card - Desktop */
        .floating-card {
          position: absolute;
          width: 140px;
          aspect-ratio: 9 / 16;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 15px 50px -5px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 100, 255, 0.1);
          cursor: pointer;
          transition: box-shadow 0.22s ease;
        }

        .card-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform: scale(1.01);
        }

        /* Hero Content */
        .hero-content {
          position: relative;
          z-index: 50;
          text-align: center;
          max-width: 600px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .hero-heading {
          font-family: 'Inter', sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .heading-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
        }

        .hero-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #9ca3af;
          line-height: 1.6;
          margin: 0;
          max-width: 420px;
        }

        /* Mobile Images Container */
        .mobile-images-container {
          width: 100%;
          padding: 0 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .mobile-images-row {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 15px 0;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          width: 100%;
          justify-content: center;
        }

        .mobile-images-row::-webkit-scrollbar {
          display: none;
        }

        .mobile-card {
          flex-shrink: 0;
          width: calc(50% - 5px);
          aspect-ratio: 9 / 16;
          border-radius: 12px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          scroll-snap-align: center;
          position: relative;
          opacity: 0.65;
          transform: scale(0.96);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-card.active {
          opacity: 1;
          transform: scale(1.04);
          box-shadow: 0 12px 35px rgba(100, 100, 255, 0.3), 0 0 20px rgba(100, 100, 255, 0.2);
          z-index: 2;
        }

        .mobile-card-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          animation: progress 3s linear forwards;
        }

        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Progress Dots */
        .progress-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #6366f1;
          width: 24px;
          border-radius: 4px;
        }

        /* Responsive - Tablet */
        @media (max-width: 1024px) {
          .floating-card {
            width: 120px;
          }
        }

        /* Responsive - Mobile */
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 28px;
            padding: 0 20px;
          }
          .hero-subheading {
            font-size: 14px;
            padding: 0 20px;
          }
          .hero-content {
            padding: 1rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .hero-section.mobile {
            padding-top: 100px;
            gap: 40px;
          }
          .hero-heading {
            font-size: 24px;
          }
          .mobile-card {
            width: calc(50% - 5px);
          }
        }
      `}</style>
    </section>
  );
}