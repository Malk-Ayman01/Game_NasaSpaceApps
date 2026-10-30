

// import { useEffect, useState } from "react";

// export default function Header() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <header
//         className="mission-header"
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "64px",
//           background: "#0B1426",
//           borderBottom: "1px solid #142030",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "0 40px",
//           boxSizing: "border-box",
//           zIndex: 9999,
//           color: "#6B7A8F",
//           fontFamily: "monospace",
//           fontSize: "12px",
//           gap: "20px",
//         }}
//       >
//         {/* LEFT */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "18px",
//             minWidth: 0,
//             overflow: "hidden",
//           }}
//         >
//           <span
//             style={{
//               color: "#fff",
//               fontWeight: "bold",
//               letterSpacing: "2px",
//               whiteSpace: "nowrap",
//             }}
//           >
//             ARES-VI MISSION CONTROL
//           </span>

//           <span className="desktop-only" style={{ color: "#1E2A3A" }}>
//             |
//           </span>

//           <span
//             className="desktop-only"
//             style={{
//               whiteSpace: "nowrap",
//             }}
//           >
//             LOCATION: ACRESIA PLANITIA, MARS
//           </span>

//           <span className="desktop-only" style={{ color: "#1E2A3A" }}>
//             |
//           </span>

//           <span
//             style={{
//               color: "#FF9F1C",
//               whiteSpace: "nowrap",
//             }}
//           >
//             SOL 12 //{" "}
//             {time.toLocaleTimeString("en-GB", {
//               hour12: false,
//             })}{" "}
//             UTC
//           </span>
//         </div>

//         {/* RIGHT */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "22px",
//             whiteSpace: "nowrap",
//             flexShrink: 0,
//           }}
//         >
//           <span>
//             SYS_STATUS:{" "}
//             <span
//               style={{
//                 color: "#FF4D4D",
//                 fontWeight: "bold",
//               }}
//             >
//               CRITICAL
//             </span>
//           </span>

//           <span>
//             O2:{" "}
//             <span style={{ color: "#FFC93C" }}>
//               42%
//             </span>
//           </span>

//           <span
//             style={{
//               background: "#0A2A33",
//               border: "1px solid #1A4A5A",
//               color: "#199eb0",
//               padding: "7px 14px",
//               borderRadius: "4px",
//             }}
//           >
//             AUDIO: OFF
//           </span>
//         </div>
//       </header>

//       {/* RESPONSIVE */}
//       <style>
//         {`
//           /* TABLET LANDSCAPE */
//           @media (max-width: 1100px) and (orientation: landscape) {
//             .mission-header {
//               height: 58px !important;
//               padding: 0 24px !important;
//               font-size: 10px !important;
//               gap: 14px !important;
//             }

//             .mission-header > div:first-child {
//               gap: 12px !important;
//             }

//             .mission-header > div:last-child {
//               gap: 14px !important;
//             }

//             .mission-header span {
//               letter-spacing: 0.5px;
//             }
//           }

//           /* MOBILE LANDSCAPE */
//           @media (max-width: 900px) and (orientation: landscape) {
//             .mission-header {
//               height: 50px !important;
//               padding: 0 14px !important;
//               font-size: 9px !important;
//             }

//             .mission-header > div:first-child {
//               gap: 8px !important;
//             }

//             .mission-header > div:last-child {
//               gap: 10px !important;
//             }

//             .mission-header > div:first-child > span:first-child {
//               font-size: 9px !important;
//               letter-spacing: 1px !important;
//             }

//             .mission-header > div:last-child > span:last-child {
//               padding: 5px 8px !important;
//             }
//           }

//           /* SMALL MOBILE LANDSCAPE */
//           @media (max-width: 650px) and (orientation: landscape) {
//             .mission-header {
//               height: 44px !important;
//               padding: 0 10px !important;
//               font-size: 8px !important;
//             }

//             .desktop-only {
//               display: none !important;
//             }

//             .mission-header > div:first-child > span:first-child {
//               font-size: 8px !important;
//             }

//             .mission-header > div:last-child {
//               gap: 7px !important;
//             }

//             .mission-header > div:last-child > span:last-child {
//               padding: 4px 6px !important;
//             }
//           }

//           /* PORTRAIT */
//           @media (orientation: portrait) {
//             .mission-header {
//               display: none !important;
//             }

//             body::before {
//               content: "ROTATE DEVICE";
//               position: fixed;
//               inset: 0;
//               z-index: 999999;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               background: #050A14;
//               color: #FF9F1C;
//               font-family: monospace;
//               font-size: 18px;
//               font-weight: bold;
//               letter-spacing: 3px;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }


