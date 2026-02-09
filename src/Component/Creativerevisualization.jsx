
import React from 'react';

import creativeRevisualizationImg from '../assets/Creative Revisualization.png';
import buttonImg from '../assets/Button.png';

export default function Creativerevisualization() {
  return (
    <section className="cr-wrap">
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
          <div className="cr-card">
            <img className="cr-img-small" src={creativeRevisualizationImg} alt="" />
          </div>
        </div>

        <div className="cr-right">
          <div className="cr-progress" aria-hidden="true">
            <div className="cr-progress-fill" />
          </div>

          <div className="cr-r-title">Online Image Converter</div>
          <div className="cr-r-desc">
            <span className="cr-r-desc-line">
              Breathe motion into still images convert photos into captivating animated
            </span>
            <span className="cr-r-desc-line">
              videos with AI-powered fluidity. Add seamless motion, effects, and emotion
            </span>
            <span className="cr-r-desc-line">
              effortlessly.
            </span>
          </div>

          <button className="cr-try-btn" type="button" aria-label="Try it now">
            <img className="cr-button-img" src={buttonImg} alt="" />
          </button>

                  </div>
      </div>

      <style>{`
        .cr-wrap {
          width: 100%;
          padding: 44px 18px 86px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cr-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(880px 380px at 18% 58%, rgba(139, 92, 246, 0.14) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(900px 420px at 70% 35%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .cr-head {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 34px;
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
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 54px;
          align-items: center;
        }

        .cr-card {
          position: relative;
          width: 100%;
          max-width: 520px;
          aspect-ratio: 1 / 1;
          border-radius: 18px;
          overflow: hidden;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 0;
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.85);
        }

        .cr-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(90% 80% at 50% 35%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 38%);
          pointer-events: none;
          z-index: 2;
        }

        .cr-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 40%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.55) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .cr-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.05) contrast(1.04);
          z-index: 1;
        }

        .cr-img-small {
          width: 100%;
          height: 100%;
          max-height: 86%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
          filter: saturate(1.05) contrast(1.04);
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
          margin: 0 0 18px;
        }

        .cr-progress-fill {
          width: 30%;
          height: 100%;
          background: #8b5cf6;
          border-radius: 999px;
        }

        .cr-r-title {
          font-size: 26px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.95);
        }

        .cr-r-desc {
          margin-top: 12px;
          font-size: 12px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.55);
          max-width: 520px;
          text-align: center;
        }

        .cr-r-desc-line {
          display: block;
        }

        .cr-r-desc-line:nth-child(2) {
          text-indent: 0.8em;
        }

        .cr-r-desc-line:nth-child(3) {
          text-indent: 0.8em;
        }

        @media (min-width: 561px) {
          .cr-r-desc-line {
            white-space: nowrap;
          }
        }

        .cr-cta {
          margin-top: 28px;
          border: 0;
          cursor: pointer;
          padding: 12px 24px;
          border-radius: 999px;
          background: #8b5cf6;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 700;
          font-size: 13px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cr-sparkle-left {
          flex-shrink: 0;
          margin-right: 2px;
        }

        .cr-sparkle-right {
          flex-shrink: 0;
          margin-left: 2px;
        }

        .cr-button-img {
          width: auto;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }

        .cr-try-btn {
          margin-top: 100px;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          display: inline-block;
          max-width: 30%;
        }

        .cr-try-btn:hover {
          filter: brightness(1.06);
        }

        .cr-try-btn:focus-visible {
          outline: 2px solid rgba(139, 92, 246, 0.9);
          outline-offset: 6px;
          border-radius: 999px;
        }

        .cr-cta:hover {
          filter: brightness(1.05);
        }

        @media (max-width: 980px) {
          .cr-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            justify-items: center;
          }

          .cr-right {
            text-align: center;
          }

          .cr-progress {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 560px) {
          .cr-title {
            font-size: 30px;
          }

          .cr-r-title {
            font-size: 22px;
          }

          .cr-card {
            max-width: 94vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cr-cta:hover {
            filter: none;
          }
        }
      `}</style>
    </section>
  );
}
