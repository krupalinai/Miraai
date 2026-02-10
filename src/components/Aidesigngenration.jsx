import React, { useState, useEffect, useRef } from 'react';

export default function Aidesigngenration() {
  // Video cards data
  const videoCards = [
    { id: 1, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 2, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 3, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 4, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 5, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 6, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
  ];

  // Triple cards for seamless JS-based infinite scroll
  const cards = [...videoCards, ...videoCards, ...videoCards];

  const [isPaused, setIsPaused] = useState(false);
  const railRef = useRef(null);

  // Auto-scroll logic (Step-based for better compatibility with scroll-snap)
  useEffect(() => {
    let interval;
    const getCardWidth = () => {
      const width = window.innerWidth;
      if (width <= 680) return 260 + 20;
      return 280 + 24;
    };

    if (!isPaused) {
      interval = setInterval(() => {
        if (railRef.current) {
          const rail = railRef.current;
          const cardPlusGap = getCardWidth();

          // Scroll to next card
          rail.scrollLeft += cardPlusGap;

          const oneSetWidth = videoCards.length * cardPlusGap;
          // Loop logic: when user reaches the end of the second set, snap back to the start of the second set
          if (rail.scrollLeft >= oneSetWidth * 2) {
            setTimeout(() => {
              if (railRef.current) {
                railRef.current.style.scrollBehavior = 'auto';
                railRef.current.scrollLeft = oneSetWidth;
                railRef.current.style.scrollBehavior = 'smooth';
              }
            }, 600); // Wait for the smooth scroll to finish before snapping
          }
        }
      }, 2500); // Scroll every 2.5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // Initial positioning: start in the middle (second set)
  useEffect(() => {
    if (railRef.current) {
      const getCardWidth = () => {
        const width = window.innerWidth;
        if (width <= 680) return 260 + 20;
        return 280 + 24;
      };
      const cardPlusGap = getCardWidth();
      railRef.current.scrollLeft = videoCards.length * cardPlusGap;
    }
  }, []);

  const renderVideoCard = (card, index) => (
    <div key={`${card.id}-${index}`} className="adg-card-wrapper">
      <div className="adg-video-card">
        {/* Video Container */}
        <div className="adg-video-container">
          <video
            className="adg-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Card Overlay Content */}
          <div className="adg-card-overlay">
            {/* Top Section - Profile & Title */}
            <div className="adg-card-top">
              <div className="adg-profile-section">
                <div className="adg-profile-icon">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=jewellery"
                    alt="Profile"
                    className="adg-profile-img"
                  />
                </div>
                <span className="adg-profile-label">Jewellery Tips</span>
              </div>
              <div className="adg-growth-badge">{card.growth}</div>
            </div>

            {/* Center Title */}
            <div className="adg-card-center">
              <h3 className="adg-card-title">{card.title}</h3>
            </div>

            {/* Bottom Section - Stats */}
            <div className="adg-card-bottom">
              <span className="adg-views">{card.views}</span>
              <span className="adg-growth-bottom">{card.growth}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="adg-wrap">
      <div className="adg-inner">
        {/* Header */}
        <header className="adg-head">
          <h2 className="adg-title">AI Design Generation</h2>
          <p className="adg-sub">
            Turn Ideas And Descriptions Into Professional Ads And Visuals Instantly Using AI
          </p>
        </header>

        {/* Video Cards Carousel */}
        <div
          className="adg-carousel"
          ref={railRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="adg-carousel-track">
            {cards.map((card, index) => renderVideoCard(card, index))}
          </div>
        </div>
      </div>

      <style>{`
        .adg-wrap {
          width: 100%;
          padding: 80px 0 100px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .adg-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(760px 420px at 32% 30%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(840px 460px at 72% 54%, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 64%);
          pointer-events: none;
          z-index: 0;
        }

        .adg-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
        }

        .adg-head {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 20px;
        }

        .adg-title {
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
        }

        .adg-sub {
          margin-top: 16px;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Carousel Styles */
        .adg-carousel {
          width: 100%;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 20px 0;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
          cursor: grab;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .adg-carousel:active {
          cursor: grabbing;
        }

        .adg-carousel::-webkit-scrollbar {
          display: none;
        }

        .adg-carousel-track {
          display: flex;
          gap: 24px;
          width: max-content;
          padding: 0 40px;
        }

        /* Card Wrapper */
        .adg-card-wrapper {
          flex-shrink: 0;
          position: relative;
          scroll-snap-align: center;
        }

        /* Video Card Styles */
        .adg-video-card {
          position: relative;
          width: 280px;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          border: 2px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.75);
          transform: scale(0.95);
          opacity: 0.8;
          transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border 300ms ease,
                      box-shadow 300ms ease,
                      opacity 300ms ease;
        }

        .adg-card-wrapper:hover .adg-video-card {
          transform: scale(1.05);
          border: 3px solid #7c3aed;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(124, 58, 237, 0.4);
          opacity: 1;
        }

        .adg-video-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .adg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .adg-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px;
          background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.8) 100%);
          z-index: 2;
        }

        .adg-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .adg-profile-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .adg-profile-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .adg-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .adg-profile-label {
          font-size: 11px;
          font-weight: 600;
          color: #fff;
        }

        .adg-growth-badge {
          background: rgba(34, 197, 94, 0.3);
          color: #4ade80;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        .adg-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          text-align: center;
        }

        .adg-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .adg-views {
          font-size: 13px;
          color: #fff;
        }

        .adg-growth-bottom {
          color: #4ade80;
          font-size: 11px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .adg-title { font-size: 36px; }
          .adg-video-card { width: 240px; height: 340px; }
        }

        @media (max-width: 680px) {
          .adg-wrap { padding: 60px 0 80px; }
          .adg-title { font-size: 32px; }
          .adg-carousel-track { padding: 0 40px; gap: 20px; }
          .adg-video-card { width: 260px; height: 380px; opacity: 1; transform: scale(1); }
          .adg-card-title { font-size: 20px; }
        }

        @media (max-width: 480px) {
          .adg-title { font-size: 28px; }
          .adg-carousel-track { padding: 0 30px; }
        }
      `}</style>
    </section>
  );
}
