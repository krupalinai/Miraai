import React from 'react';

import mirraiLogo from '../assets/images/Mirrai Logo.png';

export default function Footer() {
  return (
    <footer className="ft-wrap">
      <div className="ft-inner">
        <div className="ft-top">
          <div className="ft-left">
            <img className="ft-logo" src={mirraiLogo} alt="Mirrai" />
            <div className="ft-desc">
              AI-powered creative production
              <br />
              platform for generating professional
              <br />
              videos, photos, and branding creatives
              <br />
              for modern businesses.
            </div>
          </div>

          <div className="ft-links" aria-label="Footer links">
            <a className="ft-link" href="#">
              Privacy Policy
            </a>
            <a className="ft-link" href="#">
              Terms of Service
            </a>
            <a className="ft-link" href="#">
              Support
            </a>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-copy">© 2026 Miraai</div>

          <div className="ft-social" aria-label="Social links">
            <a className="ft-social-btn" href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 8.5V7.2C14 6.54 14.54 6 15.2 6H17V3H15.2C12.88 3 11 4.88 11 7.2V8.5H9V12H11V21H14V12H16.7L17 8.5H14Z"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="ft-social-btn" href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 3H17C19.209 3 21 4.791 21 7V17C21 19.209 19.209 21 17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3Z"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 16.2C14.3196 16.2 16.2 14.3196 16.2 12C16.2 9.6804 14.3196 7.8 12 7.8C9.6804 7.8 7.8 9.6804 7.8 12C7.8 14.3196 9.6804 16.2 12 16.2Z"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="1.8"
                />
                <path d="M17.4 6.6H17.41" stroke="rgba(255,255,255,0.8)" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .ft-wrap {
          width: 100%;
          padding: 48px 18px 34px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .ft-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.9) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .ft-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .ft-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }

        .ft-left {
          max-width: 480px;
        }

        .ft-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
          margin-bottom: 18px;
          filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.7));
        }

        .ft-desc {
          font-size: 12px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.52);
        }

        .ft-links {
          display: grid;
          gap: 12px;
          text-align: right;
          padding-top: 10px;
        }

        .ft-link {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 12px;
        }

        .ft-link:hover {
          color: rgba(255, 255, 255, 0.92);
        }

        .ft-bottom {
          margin-top: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .ft-copy {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.62);
        }

        .ft-social {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ft-social-btn {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-decoration: none;
        }

        .ft-social-btn:hover {
          border-color: rgba(139, 92, 246, 0.55);
        }

        @media (max-width: 760px) {
          .ft-top {
            flex-direction: column;
            gap: 22px;
          }

          .ft-links {
            text-align: left;
            padding-top: 0;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .ft-wrap {
            padding: 44px 16px 32px;
          }

          .ft-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 28px;
          }

          .ft-left {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .ft-logo {
            height: 42px;
            margin-bottom: 20px;
          }

          .ft-desc {
            font-size: 13px;
            line-height: 1.65;
            text-align: center;
            max-width: 380px;
          }

          .ft-desc br {
            display: none;
          }

          .ft-links {
            text-align: center;
            padding-top: 0;
            gap: 10px;
          }

          .ft-link {
            font-size: 13px;
          }

          .ft-bottom {
            margin-top: 32px;
            flex-direction: column;
            gap: 20px;
          }

          .ft-copy {
            font-size: 13px;
            order: 2;
          }

          .ft-social {
            order: 1;
            gap: 16px;
          }

          .ft-social-btn {
            width: 32px;
            height: 32px;
          }

          .ft-social-btn svg {
            width: 20px;
            height: 20px;
          }
        }

        /* ========================================
           RESPONSIVE - Small Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .ft-wrap {
            padding: 40px 14px 28px;
          }

          .ft-top {
            gap: 24px;
          }

          .ft-logo {
            height: 40px;
            margin-bottom: 18px;
          }

          .ft-desc {
            font-size: 12px;
            line-height: 1.6;
            max-width: 340px;
          }

          .ft-links {
            gap: 8px;
          }

          .ft-link {
            font-size: 12px;
          }

          .ft-bottom {
            margin-top: 28px;
            gap: 18px;
          }

          .ft-copy {
            font-size: 12px;
          }

          .ft-social {
            gap: 14px;
          }

          .ft-social-btn {
            width: 30px;
            height: 30px;
          }

          .ft-social-btn svg {
            width: 19px;
            height: 19px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .ft-wrap {
            padding: 36px 12px 26px;
          }

          .ft-top {
            gap: 22px;
          }

          .ft-logo {
            height: 36px;
            margin-bottom: 16px;
          }

          .ft-desc {
            font-size: 11px;
            line-height: 1.55;
            max-width: 300px;
          }

          .ft-links {
            gap: 6px;
          }

          .ft-link {
            font-size: 11px;
          }

          .ft-bottom {
            margin-top: 24px;
            gap: 16px;
          }

          .ft-copy {
            font-size: 11px;
          }

          .ft-social {
            gap: 12px;
          }

          .ft-social-btn {
            width: 28px;
            height: 28px;
          }

          .ft-social-btn svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </footer>
  );
}
