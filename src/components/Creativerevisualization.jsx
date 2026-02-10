import React, { useEffect, useRef, useState, useCallback } from 'react';
import aiGenerationImg from '../assets/images/ai genration.png';
import customizeImg from '../assets/images/customize and brand.png';
import inputVisionImg from '../assets/images/input your vision.png';
import reviewDeployImg from '../assets/images/review and deploy.png';
import buttonImg from '../assets/images/Button.png';

const features = [
  {
    id: 1,
    title: "Online Image Converter",
    titleLines: ["Online Image", "Converter"],
    desc: [
      "Breathe Motion Into Still Images Convert Photos Into Captivating Animated Videos With AI-Powered Fluidity. Add Seamless Motion, Effects, And Emotion Effortlessly."
    ],
    img: aiGenerationImg,
  },
  {
    id: 2,
    title: "Smart Creative Assets",
    titleLines: ["Smart Creative", "Assets"],
    desc: [
      "Generate Multiple Variations Of Your Marketing Banners In One Click. Stay Brand-Consistent While Scaling Your Creative Output. Designed For High-Performance Ads."
    ],
    img: customizeImg,
  },
  {
    id: 3,
    title: "Generative Fill & Expand",
    titleLines: ["Generative Fill", "& Expand"],
    desc: [
      "Expand The Boundaries Of Your Photos Or Intelligently Fill Missing Details. Fix Composition Errors And Create Formatting Variations. Perfect For Adapting Content To Different Social Platforms."
    ],
    img: inputVisionImg,
  },
  {
    id: 4,
    title: "Marketing Asset Generation",
    titleLines: ["Marketing Asset", "Generation"],
    desc: [
      "Scale Your Production By Generating Dozens Of Variations From A Single Seed Image. Test Different Styles, Colors, And Compositions To Find The Perfect High-Performing Creative."
    ],
    img: reviewDeployImg,
  }
];

