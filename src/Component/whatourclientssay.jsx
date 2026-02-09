import React from 'react';

export default function Whatourclientssay() {
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
          <div className="wcs-cards">
            <article className="wcs-card">
              <div className="wcs-quote">
                “Miraai transformed our content production process. We went from spending ₹25 lakh on regional
                campaigns to ₹1 lakh-with better results. Our internal team now manages everything without
                vendor dependencies. This is a game-changer for enterprise marketing.”
              </div>
              <div className="wcs-role">Marketing Director</div>
              <div className="wcs-brand">FMCG Brand</div>
            </article>

            <article className="wcs-card">
              <div className="wcs-quote">
                “Our agency can now take on 5x more clients without hiring additional editors or production
                staff. Miraai handles the heavy lifting while our creatives focus on strategy and storytelling.
                ROI has been incredible.”
              </div>
              <div className="wcs-role">Marketing Director</div>
              <div className="wcs-brand">FMCG Brand</div>
            </article>
          </div>

          <div className="wcs-nav" aria-hidden="true">
            <button className="wcs-nav-btn" type="button">
              <span className="wcs-chevron">‹</span>
            </button>
            <button className="wcs-nav-btn" type="button">
              <span className="wcs-chevron">›</span>
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

        .wcs-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 50%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.84) 100%);
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
        }

        .wcs-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .wcs-card {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 32px 34px 28px;
          box-shadow: 0 26px 90px rgba(0, 0, 0, 0.86);
          min-height: 220px;
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.06);
          transform: scale(1);
          transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border 300ms ease,
                      box-shadow 300ms ease;
        }

        /* Hover State - Dark Purple Border + Pop Up Effect */
        .wcs-card:hover {
          transform: scale(1.05);
          border: 4px solid #7c3aed; /* Dark Purple Border */
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.9),
            0 0 40px rgba(124, 58, 237, 0.4); /* Purple Glow */
          z-index: 10;
        }

        .wcs-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(90% 80% at 40% 15%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 55%);
          pointer-events: none;
          z-index: 0;
        }

        .wcs-quote {
          position: relative;
          z-index: 1;
          font-size: 12px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.72);
          text-align: center;
        }

        .wcs-role {
          position: relative;
          z-index: 1;
          margin-top: 18px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(139, 92, 246, 0.95);
          text-align: center;
        }

        .wcs-brand {
          position: relative;
          z-index: 1;
          margin-top: 6px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
        }

        .wcs-nav {
          position: absolute;
          right: 0;
          bottom: -8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .wcs-nav-btn {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(139, 92, 246, 0.55);
          color: rgba(139, 92, 246, 0.9);
          display: grid;
          place-items: center;
          cursor: default;
          padding: 0;
        }

        .wcs-chevron {
          font-size: 16px;
          line-height: 1;
          transform: translateY(-1px);
        }

        @media (max-width: 980px) {
          .wcs-title {
            font-size: 36px;
          }

          .wcs-cards {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .wcs-nav {
            position: static;
            margin-top: 18px;
            justify-content: center;
          }
        }

        @media (max-width: 560px) {
          .wcs-title {
            font-size: 30px;
          }

          .wcs-card {
            padding: 26px 18px 22px;
          }
        }
      `}</style>
    </section>
  );
}
