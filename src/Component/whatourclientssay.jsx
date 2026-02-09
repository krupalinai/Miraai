import React, { useState, useRef } from 'react';

export default function Whatourclientssay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "“Miraai transformed our content production process. We went from spending ₹25 lakh on regional campaigns to ₹1 lakh-with better results. Our internal team now manages everything without vendor dependencies. This is a game-changer for enterprise marketing.”",
      role: "Marketing Director",
      brand: "FMCG Brand"
    },
    {
      id: 2,
      quote: "“Our agency can now take on 5x more clients without hiring additional editors or production staff. Miraai handles the heavy lifting while our creatives focus on strategy and storytelling. ROI has been incredible.”",
      role: "Creative Lead",
      brand: "Ad Agency"
    },
    {
      id: 3,
      quote: "“The scale at which we can now iterate on our video ads is mind-blowing. What used to take a week of back-and-forth now happens in a single afternoon. Miraai's AI understands our brand voice perfectly.”",
      role: "Brand Manager",
      brand: "E-commerce Giant"
    },
    {
      id: 4,
      quote: "“Miraai has democratized high-quality video production for us. Even our junior designers can now create stunning visual assets that look like they were made by a top-tier production house. Outstanding technology.”",
      role: "Head of Marketing",
      brand: "Fintech Startup"
    },
    {
      id: 5,
      quote: "“We've seen a 40% increase in social engagement since we started using Miraai for our daily content. The ability to localize our message instantly across 10 regions has been a massive competitive advantage.”",
      role: "Digital Strategist",
      brand: "Global Fashion Retailer"
    }
  ];

  const nextSlide = () => {
    // Show 2 cards at a time on desktop, so max index is length - 2
    // If on mobile (1 card), max index is length - 1
    const maxIndex = window.innerWidth > 980 ? testimonials.length - 2 : testimonials.length - 1;
    setCurrentIndex(prev => Math.min(prev + 1, Math.max(0, maxIndex)));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="wcs-wrap">
      <div className="wcs-inner">
        <div className="wcs-head">
          <div className="wcs-title">What Our Clients Say</div>
          <div className="wcs-sub">
            Trusted By Forward-Thinking Teams For Reliable, Intelligent, And
            <br />
            High-Impact Creative Production.
          </div>
        </div>

        <div className="wcs-stage">
          <div className="wcs-viewport">
            <div
              className="wcs-track"
              ref={trackRef}
              style={{ transform: `translateX(calc(-${currentIndex * (window.innerWidth > 980 ? 50 : 100)}% - ${currentIndex * (window.innerWidth > 980 ? 30 : 0)}px))` }}
            >
              {testimonials.map((t) => (
                <article key={t.id} className="wcs-card">
                  <div className="wcs-quote">{t.quote}</div>
                  <div className="wcs-role">{t.role}</div>
                  <div className="wcs-brand">{t.brand}</div>
                </article>
              ))}
            </div>
          </div>

          <div className="wcs-nav">
            <button
              className={`wcs-nav-btn ${currentIndex === 0 ? 'disabled' : ''}`}
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className={`wcs-nav-btn ${currentIndex >= (window.innerWidth > 980 ? testimonials.length - 2 : testimonials.length - 1) ? 'disabled' : ''}`}
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .wcs-wrap {
          width: 100%;
          padding: 90px 18px 90px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .wcs-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(760px 520px at 42% 30%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(780px 520px at 75% 70%, rgba(139, 92, 246, 0.08) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .wcs-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .wcs-head {
          text-align: center;
          margin-bottom: 52px;
        }

        .wcs-title {
          font-size: 44px;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 0.95);
        }

        .wcs-sub {
          margin-top: 12px;
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.55);
        }

        .wcs-stage {
          position: relative;
          width: 100%;
        }

        .wcs-viewport {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        .wcs-track {
          display: flex;
          gap: 60px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .wcs-card {
          flex: 0 0 calc(50% - 30px);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 32px 34px 28px;
          box-shadow: 0 26px 90px rgba(0, 0, 0, 0.86);
          min-height: 220px;
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.06);
          transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border 300ms ease,
                      box-shadow 300ms ease;
        }

        .wcs-card:hover {
          transform: scale(1.02);
          border: 2px solid #7c3aed;
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.9),
            0 0 30px rgba(124, 58, 237, 0.3);
        }

        .wcs-quote {
          position: relative;
          z-index: 1;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          text-align: center;
        }

        .wcs-role {
          position: relative;
          z-index: 1;
          margin-top: 24px;
          font-size: 13px;
          font-weight: 700;
          color: #a78bfa;
          text-align: center;
        }

        .wcs-brand {
          position: relative;
          z-index: 1;
          margin-top: 6px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
        }

        .wcs-nav {
          position: absolute;
          right: 0;
          bottom: -40px; /* Moved further down */
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .wcs-nav-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: transparent;
          border: 2px solid #2d1b54;
          color: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .wcs-nav-btn:hover:not(.disabled) {
          border-color: #7c3aed;
          background: rgba(124, 58, 237, 0.1);
        }

        .wcs-nav-btn.disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        .wcs-nav-btn svg {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 980px) {
          .wcs-nav {
            position: relative;
            bottom: 0;
            margin-top: 24px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