const ComparisonSlider = ({ img }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Mouse move handler
  const handleMove = useCallback((clientX) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPos(percentage);
    }
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      handleMove(e.touches[0].clientX);
    };

    const onEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [handleMove]);

  return (
    <div
      className="cr-compare-container"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Background: B&W Image (Right Side) */}
      <img src={img} alt="" className="cr-compare-img cr-img-bw" />

      {/* Overlay: Color Image (Left Side) - Clipped to be static */}
      <img
        src={img}
        alt=""
        className="cr-compare-img cr-img-color"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      />

      {/* Slider Line (Simple sleek line with button) */}
      <div className="cr-compare-line" style={{ left: `${sliderPos}%` }}>
        <div className="cr-compare-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Two Vertical Bars */}
            <path d="M10 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            {/* Left Triangle */}
            <path d="M6 12L9 9V15L6 12Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Right Triangle */}
            <path d="M18 12L15 9V15L18 12Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function Creativerevisualization({ openForm }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when the element is in the middle 20% of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    triggerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Mobile navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="cr-scroll-track">
      <div className="cr-sticky-viewport">
        <div className="cr-wrap">
          <div className="cr-head">
            <div className="cr-title"><span>Creative</span><span>Revisualization</span></div>
            <div className="cr-sub">
              Transform Your Existing Photos, Videos, And Creatives
              <br />
              Into High-Performing Marketing Assets Using AI.
            </div>
          </div>

          <div className="cr-grid">
            <div className="cr-left">
              <div className="cr-card-stack">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`cr-card-layer ${index === activeIndex ? 'active' : ''}`}
                    style={{ zIndex: index === activeIndex ? 10 : 1 }}
                  >
                    <div className="cr-card">
                      {feature.img ? (
                        <ComparisonSlider img={feature.img} />
                      ) : (
                        <div className="cr-img-placeholder" style={{ background: feature.gradient }}>
                          <span className="placeholder-number">{index + 1}</span>
                          <span className="placeholder-text">{feature.title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation Buttons */}
              <button className="cr-nav-btn cr-nav-prev" onClick={handlePrev} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="cr-nav-btn cr-nav-next" onClick={handleNext} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="cr-right">
              <div className="cr-progress" aria-hidden="true">
                <div
                  className="cr-progress-fill"
                  style={{
                    transform: `translateX(${activeIndex * 100}%)`,
                    width: `${100 / features.length}%`
                  }}
                />
              </div>

              <div className="cr-content-display">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`cr-text-group ${index === activeIndex ? 'active' : ''}`}
                  >
                    <div className="cr-r-title">
                      {feature.titleLines ? (
                        feature.titleLines.map((line, i) => (
                          <span key={i} className="cr-r-title-line">{line}</span>
                        ))
                      ) : (
                        feature.title
                      )}
                    </div>
                    <div className="cr-r-desc">
                      {feature.desc.map((line, i) => (
                        <span key={i} className="cr-r-desc-line">{line}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button className="cr-try-btn" type="button" aria-label="Try it now" onClick={openForm}>
                <span className="cr-btn-star">✦</span>
                <span className="cr-btn-text">Try It Now</span>
                <span className="cr-btn-star">✦</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cr-triggers">
        {features.map((_, index) => (
          <div
            key={index}
            ref={(el) => (triggerRefs.current[index] = el)}
            data-index={index}
            className="cr-scroll-trigger"
          />
        ))}
      </div>

      <style>{`
        .cr-scroll-track {
          position: relative;
          width: 100%;
          min-height: 400vh;
          background: #000;
        }

        .cr-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cr-triggers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cr-scroll-trigger {
          height: 80vh;
          width: 100%;
        }

        .cr-wrap {
          width: 100%;
          padding: 0 18px;
          max-width: 1280px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        .cr-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(880px 380px at 18% 58%, rgba(139, 92, 246, 0.14) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(900px 420px at 70% 35%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: -1;
        }

        .cr-head {
          text-align: center;
          margin-bottom: 60px;
          transition: opacity 0.3s;
        }

        .cr-title {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 0.95);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0 10px;
        }

        .cr-title span {
          display: inline-block;
        }

        .cr-sub {
          margin-top: 10px;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
        }

        .cr-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .cr-left {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .cr-card-stack {
           position: relative;
           width: 100%;
           max-width: 520px;
           aspect-ratio: 1/1;
        }

        .cr-card-layer {
           position: absolute;
           inset: 0;
           width: 100%;
           height: 100%;
           opacity: 0;
           transform: scale(0.95) translateY(20px);
           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cr-card-layer.active {
           opacity: 1;
           transform: scale(1) translateY(0);
           pointer-events: auto;
        }
        
        .cr-card-layer:not(.active) {
            pointer-events: none;
        }

        .cr-card {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.85);
          position: relative;
        }

        .cr-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(90% 80% at 50% 35%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%);
          pointer-events: none;
          z-index: 2;
        }

        /* Comparison Slider Styles */
        .cr-compare-container {
           position: relative;
           width: 100%;
           height: 100%;
           cursor: ew-resize;
           user-select: none;
           touch-action: pan-y;
        }

        .cr-compare-img {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           object-fit: cover;
           pointer-events: none;
        }

        .cr-img-bw {
           filter: grayscale(100%);
        }

        .cr-img-color {
           z-index: 10;
        }

        .cr-compare-line {
           position: absolute;
           top: 0;
           bottom: 0;
           width: 2px;
           background: #fff;
           z-index: 20;
           box-shadow: 0 0 10px rgba(0,0,0,0.3);
           pointer-events: none;
           transform: translateX(-50%);
        }
        
        .cr-compare-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 44px;
            height: 44px;
            /* Gradient matching reference: Purple/Pink mix */
            background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
            border: 2px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            z-index: 25;
        }

        /* ========================================
           NAVIGATION BUTTONS (Mobile Only)
        ======================================== */
        .cr-nav-btn {
          display: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          background: transparent;
          border: 1.5px solid #8b5cf6;
          border-radius: 50%;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          color: #8b5cf6;
        }

        .cr-nav-btn:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: #a78bfa;
          color: #a78bfa;
          transform: translateY(-50%) scale(1.1);
        }

        .cr-nav-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .cr-nav-prev {
          left: -60px;
        }

        .cr-nav-next {
          right: -60px;
        }

        .cr-right {
          max-width: 520px;
        }

        .cr-progress {
          width: 100%;
          height: 4px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          overflow: hidden;
          margin-bottom: 30px;
        }

        .cr-progress-fill {
          height: 100%;
          background: #8b5cf6;
          border-radius: 999px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cr-content-display {
           position: relative;
           min-height: 150px;
           display: grid;
           grid-template-columns: 1fr;
        }

        .cr-text-group {
           grid-area: 1 / 1;
           opacity: 0;
           transform: translateY(10px);
           pointer-events: none;
           transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .cr-text-group.active {
           opacity: 1;
           transform: translateY(0);
           pointer-events: auto;
           position: relative;
        }
        
        .cr-r-title {
          font-size: 26px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 0 8px;
        }

        .cr-r-title-line {
          display: inline-block;
        }

        .cr-r-desc {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
        }

        .cr-r-desc-line {
          display: block;
        }

        .cr-try-btn {
          margin-top: 40px;
          border: 0;
          background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%);
          padding: 14px 28px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          transition: transform 0.2s, filter 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
        }

        .cr-try-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(139, 92, 246, 0.5);
        }

        .cr-btn-star {
          font-size: 14px;
          color: #fff;
        }

        .cr-btn-text {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.3px;
        }

        /* ========================================
           RESPONSIVE - Tablet (max-width: 980px)
        ======================================== */
        @media (max-width: 980px) {
          .cr-scroll-track {
            min-height: auto;
          }

          .cr-sticky-viewport {
            position: relative;
            height: auto;
            padding: 50px 0;
            top: 0;
            display: block;
          }

          .cr-triggers {
            display: none;
          }

          .cr-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }

          .cr-left {
            order: 0;
          }

          .cr-right {
            order: 1;
            margin: 0 auto;
          }

          .cr-text-group {
            transform: none;
          }

          .cr-text-group.active {
            opacity: 1;
            transform: none;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .cr-wrap {
            padding: 0 16px;
          }

          .cr-head {
            margin-bottom: 32px;
          }

          .cr-title {
            font-size: 32px;
            line-height: 1.15;
            flex-direction: column;
            gap: 0;
          }

          .cr-title span {
            display: block;
          }

          .cr-sub {
            font-size: 13px;
            line-height: 1.55;
            margin-top: 12px;
            padding: 0 10px;
          }

          .cr-sub br {
            display: none;
          }

          .cr-grid {
            gap: 28px;
          }

          .cr-card-stack {
            max-width: 100%;
            aspect-ratio: 4/3;
          }

          .cr-card {
            border-radius: 14px;
          }

          .cr-compare-button {
            width: 40px;
            height: 40px;
          }

          .cr-compare-button svg {
            width: 20px;
            height: 20px;
          }

          /* Show navigation buttons on mobile */
          .cr-nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
          }

          .cr-nav-prev {
            left: 8px;
          }

          .cr-nav-next {
            right: 8px;
          }

          .cr-right {
            max-width: 100%;
            width: 100%;
            text-align: left;
            padding: 0 4px;
            overflow: hidden;
          }

          .cr-progress {
            height: 5px;
            margin-bottom: 20px;
          }

          .cr-content-display {
            min-height: auto;
            width: 100%;
            overflow: hidden;
          }

          .cr-r-title {
            font-size: 24px;
            margin-bottom: 16px;
            font-weight: 800;
            line-height: 1.2;
            flex-direction: column;
            gap: 0;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
          }

          .cr-r-title-line {
            display: block;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .cr-r-desc {
            font-size: 14px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.65);
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
          }

          .cr-r-desc-line {
            display: inline;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .cr-try-btn {
            margin-top: 28px;
            padding: 12px 24px;
          }

          .cr-btn-star {
            font-size: 12px;
          }

          .cr-btn-text {
            font-size: 13px;
          }
        }

        /* ========================================
           RESPONSIVE - Small Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .cr-sticky-viewport {
            padding: 40px 0;
          }

          .cr-wrap {
            padding: 0 14px;
          }

          .cr-head {
            margin-bottom: 28px;
          }

          .cr-title {
            font-size: 28px;
          }

          .cr-sub {
            font-size: 12px;
            padding: 0 8px;
          }

          .cr-grid {
            gap: 24px;
          }

          .cr-card-stack {
            aspect-ratio: 4/3;
          }

          .cr-card {
            border-radius: 12px;
          }

          .cr-compare-button {
            width: 36px;
            height: 36px;
          }

          .cr-compare-button svg {
            width: 18px;
            height: 18px;
          }

          .cr-nav-btn {
            width: 32px;
            height: 32px;
          }
          
          .cr-nav-btn svg {
            width: 16px;
            height: 16px;
          }

          .cr-nav-prev {
            left: 4px;
          }

          .cr-nav-next {
            right: 4px;
          }

          .cr-progress {
            height: 4px;
            margin-bottom: 16px;
          }

          .cr-r-title {
            font-size: 22px;
            margin-bottom: 14px;
          }

          .cr-r-desc {
            font-size: 13px;
            line-height: 1.55;
          }

          .cr-try-btn {
            margin-top: 24px;
            padding: 11px 22px;
          }

          .cr-btn-star {
            font-size: 11px;
          }

          .cr-btn-text {
            font-size: 12px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .cr-sticky-viewport {
            padding: 32px 0;
          }

          .cr-wrap {
            padding: 0 12px;
          }

          .cr-head {
            margin-bottom: 24px;
          }

          .cr-title {
            font-size: 24px;
          }

          .cr-sub {
            font-size: 11px;
            line-height: 1.5;
            padding: 0 4px;
            margin-top: 10px;
          }

          .cr-grid {
            gap: 20px;
          }

          .cr-card {
            border-radius: 10px;
          }

          .cr-compare-button {
            width: 32px;
            height: 32px;
          }

          .cr-compare-button svg {
            width: 16px;
            height: 16px;
          }

          .cr-nav-btn {
            width: 28px;
            height: 28px;
          }

          .cr-nav-btn svg {
            width: 14px;
            height: 14px;
          }

          .cr-nav-prev {
            left: 2px;
          }

          .cr-nav-next {
            right: 2px;
          }

          .cr-progress {
            margin-bottom: 14px;
          }

          .cr-r-title {
            font-size: 20px;
            margin-bottom: 12px;
          }

          .cr-r-desc {
            font-size: 12px;
          }

          .cr-try-btn {
            margin-top: 20px;
            padding: 10px 20px;
          }

          .cr-btn-star {
            font-size: 10px;
          }

          .cr-btn-text {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
