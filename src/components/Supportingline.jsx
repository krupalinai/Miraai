
import React from 'react';

import aiGenerationImg from '../assets/images/ai genration.png';
import customizeBrandImg from '../assets/images/customize and brand.png';
import inputYourVisionImg from '../assets/images/input your vision.png';
import reviewDeployImg from '../assets/images/review and deploy.png';

const stepImages = {
  1: inputYourVisionImg,
  2: customizeBrandImg,
  3: aiGenerationImg,
  4: reviewDeployImg,
};

const steps = [
  {
    number: 1,
    title: 'Input Your Vision',
    subtitle: 'Start With A Snap Of Concept',
    description:
      'Paste Your Script, Upload A Brief, Or Use Our AI Assistant To Create One\nFrom Scratch. Miraai Breaks It Into Scenes Automatically And Suggests\nVisual Treatments.',
    side: 'right',
  },
  {
    number: 2,
    title: 'Customize & Brand',
    subtitle: 'Make It Uniquely Yours',
    description:
      'Select Templates, Customize Colors, Fonts, And Visual Styles To Match Your\nBrand Guidelines. Upload Logos, Set Tone Preferences, Choose Virtual\nCharacters.',
    side: 'left',
  },
  {
    number: 3,
    title: 'AI Generation',
    subtitle: 'Let AI Work Its Magic',
    description:
      'Miraai Generates Your Video With Professional Editing, Effects, Color\nGrading, And Audio. Localize Into Multiple Languages With One Click. Wait\nMinutes, Not Weeks.',
    side: 'right',
  },
  {
    number: 4,
    title: 'Review & Deploy',
    subtitle: 'Refine And Publish',
    description:
      'Review Your Content, Make Any Final Adjustments, Get Team Approvals,\nAnd Export In Your Preferred Formats. Deploy Across All Channels Instantly.',
    side: 'left',
  },
];

