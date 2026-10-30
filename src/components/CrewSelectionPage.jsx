
// import { useState } from "react";
// import CrewCard from "./CrewCard";
// import { crews } from "../data/crewData";
// import LoadingScreen from "./LoadingScreen";
// import CrewDetailsPage from "./CrewDetailsPage";

// export default function CrewSelectionPage() {
//   const [selectedCrew, setSelectedCrew] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   const handleSelect = (crew) => {
//     setSelectedCrew(crew);
//   };

//   const startMission = async () => {
//   if (!selectedCrew) return;

//   setIsLoading(true);

//   try {
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//   } catch (error) {
//     console.error("Mission loading failed:", error);
//   } finally {
//     setIsLoading(false);
//   }
// };
// if (isLoading) {
//   return <LoadingScreen />;
// }
// if (showDetails && selectedCrew) {
//   return (
//     <CrewDetailsPage
//       crew={selectedCrew}
//       onBack={() => setShowDetails(false)}
//       onContinue={() => {
//         console.log("Continue mission:", selectedCrew.name);
//       }}
//     />
//   );
// }
//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         padding: "110px 40px 40px",
//         boxSizing: "border-box",
//         color: "white",
//         fontFamily: "'Space Mono', monospace",
//       }}
//     >
//       {/* TITLE */}
//       <div
//         style={{
//           textAlign: "center",
//           marginBottom: "40px",
//         }}
//       >
//         <h1
//           style={{
//             margin: 0,
//             color: "#E8EDF3",
//             fontFamily: "'Orbitron', sans-serif",
//             fontSize: "38px",
//             fontWeight: "900",
//             letterSpacing: "5px",
//             lineHeight: "1.2",
//             textTransform: "uppercase",
//             textShadow: "0 0 12px rgba(255,255,255,0.08)",
//           }}
//         >
//           SELECT SURVIVING CREW MEMBER
//         </h1>

//         <p
//           style={{
//             color: "#7D8CA3",
//             fontFamily: "'Space Mono', monospace",
//             fontSize: "15px",
//             fontWeight: "400",
//             letterSpacing: "1.5px",
//             marginTop: "16px",
//           }}
//         >
//           CHOOSE YOUR PERSPECTIVE FOR THE MARS SURFACE SURVIVAL PROTOCOL
//         </p>
//       </div>

//       {/* CREW CARDS */}
//       <div
//         className="crew-grid"
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "24px",
//         }}
//       >
//         {crews.map((crew) => (
//           <CrewCard
//             key={crew.id}
//             crew={crew}
//             onSelect={(crew) => {
//   handleSelect(crew);
//   setShowDetails(true);
// }}
//           />
//         ))}
//       </div>

     
//       {/* RESPONSIVE */}
//       <style>
//         {`
//           @media (max-width: 1100px) {
//             h1 {
//               font-size: 32px !important;
//             }
//           }

//           @media (max-width: 900px) {
//             .crew-grid {
//               grid-template-columns: 1fr !important;
//             }

//             h1 {
//               font-size: 28px !important;
//               letter-spacing: 3px !important;
//             }

//             p {
//               font-size: 12px !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// }


// --------------- pixelated version ----------------

import { useState } from "react";
import CrewCard from "./CrewCard";
import { crews } from "../data/crewData";
import LoadingScreen from "./LoadingScreen";
import CrewDetailsPage from "./CrewDetailsPage";

export default function CrewSelectionPage() {
  const [selectedCrew, setSelectedCrew] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleSelect = (crew) => {
    setSelectedCrew(crew);
    setShowDetails(true);
  };

  const startMission = async () => {
    if (!selectedCrew || isLoading) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mission screen will be connected here.
      console.log("Mission ready:", selectedCrew.name);
    } catch (error) {
      console.error("Mission loading failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showDetails && selectedCrew) {
    return (
      <CrewDetailsPage
        crew={selectedCrew}
        onBack={() => setShowDetails(false)}
        onContinue={startMission}
      />
    );
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "110px 28px 45px",
        boxSizing: "border-box",
        color: "#E8EDF3",
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {/* PAGE HEADER */}
      <header
        style={{
          maxWidth: "1100px",
          margin: "0 auto 42px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#FF9F1C",
            fontFamily: "'Pixelify Sans', monospace",
            fontSize: "17px",
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          ARES-VI // PERSONNEL DATABASE
        </div>

        <h1
          className="pixel-crew-title"
          style={{
            margin: 0,
            color: "#E8EDF3",
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(15px, 2.2vw, 25px)",
            fontWeight: "normal",
            lineHeight: 1.9,
            letterSpacing: "1px",
            textTransform: "uppercase",
            textShadow: "4px 4px 0 #10263B",
          }}
        >
          SELECT SURVIVING CREW MEMBER
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "18px auto 0",
            color: "#A8B5C7",
            fontFamily: "'Pixelify Sans', monospace",
            fontSize: "19px",
            lineHeight: 1.6,
            letterSpacing: "1px",
          }}
        >
          CHOOSE YOUR PERSPECTIVE FOR THE MARS SURFACE SURVIVAL PROTOCOL
        </p>

        {/* PIXEL DIVIDER */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            marginTop: "26px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((pixel) => (
            <div
              key={pixel}
              style={{
                width: pixel % 3 === 0 ? "18px" : "10px",
                height: "5px",
                background: pixel % 3 === 0 ? "#FF9F1C" : "#199eb0",
              }}
            />
          ))}
        </div>
      </header>

      {/* CREW DATABASE */}
      <div
        className="crew-grid"
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          alignItems: "stretch",
          gap: "24px",
        }}
      >
        {crews.map((crew) => (
          <CrewCard
            key={crew.id}
            crew={crew}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* FOOTER STATUS */}
      <footer
        style={{
          maxWidth: "1100px",
          margin: "34px auto 0",
          paddingTop: "16px",
          borderTop: "2px solid #27364A",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          color: "#718198",
          fontFamily: "'Space Mono', monospace",
          fontSize: "10px",
          letterSpacing: "1px",
        }}
      >
        <span>AVAILABLE UNITS: {crews.length}</span>

        <span>
          SYSTEM STATUS:{" "}
          <span style={{ color: "#2EC4B6" }}>● ONLINE</span>
        </span>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .crew-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 600px) {
          .crew-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            max-width: 380px !important;
          }

          .pixel-crew-title {
            font-size: 14px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}