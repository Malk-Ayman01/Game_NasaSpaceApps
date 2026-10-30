// import { useEffect, useState } from "react";

// export default function LoadingScreen() {
//   const [progress, setProgress] = useState(0);
//   const [messageIndex, setMessageIndex] = useState(0);

//   const messages = [
//     "INITIALIZING MISSION CONTROL...",
//     "CHECKING LIFE SUPPORT SYSTEMS...",
//     "CALIBRATING POWER GRID...",
//     "ESTABLISHING MARS TELEMETRY...",
//     "PREPARING SURVIVAL PROTOCOL...",
//   ];

//   useEffect(() => {
//     const progressTimer = setInterval(() => {
//       setProgress((previous) => {
//         if (previous >= 100) {
//           clearInterval(progressTimer);
//           return 100;
//         }

//         const increment =
//           previous < 60 ? 3 : previous < 85 ? 1 : 0.4;

//         return Math.min(previous + increment, 100);
//       });
//     }, 70);

//     const messageTimer = setInterval(() => {
//       setMessageIndex((previous) => (previous + 1) % messages.length);
//     }, 1100);

//     return () => {
//       clearInterval(progressTimer);
//       clearInterval(messageTimer);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 20000,
//         background: "#050A14",
//         color: "#E8EDF3",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "24px",
//         boxSizing: "border-box",
//         fontFamily: "'Space Mono', monospace",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background glow */}
//       <div
//         style={{
//           position: "absolute",
//           width: "320px",
//           height: "320px",
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(255,159,28,0.10), transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />

//       {/* Mission label */}
//       <div
//         style={{
//           color: "#FF9F1C",
//           fontSize: "12px",
//           letterSpacing: "4px",
//           marginBottom: "18px",
//           textAlign: "center",
//         }}
//       >
//         ARES-VI // MISSION CONTROL
//       </div>

//       {/* Animated reactor */}
//       <div className="loading-reactor">
//         <div className="reactor-ring reactor-ring-one" />
//         <div className="reactor-ring reactor-ring-two" />

//         <div className="reactor-core">
//           <span>VI</span>
//         </div>
//       </div>

//       <h1
//         style={{
//           fontFamily: "'Orbitron', sans-serif",
//           fontSize: "clamp(24px, 4vw, 38px)",
//           letterSpacing: "4px",
//           fontWeight: 900,
//           textAlign: "center",
//           margin: "28px 0 8px",
//         }}
//       >
//         SYSTEM BOOT
//       </h1>

//       <p
//         style={{
//           color: "#7D8CA3",
//           fontSize: "12px",
//           letterSpacing: "2px",
//           textAlign: "center",
//           margin: "0 0 30px",
//         }}
//       >
//         MARS SURVIVAL PROTOCOL
//       </p>

//       {/* Progress */}
//       <div
//         style={{
//           width: "min(420px, 85vw)",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             gap: "12px",
//             fontSize: "11px",
//             marginBottom: "10px",
//           }}
//         >
//           <span style={{ color: "#6B7A8F" }}>
//             {messages[messageIndex]}
//           </span>

//           <span
//             style={{
//               color: "#FF9F1C",
//               fontWeight: "bold",
//               flexShrink: 0,
//             }}
//           >
//             {Math.floor(progress)}%
//           </span>
//         </div>

//         <div
//           style={{
//             height: "5px",
//             background: "#142030",
//             border: "1px solid #243247",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               width: `${progress}%`,
//               height: "100%",
//               background:
//                 "linear-gradient(90deg, #FF6B1A, #FFC857)",
//               boxShadow: "0 0 12px rgba(255,159,28,0.6)",
//               transition: "width 120ms linear",
//             }}
//           />
//         </div>
//       </div>

//       <div
//         style={{
//           marginTop: "24px",
//           fontSize: "10px",
//           color: "#43536A",
//           letterSpacing: "2px",
//           textAlign: "center",
//         }}
//       >
//         LOCATION: ACRESIA PLANITIA, MARS
//       </div>

//       <style>{`
//         .loading-reactor {
//           width: 130px;
//           height: 130px;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .reactor-ring {
//           position: absolute;
//           inset: 0;
//           border-radius: 50%;
//           border: 2px solid transparent;
//         }