export default function Supportingline() {
  return (
    <section className="sl-wrap">
      <div className="sl-header">
        <div className="sl-title">Supporting Line</div>
        <div className="sl-subtitle">Simple. Fast. Scalable.</div>
      </div>

      <div className="sl-timeline">
        {/* Central Timeline Line with Energy Flow */}
        <div className="sl-line" aria-hidden="true">
          <div className="sl-line-glow"></div>
        </div>

        {steps.map((step) => (
          <div
            key={step.number}
            className={`sl-row ${step.side === 'left' ? 'is-left' : 'is-right'}`}
          >
            {step.side === 'left' ? (
              <>
                <div className="sl-spacer" />
                {/* Card with Border Tracing Effect */}
                <div className="sl-card-wrapper">
                  <div className="sl-border-trace"></div>
                  <div className="sl-card" aria-hidden="true">
                    {stepImages[step.number] ? (
                      <img className="sl-card-img" src={stepImages[step.number]} alt="" />
                    ) : null}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Card with Border Tracing Effect */}
                <div className="sl-card-wrapper">
                  <div className="sl-border-trace"></div>
                  <div className="sl-card" aria-hidden="true">
                    {stepImages[step.number] ? (
                      <img className="sl-card-img" src={stepImages[step.number]} alt="" />
                    ) : null}
                  </div>
                </div>
                <div className="sl-spacer" />
              </>
            )}

            <div className={`sl-marker ${step.number === 1 ? 'is-active' : ''}`}>
              <span className="sl-marker-inner">{step.number}</span>
            </div>

            <div
              className={`sl-content ${step.side === 'left' ? 'content-left' : 'content-right'}`}
            >
              <div className="sl-content-title">{step.title}</div>
              <div className="sl-content-subtitle">{step.subtitle}</div>
              <div className="sl-content-desc">{step.description}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sl-wrap {
          width: 100%;
          min-height: 100vh;
          padding: 34px 18px 60px;
          background: #000;
          color: #e9e9ee;
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        .sl-header {
          text-align: center;
          margin-bottom: 26px;
        }

        .sl-title {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.2px;
          color: #f3f3f6;
        }

        .sl-subtitle {
          margin-top: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.62);
        }

        .sl-timeline {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
          padding: 8px 0 12px;
        }

        /* ========================================
           ENERGY FLOW - Central Timeline Line
        ======================================== */
        .sl-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          transform: translateX(-50%);
          background: rgba(120, 70, 255, 0.15);
          border-radius: 999px;
          z-index: 1;
          overflow: hidden;
        }

        .sl-line-glow {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(120, 70, 255, 0.3) 10%,
            rgba(168, 85, 247, 0.9) 30%,
            #a855f7 50%,
            rgba(168, 85, 247, 0.9) 70%,
            rgba(120, 70, 255, 0.3) 90%,
            transparent 100%
          );
          animation: energyFlow 3s linear infinite;
          will-change: transform;
        }

        @keyframes energyFlow {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        /* ========================================
           CARD WRAPPER with Border Tracing
        ======================================== */
        .sl-card-wrapper {
          position: relative;
          height: 220px;
          border-radius: 22px;
          overflow: hidden;
          padding: 4px;
        }

        /* Snake/Tracing Border Effect - Conic Gradient */
        .sl-border-trace {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 30deg,
            #7846FF 90deg,
            #a855f7 180deg,
            #7846FF 270deg,
            transparent 330deg,
            transparent 360deg
          );
          opacity: 0;
          animation: none;
          will-change: transform;
          transition: opacity 0.3s ease;
        }

        .sl-card-wrapper:hover .sl-border-trace {
          opacity: 1;
          animation: borderTrace 3s linear infinite;
        }

        @keyframes borderTrace {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* ========================================
           CARD Styles
        ======================================== */
        .sl-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(8px);
          overflow: hidden;
          transform: scale(1);
          transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 300ms ease;
        }

        .sl-card-wrapper:hover .sl-card {
          transform: scale(1.02);
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.7), 
            0 0 30px rgba(120, 70, 255, 0.25);
        }

        .sl-card-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .sl-row:first-child .sl-card-img {
          object-fit: contain;
          padding: 18px;
          background: rgba(0, 0, 0, 0.28);
        }

        .sl-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          padding: 24px 0;
        }

        .sl-spacer {
          height: 220px;
        }

        /* ========================================
           MARKER Styles
        ======================================== */
        .sl-marker {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #000;
          border: 3px solid rgba(255, 255, 255, 0.95);
          display: grid;
          place-items: center;
          z-index: 2;
          transition: border-color 240ms ease, transform 240ms ease;
        }

        .sl-marker::after {
          content: '';
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          background: rgba(120, 70, 255, 0.95);
          opacity: 0;
          transition: opacity 240ms ease;
          z-index: 1;
        }

        .sl-row:nth-child(1) .sl-marker {
          border-color: rgba(120, 70, 255, 1);
        }

        .sl-row:nth-child(1) .sl-marker::after {
          opacity: 1;
        }

        .sl-row:hover .sl-marker {
          border-color: rgba(120, 70, 255, 1);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .sl-row:hover .sl-marker::after {
          opacity: 1;
        }

        .sl-marker-inner {
          font-size: 14px;
          line-height: 1;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.95);
          user-select: none;
          z-index: 2;
          position: relative;
        }

        /* ========================================
           CONTENT Styles
        ======================================== */
        .sl-content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          max-width: 560px;
        }

        .sl-content.content-right {
          left: calc(50% + 38px);
          text-align: left;
        }

        .sl-content.content-left {
          right: calc(50% + 38px);
          text-align: left;
        }

        .sl-content-title {
          font-size: 14px;
          font-weight: 800;
          color: rgba(154, 105, 255, 0.92);
          letter-spacing: 0.2px;
        }

        .sl-content-subtitle {
          margin-top: 6px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }

        .sl-content-desc {
          margin-top: 8px;
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          font-size: 13px;
          line-height: 1.55;
          letter-spacing: 0.15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.62);
          max-width: 560px;
          white-space: pre;
        }

        /* ========================================
           RESPONSIVE - Mobile
        ======================================== */
        @media (max-width: 680px) {
          .sl-timeline {
            padding-left: 12px;
            padding-right: 12px;
          }

          .sl-line {
            left: 22px;
            transform: none;
          }

          .sl-row {
            grid-template-columns: 1fr;
            padding: 22px 0;
          }

          .sl-card-wrapper,
          .sl-spacer {
            height: 190px;
          }

          .sl-marker {
            left: 22px;
            top: 26px;
            transform: translate(-50%, 0);
          }

          .sl-row:hover .sl-marker {
            transform: translate(-50%, 0) scale(1.12);
          }

          .sl-content {
            position: relative;
            top: auto;
            transform: none;
            left: auto;
            right: auto;
            max-width: 100%;
            margin-left: 46px;
          }

          .sl-content-desc {
            max-width: 100%;
            white-space: pre-line;
          }

          /* Adjust border trace for mobile */
          .sl-border-trace {
            background: conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 90deg,
              #7846FF 150deg,
              #a855f7 180deg,
              #7846FF 210deg,
              transparent 270deg,
              transparent 360deg
            );
          }
        }

        /* ========================================
           REDUCED MOTION
        ======================================== */
        @media (prefers-reduced-motion: reduce) {
          .sl-card,
          .sl-marker {
            transition: none;
          }

          .sl-line-glow {
            animation: none;
          }

          .sl-border-trace {
            animation: none;
          }

          .sl-row:hover .sl-card {
            transform: none;
          }

          .sl-row:hover .sl-marker {
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </section>
  );
}
