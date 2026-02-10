import React from 'react';
import contactUsBtn from '../assets/images/contact us button.png';

export default function Calltoaction({ openForm }) {
  return (
    <section className="cta-wrap">
      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-title">
            Stop Overpaying For Video Production.
            <br />
            Start Creating Smarter With Miraai?
          </div>
          <div className="cta-sub">
            Start Creating Professional Videos With AI - Faster, Smarter, And More Cost-Effective.
          </div>

          <button className="cta-btn" type="button" onClick={openForm}>
            <img src={contactUsBtn} alt="Contact Us" className="cta-btn-img" />
          </button>
        </div>
      </div>

      <style>{`
        .cta-wrap {
          width: 100%;
          padding: 88px 18px 110px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cta-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(760px 520px at 50% 40%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 60%),
            radial-gradient(820px 560px at 65% 70%, rgba(139, 92, 246, 0.08) 0%, rgba(0, 0, 0, 0) 62%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 50%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.86) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .cta-card {
          border-radius: 22px;
          padding: 74px 18px 64px;
          text-align: center;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 26px 90px rgba(0, 0, 0, 0.88);
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(70% 90% at 50% 10%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-title {
          position: relative;
          z-index: 1;
          font-size: 40px;
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 0.95);
        }

        .cta-sub {
          position: relative;
          z-index: 1;
          margin-top: 16px;
          font-size: 12px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.55);
        }

        .cta-btn {
          border: 0;
          cursor: pointer;
          background: none;
          padding: 0;
          margin-top: 28px;
          display: inline-block;
          position: relative;
          z-index: 1;
          transition: transform 200ms ease, opacity 200ms ease;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }

        .cta-btn-img {
          width: auto;
          height: 40px;
          display: block;
        }



        @media (max-width: 980px) {
          .cta-title {
            font-size: 34px;
          }

          .cta-card {
            padding: 64px 18px 58px;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .cta-wrap {
            padding: 70px 16px 90px;
          }

          .cta-card {
            padding: 56px 24px 50px;
            border-radius: 18px;
          }

          .cta-title {
            font-size: 32px;
            line-height: 1.2;
          }

          .cta-title br {
            display: inline;
          }

          .cta-sub {
            font-size: 13px;
            line-height: 1.6;
            margin-top: 18px;
            padding: 0 10px;
          }

          .cta-btn {
            margin-top: 32px;
          }

          .cta-btn-img {
            height: 44px;
          }
        }

        /* ========================================
           RESPONSIVE - Small Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .cta-wrap {
            padding: 60px 14px 80px;
          }

          .cta-card {
            padding: 48px 20px 44px;
            border-radius: 16px;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-sub {
            font-size: 12px;
            padding: 0 8px;
            margin-top: 16px;
          }

          .cta-btn {
            margin-top: 28px;
          }

          .cta-btn-img {
            height: 42px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .cta-wrap {
            padding: 50px 12px 70px;
          }

          .cta-card {
            padding: 42px 18px 38px;
            border-radius: 14px;
          }

          .cta-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .cta-sub {
            font-size: 11px;
            line-height: 1.55;
            padding: 0 4px;
            margin-top: 14px;
          }

          .cta-btn {
            margin-top: 24px;
          }

          .cta-btn-img {
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
