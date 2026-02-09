
import React, { useEffect, useRef, useState } from 'react';

import textileImg from '../assets/Textile.png';
import lifestyleImg from '../assets/Lifestyle.png';
import jwelleryImg from '../assets/Jwellery.png';

const originalCards = [
  {
    title: 'Textile & Garments',
    subtitle: '(Clothing Brands, Fabric Manufacturers,\nFashion Houses, Boutique Designers)',
    image: textileImg,
  },
  {
    title: 'Lifestyle & Fashion Brands',
    subtitle: '(Clothing, Shoes, Bags, Watches,\nCosmetics, Perfumes)',
    image: lifestyleImg,
  },
  {
    title: 'Jewellery & Diamonds',
    subtitle: '(Gold Jewellery, Diamond Jewellery, Silver\nJewellery, Gemstones, Luxury Watches)',
    image: jwelleryImg,
  },
  {
    title: 'Real Estate & Property',
    subtitle: '(Property Developers, Architects,\nInterior Designers, Real Estate Agents)',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop',
  },
  {
    title: 'Food & Beverage',
    subtitle: '(Restaurants, Cafes, Food Brands,\nBeverage Companies, Catering)',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop',
  },
  {
    title: 'Automobile & Vehicles',
    subtitle: '(Car Dealerships, Auto Brands,\nMotorcycle Companies, Luxury Vehicles)',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=800&fit=crop',
  },
];

// Combine cards for infinite effect
const cards = [...originalCards, ...originalCards, ...originalCards];

export default function UsesMiraai() {
  const [isPaused, setIsPaused] = useState(false);
  const railRef = useRef(null);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (railRef.current) {
          const rail = railRef.current;
          const cardPlusGap = 350; // card width (320) + gap (30)

          // Smoothly scroll to next
          rail.scrollLeft += cardPlusGap;

          // If reached near the end of the second set, jump back to the first set
          // to create an infinite loop without the user noticing.
          const oneSetWidth = originalCards.length * cardPlusGap;
          if (rail.scrollLeft >= oneSetWidth * 2) {
            // Wait for smooth scroll to finish, then snap back
            setTimeout(() => {
              rail.style.scrollBehavior = 'auto';
              rail.scrollLeft = oneSetWidth;
              rail.style.scrollBehavior = 'smooth';
            }, 600);
          }
        }
      }, 2000); // 2 Seconds interval
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // Initial setup: start at the second set for seamless loop
  useEffect(() => {
    if (railRef.current) {
      const cardPlusGap = 350;
      railRef.current.scrollLeft = originalCards.length * cardPlusGap;
    }
  }, []);

  return (
    <section className="um-wrap">
      <div className="um-header">
        <div className="um-title">Who Uses Miraai</div>
        <div className="um-subtitle">
          Industries That Use Miraai To Reduce Production Costs And Scale High-Quality Content.
        </div>
      </div>

      <div className="um-container">
        <div
          className="um-rail"
          ref={railRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className="um-card"
            >
              <img className="um-img" src={card.image} alt="" />
              <div className="um-overlay" aria-hidden="true" />
              <div className="um-text">
                <div className="um-card-title">{card.title}</div>
                <div className="um-card-subtitle">{card.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .um-wrap {
          width: 100%;
          padding: 60px 0 80px;
          background: #000;
          color: #e9e9ee;
          font-family: 'Urbanist', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }

        .um-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .um-title {
          font-size: 34px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .um-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .um-container {
          width: 100%;
          position: relative;
          /* Fade edges for premium feel */
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .um-rail {
          display: flex;
          gap: 30px;
          overflow-x: hidden;
          padding: 30px 0;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .um-rail::-webkit-scrollbar {
          display: none;
        }

        .um-card {
          position: relative;
          width: 320px;
          height: 420px;
          border-radius: 28px;
          overflow: hidden;
          flex: 0 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), 
                      border 0.3s ease, 
                      box-shadow 0.3s ease;
          background: #111;
        }

        .um-card:hover {
          transform: translateY(-15px);
          border: 5px solid #7c3aed;
          box-shadow: 0 25px 50px rgba(124, 58, 237, 0.25);
          z-index: 10;
        }

        .um-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .um-card:hover .um-img {
          transform: scale(1.15);
        }

        .um-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
        }

        .um-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px;
          text-align: center;
          transform: translateY(0);
          transition: transform 0.4s ease;
        }

        .um-card:hover .um-text {
          transform: translateY(-5px);
        }

        .um-card-title {
          font-size: 19px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }

        .um-card-subtitle {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          white-space: pre-line;
        }

        @media (max-width: 768px) {
          .um-wrap { padding: 40px 0 60px; }
          .um-title { font-size: 28px; }
          .um-card { width: 280px; height: 360px; }
          .um-rail { gap: 20px; }
        }
      `}</style>
    </section>
  );
}