//         .reactor-ring-one {
//           border-top-color: #FF9F1C;
//           border-right-color: rgba(255,159,28,0.3);
//           animation: reactor-spin 2s linear infinite;
//         }

//         .reactor-ring-two {
//           inset: 12px;
//           border-bottom-color: #199eb0;
//           border-left-color: rgba(46,196,182,0.3);
//           animation: reactor-spin-reverse 3s linear infinite;
//         }

//         .reactor-core {
//           width: 70px;
//           height: 70px;
//           border: 1px solid #FF9F1C;
//           background: rgba(255,159,28,0.08);
//           box-shadow:
//             0 0 20px rgba(255,159,28,0.12),
//             inset 0 0 20px rgba(255,159,28,0.08);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #FF9F1C;
//           font-family: 'Orbitron', sans-serif;
//           font-size: 24px;
//           animation: reactor-pulse 1.5s ease-in-out infinite;
//         }

//         @keyframes reactor-spin {
//           to { transform: rotate(360deg); }
//         }

//         @keyframes reactor-spin-reverse {
//           to { transform: rotate(-360deg); }
//         }

//         @keyframes reactor-pulse {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 1; }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .reactor-ring,
//           .reactor-core {
//             animation: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// ---------------- pixelated version -------------

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "INITIALIZING MISSION CONTROL...",
    "CHECKING LIFE SUPPORT SYSTEMS...",
    "CALIBRATING POWER GRID...",
    "ESTABLISHING MARS TELEMETRY...",
    "PREPARING SURVIVAL PROTOCOL...",
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        const increment =
          previous < 60 ? 3 : previous < 85 ? 1 : 0.4;

        return Math.min(previous + increment, 100);
      });
    }, 70);

    const messageTimer = setInterval(() => {
      setMessageIndex((previous) => (previous + 1) % messages.length);
    }, 1100);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  const pixelCount = 20;
  const activePixels = Math.floor((progress / 100) * pixelCount);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 20000,
        background: "#050A14",
        color: "#E8EDF3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box",
        fontFamily: "'Space Mono', monospace",
        overflow: "hidden",
      }}
    >
      {/* PIXEL BACKGROUND GRID */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.12,
          backgroundImage: `
            linear-gradient(#199eb0 1px, transparent 1px),
            linear-gradient(90deg, #199eb0 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      {/* PIXEL STARS */}
      {[
        { top: "12%", left: "14%" },
        { top: "23%", left: "78%" },
        { top: "18%", left: "65%" },
        { top: "72%", left: "12%" },
        { top: "80%", left: "83%" },
        { top: "35%", left: "88%" },
        { top: "65%", left: "25%" },
        { top: "10%", left: "45%" },
        { top: "85%", left: "55%" },
        { top: "42%", left: "8%" },
      ].map((star, index) => (
        <div
          key={index}
          className="loading-pixel-star"
          style={{
            position: "absolute",
            ...star,
            width: index % 3 === 0 ? "5px" : "3px",
            height: index % 3 === 0 ? "5px" : "3px",
            background: index % 2 === 0 ? "#FF9F1C" : "#199eb0",
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}

      {/* MISSION LABEL */}
      <div
        style={{
          position: "relative",
          color: "#FF9F1C",
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: "18px",
          letterSpacing: "3px",
          marginBottom: "28px",
          textAlign: "center",
        }}
      >
        ARES-VI // MISSION CONTROL
      </div>

      {/* PIXEL REACTOR */}
      <div className="pixel-reactor">
        <div className="reactor-square reactor-square-outer" />
        <div className="reactor-square reactor-square-middle" />
        <div className="reactor-square reactor-square-inner" />

        <div className="reactor-core">
          <span>VI</span>
        </div>

        <div className="reactor-pixel reactor-pixel-one" />
        <div className="reactor-pixel reactor-pixel-two" />
        <div className="reactor-pixel reactor-pixel-three" />
        <div className="reactor-pixel reactor-pixel-four" />
      </div>

      {/* TITLE */}
      <h1
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: "clamp(16px, 3vw, 26px)",
          lineHeight: "1.8",
          color: "#E8EDF3",
          textAlign: "center",
          margin: "32px 0 10px",
          textShadow: "4px 4px 0 #10263B",
        }}
      >
        SYSTEM BOOT
      </h1>

      <p
        style={{
          color: "#199eb0",
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: "20px",
          letterSpacing: "3px",
          textAlign: "center",
          margin: "0 0 32px",
        }}
      >
        MARS SURVIVAL PROTOCOL
      </p>

      {/* PROGRESS SECTION */}
      <div
        style={{
          width: "min(460px, 88vw)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              color: "#A8B5C7",
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            {messages[messageIndex]}
          </span>

          <span
            style={{
              color: "#FF9F1C",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "11px",
              flexShrink: 0,
            }}
          >
            {Math.floor(progress)}%
          </span>
        </div>

        {/* PIXEL PROGRESS BAR */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${pixelCount}, minmax(0, 1fr))`,
            gap: "4px",
            padding: "8px",
            background: "#0A1322",
            border: "2px solid #27364A",
            boxShadow: "4px 4px 0 #02050B",
          }}
        >
          {Array.from({ length: pixelCount }).map((_, index) => (
            <div
              key={index}
              style={{
                height: "16px",
                minWidth: 0,
                background:
                  index < activePixels
                    ? index < 12
                      ? "#FF9F1C"
                      : "#199eb0"
                    : "#142030",
                border: `1px solid ${
                  index < activePixels ? "#E8EDF3" : "#27364A"
                }`,
                boxShadow:
                  index < activePixels
                    ? "0 0 6px rgba(255,159,28,0.2)"
                    : "none",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
            color: "#718198",
            fontSize: "10px",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          <span>BOOT_SEQUENCE</span>
          <span>{activePixels}/{pixelCount} BLOCKS</span>
        </div>
      </div>

      {/* LOCATION */}
      <div
        style={{
          marginTop: "32px",
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: "16px",
          color: "#718198",
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        LOCATION: ACRESIA PLANITIA, MARS
      </div>

      <div
        style={{
          marginTop: "14px",
          fontFamily: "'Space Mono', monospace",
          fontSize: "9px",
          color: "#43536A",
          letterSpacing: "2px",
        }}
      >
        ARES-VI // BUILD 001
      </div>

      <style>{`
        .pixel-reactor {
          width: 150px;
          height: 150px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          image-rendering: pixelated;
        }

        .reactor-square {
          position: absolute;
          box-sizing: border-box;
          border: 3px solid transparent;
        }

        .reactor-square-outer {
          inset: 0;
          border-top-color: #FF9F1C;
          border-right-color: #FF9F1C;
          animation: pixel-spin 8s steps(4) infinite;
        }

        .reactor-square-middle {
          inset: 15px;
          border-bottom-color: #199eb0;
          border-left-color: #199eb0;
          animation: pixel-spin-reverse 6s steps(4) infinite;
        }

        .reactor-square-inner {
          inset: 30px;
          border-top-color: #FF9F1C;
          border-left-color: #FF9F1C;
          animation: pixel-spin 4s steps(4) infinite;
        }

        .reactor-core {
          width: 48px;
          height: 48px;
          background: #101F33;
          border: 3px solid #FF9F1C;
          box-shadow:
            5px 5px 0 #050A14,
            0 0 16px rgba(255,159,28,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF9F1C;
          font-family: 'Press Start 2P', monospace;
          font-size: 15px;
          animation: pixel-pulse 1.2s steps(2) infinite;
          z-index: 2;
        }

        .reactor-pixel {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #E8EDF3;
          box-shadow: 0 0 8px #199eb0;
        }

        .reactor-pixel-one {
          top: 5px;
          left: 48px;
        }

        .reactor-pixel-two {
          bottom: 12px;
          right: 4px;
          background: #FF9F1C;
        }

        .reactor-pixel-three {
          bottom: 3px;
          left: 38px;
          background: #199eb0;
        }

        .reactor-pixel-four {
          top: 35px;
          right: 0;
        }

        .loading-pixel-star {
          animation: pixel-twinkle 1.5s steps(2) infinite;
        }

        @keyframes pixel-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pixel-spin-reverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pixel-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.65;
          }
        }

        @keyframes pixel-twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @media (max-width: 480px) {
          .pixel-reactor {
            width: 120px;
            height: 120px;
          }

          .reactor-square-middle {
            inset: 12px;
          }

          .reactor-square-inner {
            inset: 24px;
          }

          .reactor-core {
            width: 40px;
            height: 40px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reactor-square,
          .reactor-core,
          .loading-pixel-star {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}