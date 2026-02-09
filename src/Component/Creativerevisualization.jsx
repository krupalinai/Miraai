import React, { useEffect, useRef, useState, useCallback } from 'react';
import aiGenerationImg from '../assets/ai genration.png';
import customizeImg from '../assets/customize and brand.png';
import inputVisionImg from '../assets/input your vision.png';
import reviewDeployImg from '../assets/review and deploy.png';
import buttonImg from '../assets/Button.png';

const features = [
  {
    id: 1,
    title: "AI Video Enhancer",
    desc: [
      "Upscale your low-resolution videos to 4K quality with advanced AI.",
      "Bring clarity and detail to every frame automatically.",
      "Professional results in seconds."
    ],
    img: aiGenerationImg,
  },
  {
    id: 2,
    title: "Smart Creative Assets",
    desc: [
      "Generate multiple variations of your marketing banners in one click.",
      "Stay brand-consistent while scaling your creative output.",
      "Designed for high-performance ads."
    ],
    img: customizeImg,
  },
  {
    id: 3,
    title: "Generative Fill & Expand",
    desc: [
      "Expand the boundaries of your photos or intelligently fill missing details.",
      "Fix composition errors and create formatting variations.",
      "Perfect for adapting content to different social platforms."
    ],
    img: inputVisionImg,
  },
  {
    id: 4,
    title: "Marketing Asset Generation",
    desc: [
      "Scale your production by generating dozens of variations from a single seed image.",
      "Test different styles, colors, and compositions to find the perfect",
      "high-performing creative."
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

      {/* Overlay: Color Image (Left Side) - Clipped */}
      <div className="cr-compare-overlay" style={{ width: `${sliderPos}%` }}>
        <img src={img} alt="" className="cr-compare-img cr-img-color" />
      </div>

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

export default function Creativerevisualization() {
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

  return (
    <section className="cr-scroll-track">
      <div className="cr-sticky-viewport">
        <div className="cr-wrap">
          <div className="cr-head">
            <div className="cr-title">Creative Revisualization</div>
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
                    <div className="cr-r-title">{feature.title}</div>
                    <div className="cr-r-desc">
                      {feature.desc.map((line, i) => (
                        <span key={i} className="cr-r-desc-line">{line}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button className="cr-try-btn" type="button" aria-label="Try it now">
                <img className="cr-button-img" src={buttonImg} alt="" />
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

        .cr-compare-overlay {
           position: absolute;
           top: 0;
           left: 0;
           height: 100%;
           overflow: hidden;
           z-index: 10;
           box-shadow: 1px 0 0 rgba(255,255,255,0.2) inset; 
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
          background: transparent;
          padding: 0;
          cursor: pointer;
          display: inline-block;
          max-width: 180px;
          transition: transform 0.2s, filter 0.2s;
        }

        .cr-try-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        .cr-button-img {
          width: 100%;
          height: auto;
        }

        @media (max-width: 980px) {
          .cr-scroll-track {
             min-height: auto;
          }
          .cr-sticky-viewport {
             position: relative;
             height: auto;
             padding: 60px 0;
             top: 0;
             display: block;
          }
          .cr-triggers { display: none; }
          
          .cr-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .cr-left { order: 1; }
          .cr-right { order: 0; margin: 0 auto; }
          
          .cr-text-group {
             position: relative;
             opacity: 1;
             transform: none;
          }
        }
      `}</style>
    </section>
  );
}