// ----------------- pixelated version ------------------



import { useEffect, useState } from "react";

const COLORS = {
  background: "#050A14",
  card: "#0A1322",
  heading: "#E8EDF3",
  text: "#A8B5C7",
  muted: "#718198",
  accent: "#FF9F1C",
  primaryButton: "#199eb0",
  divider: "#27364A",
  heartRate: "#FF6262",
  suitIntegrity: "#2EC4B6",
};

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pixelLabel = {
    fontFamily: "'Pixelify Sans', monospace",
    fontSize: "14px",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
  };

  const dividerStyle = {
    width: "4px",
    height: "18px",
    background: COLORS.divider,
    flexShrink: 0,
  };

  return (
    <>
      <header className="mission-header">
        {/* LEFT: MISSION INFORMATION */}
        <div className="mission-header-left">
          <div className="mission-brand">
            <span className="brand-indicator" />
            <span className="brand-text">
              ARES-VI
              <span className="brand-subtitle"> MISSION CONTROL</span>
            </span>
          </div>

          <span className="header-divider" />

          <span className="location-label desktop-only" style={pixelLabel}>
            LOCATION: ACRESIA PLANITIA, MARS
          </span>

          <span className="header-divider desktop-only" />

          <div className="sol-clock">
            <span className="sol-label">SOL 12 //</span>
            <span className="clock-time">
              {time.toLocaleTimeString("en-GB", {
                hour12: false,
              })}
            </span>
            <span className="utc-label">UTC</span>
          </div>
        </div>

        {/* RIGHT: SYSTEM STATUS */}
        <div className="mission-header-right">
          <div className="system-status">
            <span className="status-label">SYS_STATUS:</span>
            <span className="critical-status">
              <span className="status-dot" />
              CRITICAL
            </span>
          </div>

          <div className="oxygen-status">
            <span className="status-label">O2:</span>
            <span className="oxygen-value">42%</span>
          </div>

          <div className="audio-status">
            <span className="audio-indicator" />
            <span>AUDIO: OFF</span>
          </div>
        </div>
      </header>

      {/* PORTRAIT WARNING */}
      <div className="rotate-overlay">
        <div className="rotate-content">
          <div className="rotate-icon">↻</div>
          <p>ROTATE DEVICE</p>
          <span>LANDSCAPE MODE REQUIRED</span>
        </div>
      </div>

      <style>{`
        .mission-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          padding: 0 28px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          z-index: 9999;

          background: ${COLORS.background};
          border-bottom: 3px solid ${COLORS.divider};
          box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);

          color: ${COLORS.text};
          font-family: 'Pixelify Sans', monospace;
          font-size: 14px;
        }

        .mission-header-left,
        .mission-header-right {
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .mission-header-left {
          gap: 18px;
          overflow: hidden;
        }

        .mission-header-right {
          gap: 22px;
          flex-shrink: 0;
        }

        .mission-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .brand-indicator {
          width: 10px;
          height: 10px;
          flex-shrink: 0;
          background: ${COLORS.accent};
          box-shadow: 4px 4px 0 #75430D;
          animation: brandBlink 1.5s steps(2, end) infinite;
        }

        .brand-text {
          color: ${COLORS.heading};
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          line-height: 1.8;
          white-space: nowrap;
        }

        .brand-subtitle {
          color: ${COLORS.primaryButton};
          font-size: 8px;
        }

        .header-divider {
          width: 3px;
          height: 20px;
          flex-shrink: 0;
          background: ${COLORS.divider};
        }

        .location-label {
          color: ${COLORS.muted};
          font-size: 13px;
        }

        .sol-clock {
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
          font-family: 'Pixelify Sans', monospace;
        }

        .sol-label {
          color: ${COLORS.accent};
        }

        .clock-time {
          color: ${COLORS.heading};
          font-variant-numeric: tabular-nums;
        }

        .utc-label {
          color: ${COLORS.muted};
          font-size: 11px;
        }

        .system-status,
        .oxygen-status {
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .status-label {
          color: ${COLORS.muted};
          font-size: 12px;
        }

        .critical-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${COLORS.heartRate};
          font-weight: 700;
          letter-spacing: 1px;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          background: ${COLORS.heartRate};
          box-shadow: 3px 3px 0 #51252C;
          animation: statusBlink 1s steps(2, end) infinite;
        }

        .oxygen-value {
          color: ${COLORS.accent};
          font-weight: 700;
        }

        .audio-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          color: ${COLORS.suitIntegrity};
          background: ${COLORS.card};
          border: 2px solid ${COLORS.primaryButton};
          box-shadow: 3px 3px 0 #071C29;
          font-family: 'Pixelify Sans', monospace;
          font-size: 13px;
          white-space: nowrap;
        }

        .audio-indicator {
          width: 7px;
          height: 7px;
          background: ${COLORS.suitIntegrity};
        }

        .rotate-overlay {
          display: none;
        }

        @keyframes brandBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.35; }
        }

        @keyframes statusBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.25; }
        }

        /* TABLET LANDSCAPE */
        @media (max-width: 1100px) and (orientation: landscape) {
          .mission-header {
            height: 58px;
            padding: 0 18px;
            gap: 12px;
            font-size: 12px;
          }

          .mission-header-left {
            gap: 12px;
          }

          .mission-header-right {
            gap: 14px;
          }

          .brand-text {
            font-size: 9px;
          }

          .brand-subtitle {
            font-size: 7px;
          }

          .location-label {
            font-size: 11px;
          }

          .status-label {
            font-size: 10px;
          }

          .audio-status {
            padding: 6px 9px;
            font-size: 11px;
          }
        }

        /* MOBILE LANDSCAPE */
        @media (max-width: 900px) and (orientation: landscape) {
          .mission-header {
            height: 50px;
            padding: 0 12px;
            gap: 8px;
            font-size: 10px;
          }

          .mission-header-left {
            gap: 8px;
          }

          .mission-header-right {
            gap: 10px;
          }

          .brand-indicator {
            width: 7px;
            height: 7px;
          }

          .brand-text {
            font-size: 8px;
            letter-spacing: 0;
          }

          .brand-subtitle {
            font-size: 6px;
          }

          .clock-time {
            font-size: 11px;
          }

          .sol-label,
          .utc-label {
            font-size: 10px;
          }

          .status-label {
            font-size: 9px;
          }

          .audio-status {
            padding: 5px 7px;
            font-size: 10px;
            gap: 5px;
          }

          .header-divider {
            height: 15px;
          }
        }

        /* SMALL MOBILE LANDSCAPE */
        @media (max-width: 650px) and (orientation: landscape) {
          .mission-header {
            height: 44px;
            padding: 0 8px;
            gap: 6px;
            font-size: 9px;
          }

          .desktop-only {
            display: none !important;
          }

          .mission-header-left,
          .mission-header-right {
            gap: 7px;
          }

          .brand-text {
            font-size: 7px;
          }

          .brand-subtitle {
            display: none;
          }

          .sol-clock {
            gap: 4px;
          }

          .clock-time {
            font-size: 10px;
          }

          .sol-label,
          .utc-label {
            font-size: 9px;
          }

          .status-label {
            display: none;
          }

          .critical-status {
            font-size: 9px;
            gap: 4px;
          }

          .status-dot,
          .audio-indicator {
            width: 5px;
            height: 5px;
          }

          .oxygen-status {
            gap: 4px;
          }

          .oxygen-value {
            font-size: 10px;
          }

          .audio-status {
            padding: 4px 5px;
            font-size: 9px;
            gap: 4px;
            box-shadow: 2px 2px 0 #071C29;
          }
        }

        /* PORTRAIT MODE */
        @media (orientation: portrait) {
          .mission-header {
            display: none !important;
          }

          .rotate-overlay {
            position: fixed;
            inset: 0;
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
            background: ${COLORS.background};
            color: ${COLORS.accent};
            text-align: center;
          }

          .rotate-content {
            width: 100%;
            max-width: 360px;
            padding: 30px 15px;
            border: 3px solid ${COLORS.divider};
            box-shadow: 7px 7px 0 #02050B;
            background:
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px),
              ${COLORS.card};
            background-size: 12px 12px;
          }

          .rotate-icon {
            font-size: 52px;
            line-height: 1.4;
            animation: rotateDevice 2s steps(4, end) infinite;
          }

          .rotate-content p {
            margin: 18px 0 12px;
            font-family: 'Press Start 2P', monospace;
            font-size: 12px;
            line-height: 1.8;
          }

          .rotate-content span {
            color: ${COLORS.text};
            font-family: 'Pixelify Sans', monospace;
            font-size: 16px;
            letter-spacing: 1px;
          }
        }

        @keyframes rotateDevice {
          0%, 20% { transform: rotate(0deg); }
          45%, 65% { transform: rotate(90deg); }
          90%, 100% { transform: rotate(0deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-indicator,
          .status-dot,
          .rotate-icon {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
