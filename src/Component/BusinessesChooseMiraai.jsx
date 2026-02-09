import React from 'react';
import boxMiraaiImg from '../assets/Boxmirrai.png';

export default function BusinessesChooseMiraai() {
  const benefits = [
    { id: 1, text: "Consistent Output Quality", position: "top-left" },
    { id: 2, text: "Easy Scalability", position: "middle-left" },
    { id: 3, text: "Dedicated Support Team", position: "bottom-left" },
    { id: 4, text: "Up To 70% Cost Reduction", position: "top-right" },
    { id: 5, text: "10x Faster Production Cycles", position: "middle-right" },
    { id: 6, text: "No Studio Dependency", position: "bottom-right" }
  ];

  // Path definitions for connection lines - adjusted for smaller circle (150px, radius ~75px)
  // Center is at 500, 300 in SVG viewBox
  // All paths connect from center circle edge to box inner edge
  const paths = [
    // Top-left: Center edge → Box right edge (connects to box at ~295, 125)
    { id: 'path1', d: "M 440 240 C 400 200 350 170 295 125", delay: '0s', duration: '2.5s' },
    // Top-right: Center edge → Box left edge (connects to box at ~705, 125)
    { id: 'path2', d: "M 560 240 C 600 200 650 170 705 125", delay: '0s', duration: '2.5s' },
    // Middle-left: Center edge → Box right edge (connects to box at ~265, 280)
    { id: 'path3', d: "M 425 300 C 380 300 340 290 265 280", delay: '0s', duration: '2.5s' },
    // Middle-right: Center edge → Box left edge (connects to box at ~735, 280)
    { id: 'path4', d: "M 575 300 C 620 300 660 290 735 280", delay: '0s', duration: '2.5s' },
    // Bottom-left: Center edge → Box right edge (connects to box at ~295, 440)
    { id: 'path5', d: "M 440 360 C 400 400 350 420 295 440", delay: '0s', duration: '2.5s' },
    // Bottom-right: Center edge → Box left edge (connects to box at ~705, 440)
    { id: 'path6', d: "M 560 360 C 600 400 650 420 705 440", delay: '0s', duration: '2.5s' }
  ];

  return (
    <section className="bcm-wrap">
      <div className="bcm-header">
        <div className="bcm-title">Why Businesses Choose Miraai</div>
      </div>

      <div className="bcm-container">
        {/* Connection Lines with Energy Flow Pulse */}
        <svg className="bcm-lines" viewBox="0 0 1000 600">
          <defs>
            {/* Base Line Gradient */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>

            {/* Pulse Glow Gradient */}
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>

            {/* Base Line Glow Filter */}
            <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Pulse Glow Filter - Brighter */}
            <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Render Base Paths + Pulse Paths */}
          {paths.map((path) => (
            <g key={path.id}>
              {/* Base Path - Dim background line */}
              <path
                d={path.d}
                stroke="url(#lineGradient)"
                strokeWidth="1.6"
                fill="none"
                opacity="0.38"
                strokeLinecap="round"
                filter="url(#lineGlow)"
              />

              {/* Pulse Path - Traveling light effect */}
              <path
                className="bcm-pulse-path"
                d={path.d}
                stroke="#A78BFA"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                filter="url(#pulseGlow)"
                style={{
                  animationDelay: path.delay,
                  animationDuration: path.duration
                }}
              />
            </g>
          ))}
        </svg>

        {/* Center Design */}
        <div className="bcm-center">
          <div className="bcm-circle">
            <div className="bcm-circle-inner">
              <img src={boxMiraaiImg} alt="" className="bcm-center-img" />
            </div>
          </div>
        </div>

        {/* Benefit Boxes */}
        {benefits.map((benefit) => (
          <div key={benefit.id} className={`bcm-box bcm-box-${benefit.position}`}>
            <div className="bcm-box-content">
              {benefit.text}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .bcm-wrap {
          width: 100%;
          padding: 46px 18px 64px;
          background: #000;
          color: #e9e9ee;
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .bcm-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(650px 260px at 50% 52%, rgba(124, 58, 237, 0.22) 0%, rgba(124, 58, 237, 0.06) 35%, rgba(0, 0, 0, 0) 70%),
            radial-gradient(900px 520px at 50% 50%, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .bcm-header {
          text-align: center;
          margin-bottom: 34px;
        }

        .bcm-title {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 0.95);
        }

        .bcm-container {
          position: relative;
          max-width: 1000px;
          height: 600px;
          margin: 0 auto;
          z-index: 1;
        }

        .bcm-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .bcm-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.98);
          border: 2px solid rgba(255, 255, 255, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          position: relative;
          box-shadow:
            0 22px 70px rgba(0, 0, 0, 0.85),
            0 0 0 5px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          animation: breathe 3s ease-in-out infinite;
        }

        /* Breathing Animation for Center Circle */
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow:
              0 22px 70px rgba(0, 0, 0, 0.85),
              0 0 0 5px rgba(0, 0, 0, 0.45),
              0 0 0 1px rgba(255, 255, 255, 0.08),
              0 0 40px rgba(139, 92, 246, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow:
              0 26px 80px rgba(0, 0, 0, 0.9),
              0 0 0 6px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.12),
              0 0 60px rgba(139, 92, 246, 0.5);
          }
        }

        .bcm-circle::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.22);
          pointer-events: none;
        }

        .bcm-circle::after {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 999px;
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.26) 0%, rgba(139, 92, 246, 0) 62%);
          filter: blur(2px);
          pointer-events: none;
        }

        .bcm-circle-inner {
          width: 138px;
          height: 138px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.35);
        }

        .bcm-center-img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          filter: brightness(1.08) contrast(1.06) drop-shadow(0 12px 20px rgba(0, 0, 0, 0.5));
        }

        .bcm-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* ========================================
           ENERGY FLOW PULSE ANIMATION
           Continuous flow - Always running
        ======================================== */
        .bcm-pulse-path {
          stroke-dasharray: 80 220;
          stroke-dashoffset: 300;
          animation: pulseFlowContinuous 1s linear infinite;
          opacity: 1;
          will-change: stroke-dashoffset;
        }

        @keyframes pulseFlowContinuous {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .bcm-box {
          position: absolute;
          min-width: 250px;
          height: 54px;
          padding: 0 22px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 45%, rgba(0, 0, 0, 0.22) 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          z-index: 5;
          box-shadow:
            0 18px 50px rgba(0, 0, 0, 0.7),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .bcm-box:hover {
          transform: scale(1.05);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(0, 0, 0, 0.26) 100%);
          border: 2px solid #7c3aed;
          box-shadow:
            0 24px 60px rgba(0, 0, 0, 0.8),
            0 0 30px rgba(124, 58, 237, 0.4),
            0 0 60px rgba(167, 139, 250, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          z-index: 20;
        }

        .bcm-box-content {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-align: left;
          line-height: 1.2;
          width: 100%;
        }

        .bcm-box-top-left {
          top: 98px;
          left: 44px;
        }

        .bcm-box-top-right {
          top: 98px;
          right: 44px;
        }

        .bcm-box-middle-left {
          top: 255px;
          left: 44px;
          min-width: 220px;
          height: 48px;
          padding: 0 18px;
        }

        .bcm-box-middle-right {
          top: 255px;
          right: 44px;
        }

        .bcm-box-bottom-left {
          top: 412px;
          left: 44px;
        }

        .bcm-box-bottom-right {
          top: 412px;
          right: 44px;
        }

        @media (max-width: 768px) {
          .bcm-wrap {
            padding: 36px 18px 56px;
          }

          .bcm-title {
            font-size: 24px;
          }

          .bcm-container {
            height: 500px;
            max-width: 100%;
          }

          .bcm-circle {
            width: 154px;
            height: 154px;
          }

          .bcm-circle-inner {
            width: 142px;
            height: 142px;
          }

          .bcm-center-img {
            width: 94px;
            height: 94px;
          }

          .bcm-box {
            height: 48px;
            padding: 0 16px;
            min-width: 210px;
          }

          .bcm-box-content {
            font-size: 12px;
          }

          .bcm-box-top-left,
          .bcm-box-bottom-left {
            left: 16px;
          }

          .bcm-box-top-right,
          .bcm-box-bottom-right {
            right: 16px;
          }

          .bcm-box-middle-left {
            left: 16px;
            min-width: 190px;
            height: 44px;
            padding: 0 14px;
          }

          .bcm-box-middle-right {
            right: 16px;
          }

          .bcm-box-top-left {
            top: 80px;
          }

          .bcm-box-top-right {
            top: 80px;
          }

          .bcm-box-middle-left {
            top: 230px;
          }

          .bcm-box-middle-right {
            top: 230px;
          }

          .bcm-box-bottom-left {
            top: 380px;
          }

          .bcm-box-bottom-right {
            top: 380px;
          }

          /* Adjust pulse for mobile */
          .bcm-pulse-path {
            stroke-dasharray: 15 200;
          }
        }

        @media (max-width: 480px) {
          .bcm-container {
            height: 450px;
          }

          .bcm-circle {
            width: 136px;
            height: 136px;
          }

          .bcm-circle-inner {
            width: 126px;
            height: 126px;
          }

          .bcm-center-img {
            width: 84px;
            height: 84px;
          }

          .bcm-box-content {
            font-size: 11px;
          }

          .bcm-box {
            padding: 10px 12px;
          }

          .bcm-box-middle-left {
            min-width: 180px;
            height: 42px;
            padding: 0 12px;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .bcm-pulse-path {
            animation: none;
            opacity: 0.5;
            stroke-dasharray: none;
          }
        }
      `}</style>
    </section>
  );
}