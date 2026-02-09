import React, { useState } from 'react';

export default function Aidesigngenration() {
  const [isPaused, setIsPaused] = useState(false);
  // Video cards data - using a default placeholder video
  const videoCards = [
    { id: 1, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 2, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 3, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 4, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 5, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
    { id: 6, title: 'Jewellery Tips', growth: '+22%', views: '+11M' },
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...videoCards, ...videoCards];

  const renderVideoCard = (card, index) => (
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

        {/* Video Cards Carousel - Infinite Scroll */}
        <div
          className="adg-carousel"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className={`adg-carousel-track ${isPaused ? 'is-paused' : ''}`}>
            {duplicatedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="adg-card-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {renderVideoCard(card, index)}
              </div>
            ))}
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
            radial-gradient(760px 520px at 32% 30%, rgba(139, 92, 246, 0.18) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(840px 560px at 72% 54%, rgba(139, 92, 246, 0.12) 0%, rgba(0, 0, 0, 0) 64%);
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
          padding: 30px 0;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }

        .adg-carousel::-webkit-scrollbar {
          display: none;
        }

        .adg-carousel-track {
          display: flex;
          gap: 24px;
          animation: adgScroll 40s linear infinite;
          width: max-content;
          padding: 0 40px;
        }

        .adg-carousel-track:hover,
        .adg-carousel-track.is-paused {
          animation-play-state: paused;
        }

        @keyframes adgScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }

        /* Card Wrapper - Like UsesMiraai */
        .adg-card-wrapper {
          flex-shrink: 0;
          position: relative;
          cursor: pointer;
          scroll-snap-align: center;
        }

        /* Video Card Styles - Like UsesMiraai .um-card */
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

        /* Hover/Select State - Dark Purple Border + Pop Up (Like UsesMiraai .um-card--active) */
        .adg-card-wrapper:hover .adg-video-card {
          transform: scale(1.05);
          border: 3px solid #7c3aed;
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.9),
            0 0 40px rgba(124, 58, 237, 0.4);
          opacity: 1;
          z-index: 10;
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
          object-position: center;
        }

        /* Card Overlay */
        .adg-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0) 70%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 2;
        }

        /* Top Section */
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .adg-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .adg-profile-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .adg-growth-badge {
          background: rgba(34, 197, 94, 0.25);
          color: #4ade80;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        /* Center Section */
        .adg-card-center {
          text-align: center;
        }

        .adg-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
          line-height: 1.3;
        }

        /* Bottom Section */
        .adg-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .adg-views {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .adg-growth-bottom {
          background: rgba(34, 197, 94, 0.25);
          color: #4ade80;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .adg-title { font-size: 36px; }
          .adg-sub { font-size: 14px; }
          .adg-video-card { width: 240px; height: 340px; }
          .adg-card-title { font-size: 18px; }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .adg-wrap { padding: 60px 0 80px; }
          .adg-inner { max-width: 100%; }
          .adg-head {
            margin-bottom: 50px;
            padding: 0 16px;
          }
          .adg-title { font-size: 32px; }
          .adg-sub {
            font-size: 13px;
            line-height: 1.6;
            margin-top: 14px;
            max-width: 100%;
            padding: 0 10px;
          }
          .adg-carousel {
            padding: 16px 0;
          }
          .adg-carousel-track { padding: 0 40px; }
          .adg-video-card { width: 260px; height: 380px; opacity: 1; transform: scale(1); }
          .adg-card-overlay {
            padding: 14px;
          }
          .adg-profile-icon {
            width: 26px;
            height: 26px;
          }
          .adg-profile-label {
            font-size: 10px;
          }
          .adg-growth-badge {
            font-size: 10px;
            padding: 3px 9px;
          }
          .adg-card-title { font-size: 20px; }
          .adg-views {
            font-size: 12px;
          }
          .adg-growth-bottom {
            font-size: 10px;
            padding: 3px 9px;
          }
        }

        /* ========================================
           RESPONSIVE - Small Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .adg-wrap {
            padding: 60px 0 80px;
          }
          .adg-head {
            margin-bottom: 44px;
            padding: 0 14px;
          }
          .adg-title { font-size: 28px; }
          .adg-sub {
            font-size: 12px;
            padding: 0 8px;
            margin-top: 12px;
          }
          .adg-carousel {
            padding: 14px 0;
          }
          .adg-carousel-track { padding: 0 30px; }
          .adg-video-card { width: 260px; height: 380px; }
          .adg-card-overlay {
            padding: 12px;
          }
          .adg-profile-icon {
            width: 24px;
            height: 24px;
          }
          .adg-profile-label {
            font-size: 9px;
          }
          .adg-growth-badge {
            font-size: 9px;
            padding: 3px 8px;
          }
          .adg-card-title { font-size: 20px; }
          .adg-views {
            font-size: 11px;
          }
          .adg-growth-bottom {
            font-size: 9px;
            padding: 3px 8px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .adg-wrap {
            padding: 50px 0 70px;
          }
          .adg-head {
            margin-bottom: 40px;
            padding: 0 12px;
          }
          .adg-title { font-size: 24px; }
          .adg-sub {
            font-size: 11px;
            line-height: 1.55;
            padding: 0 4px;
            margin-top: 10px;
          }
          .adg-carousel {
            padding: 12px 0;
          }
          .adg-carousel-track { padding: 0 30px; }
          .adg-video-card { width: 260px; height: 380px; }
          .adg-card-overlay {
            padding: 10px;
          }
          .adg-profile-icon {
            width: 22px;
            height: 22px;
          }
          .adg-profile-label {
            font-size: 8px;
          }
          .adg-growth-badge {
            font-size: 8px;
            padding: 2px 7px;
          }
          .adg-card-title { font-size: 16px; }
          .adg-views {
            font-size: 10px;
          }
          .adg-growth-bottom {
            font-size: 8px;
            padding: 2px 7px;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .adg-video-card {
            transition: none;
          }
          
          .adg-carousel-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
