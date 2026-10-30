// import { useState } from "react";


// const COLORS = {
//   background: "#050A14",
//   card: "#0A1322",
//   imageBackground: "#101F33",

//   heading: "#E8EDF3",
//   text: "#A8B5C7",
//   muted: "#718198",

//   accent: "#FF9F1C",
//   primaryButton: "#199eb0",
//   divider: "#27364A",

//   heartRate: "#FF6262",
//   stress: "#FF9F1C",
//   suitIntegrity: "#2EC4B6",
//   radiation: "#C792EA",
// };

// export default function CrewDetailsPage({
//   crew,
//   onBack,
//   onContinue,
// }) {
//   const crewStories = {
//     "01-BIO": `Dr. Elena Vance spent six years studying extremophile microbial life
//      in the Atacama Desert before being selected for the Ares-VI mission. Her primary
//       motivation was understanding how organic molecules adapt to hyper-arid, high-radiation
//        environments—a passion born from childhood stargazing through her father's battered 
//        Newtonian reflector in rural Oregon.
//        When the habitat's descent module suffered catastrophic thruster decompression during 
//        landing, Elena's immediate concern was not her own survival, but the integrity of the
//         cryogenic biological samples stored in Sector 4. She fears losing years of irreplaceable
//          research that could prove microbial survivability on early Mars.
//          Calm under extreme pressure, Elena approaches survival through methodical analysis of
//           atmospheric chemistry and nutrient reclamation. Her deep scientific dedication keeps
//            the crew grounded when rations thin and despair threatens to take over.`,

//     "02-ENG": `Maya Lin grew up maintaining high-altitude hydroelectric turbines in the Sichuan
//      mountains, developing an intuitive understanding of mechanical stress and thermal fatigue. 
//      Joining Ares-VI was the culmination of a lifelong dream to design interplanetary habitats
//       capable of sustaining human life in raw, unyielding vacuums.
//       During the initial landing sequence, Maya fought valiantly at the manual override console 
//       to divert auxiliary power to the dampening struts, saving the crew from fatal impact forces.
//        She carries a profound invisible weight: the haunting memory of an unheeded telemetry 
//        warning sign that she believes precipitated the landing failure.
//        Pragmatic, fiercely independent, and mechanically brilliant, Maya works tirelessly through
//         freezing Martian nights to keep the habitat's thermal generators humming, driven by the 
//         fierce determination to bring every remaining crew member home.`,

//     "03-CMD": `Commander Thomas Reed is a veteran orbital flight instructor and former atmospheric
//      test pilot with over 4,000 hours in experimental craft. For Thomas, space exploration is 
//      neither romantic nor political; it is an absolute duty to human curiosity and survival across 
//      the cosmos.
//      Tasked with leading the Ares-VI crew after the mission profile collapsed on Sol 1,
//       Thomas bears the crushing psychological burden of command decisions. Every rationing 
//       decree, every oxygen allocation, and every lost colleague rests squarely on his shoulders.
//        He secretly fears that Earth mission control has already written off their stranded party
//         as a tragic loss.
//         Stoic, unwavering, and deeply protective of his team, Thomas maintains rigid discipline 
//         while quietly planning every contingency for the grueling 14-kilometer trek across the
//          Acidalia Planitia to the extraction vehicle.`,
//   };

//   const story = crewStories[crew.id] || "WRITE CHARACTER STORY HERE...";

//   const stats = [
//     { label: "HEART RATE", value: "084", unit: "BPM", color: "#FF6262", percent: 70 },
//     { label: "STRESS LEVEL", value: "32", unit: "%", color: "#FF9F1C", percent: 32 },
//     { label: "SUIT INTEGRITY", value: "96", unit: "%", color: "#199eb0", percent: 96 },
//     { label: "RADIATION", value: "12", unit: "mSv", color: "#C792EA", percent: 12 },
//   ];

//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         padding: "100px 36px 30px",
//         boxSizing: "border-box",
//         color: "#E8EDF3",
//         fontFamily: "'Space Mono', monospace",
//       }}
//     >
     

//       {/* TWO MAIN CARDS */}
//       <div
//         className="dossier-grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "minmax(280px, 0.85fr) minmax(350px, 1.4fr)",
//           gap: "22px",
//           maxWidth: "1250px",
//           margin: "0 auto",
//         }}
//       >
//         {/* LEFT CARD: CREW PROFILE */}
//         <div
//           style={{
//             background: "#0A1322",
//             border: `1px solid ${crew.border}`,
//             borderRadius: "8px",
//             padding: "22px",
//             boxSizing: "border-box",
//             minWidth: 0,
//           }}
//         >
//           <div
//             style={{
//               color: crew.tag.text,
//               fontSize: "10px",
//               letterSpacing: "2px",
//               marginBottom: "14px",
//             }}
//           >
//             PERSONNEL ID: {crew.id}
//           </div>

//           {/* CHARACTER IMAGE */}
//           <div
//             style={{
//               height: "clamp(140px, 24vh, 230px)",
//               background: "linear-gradient(180deg, #101F33, #080F1B)",
//               border: "1px solid #1D2B3D",
//               borderRadius: "5px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               overflow: "hidden",
//               marginBottom: "18px",
//             }}
//           >
//             {crew.image ? (
//               <img
//                 src={crew.image}
//                 alt={crew.name}
//                 style={{
//                   height: "100%",
//                   maxWidth: "100%",
//                   objectFit: "contain",
//                 }}
//               />
//             ) : (
//               <span
//                 style={{
//                   color: "#65758B",
//                   fontSize: "11px",
//                   textAlign: "center",
//                 }}
//               >
//                 CHARACTER IMAGE NOT AVAILABLE
//               </span>
//             )}
//           </div>

//           <h2
//             style={{
//               fontFamily: "'Orbitron', sans-serif",
//               fontSize: "clamp(17px, 2vw, 23px)",
//               letterSpacing: "1px",
//               margin: "0 0 8px",
//               overflowWrap: "anywhere",
//             }}
//           >
//             {crew.name}
//           </h2>

//           <p
//             style={{
//               color: crew.tag.text,
//               fontSize: "12px",
//               lineHeight: 1.6,
//               margin: "0 0 20px",
//             }}
//           >
//             {crew.role}
//           </p>

//           <div
//             style={{
//               height: "1px",
//               background: "#27364A",
//               marginBottom: "20px",
//             }}
//           />

//           {/* VITAL STATS */}
//           <div
//             style={{
//               color: "#65758B",
//               fontSize: "10px",
//               letterSpacing: "2px",
//               marginBottom: "16px",
//             }}
//           >
//             LIVE BIOMETRICS
//           </div>

//           <div style={{ display: "grid", gap: "17px" }}>
//             {stats.map((stat) => (
//               <div key={stat.label}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     gap: "10px",
//                     marginBottom: "8px",
//                   }}
//                 >
//                   <span style={{ color: "#A6B2C3", fontSize: "11px" }}>
//                     {stat.label}
//                   </span>

//                   <span
//                     style={{
//                       color: stat.color,
//                       fontSize: "12px",
//                       fontWeight: "bold",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     {stat.value} {stat.unit}
//                   </span>
//                 </div>

//                 <div
//                   style={{
//                     height: "4px",
//                     background: "#1B293B",
//                     borderRadius: "4px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     style={{
//                       height: "100%",
//                       width: `${stat.percent}%`,
//                       background: stat.color,
//                       boxShadow: `0 0 8px ${stat.color}55`,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* <p
//             style={{
//               fontSize: "9px",
//               color: "#526177",
//               margin: "18px 0 0",
//             }}
//           >
//             SIMULATED VITALS // MISSION PREVIEW
//           </p> */}
//         </div>

//         {/* RIGHT CARD: CHARACTER STORY */}
//         <div
//           style={{
//             background: "#0A1322",
//             border: "1px solid #243248",
//             borderRadius: "8px",
//             padding: "clamp(18px, 3vw, 30px)",
//             boxSizing: "border-box",
//             display: "flex",
//             flexDirection: "column",
//             minWidth: 0,
//           }}
//         >
          

//           <h2
//             style={{
//               fontFamily: "'Orbitron', sans-serif",
//               fontSize: "clamp(19px, 2.5vw, 15px)",
//               letterSpacing: "2px",
//               margin: "0 0 8px",
//               color: "#199eb0",
//             }}
//           >
// PSYCHOLOGICAL PROFILE & NARRATIVE LOG
//           </h2>

        

//           <div
//             style={{
//               height: "1px",
//               background: "#27364A",
//               marginBottom: "24px",
//             }}
//           />

//           {/* STORY PLACEHOLDER: EDIT crewStories ABOVE */}
//           <div
//             style={{
//               flex: 1,
//               minHeight: "220px",
//               color: "#A8B5C7",
//               fontSize: "13px",
//               lineHeight: 2,
//               whiteSpace: "pre-line",
//               overflowWrap: "anywhere",
//             }}
//           >
//             {story}
//           </div>

        
//           {/* DIVIDER ABOVE BUTTONS */}
//           <div
//             style={{
//               height: "1px",
//               background: "#27364A",
//               margin: "26px 0 20px",
//             }}
//           />

//           {/* BOTTOM ACTIONS */}
//           <div
//             className="dossier-actions"
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               gap: "12px",
//             }}
//           >
//             <button
//               onClick={onBack}
//               style={{
//                 padding: "13px 18px",
//                 background: "#101B2B",
//                 border: "1px solid #34445A",
//                 color: "#A8B5C7",
//                 borderRadius: "4px",
//                 fontFamily: "'Space Mono', monospace",
//                 fontSize: "11px",
//                 fontWeight: "bold",
//                 letterSpacing: "1px",
//                 cursor: "pointer",
//               }}
//             >
//               BACK TO CREW
//             </button>

//             <button
//               onClick={onContinue}
//               style={{
//                 padding: "13px 18px",
//                 background: "#0E2A32",
//                 border: "1px solid #199eb0",
//                 color: "#199eb0",
//                 borderRadius: "4px",
//                 fontFamily: "'Space Mono', monospace",
//                 fontSize: "11px",
//                 fontWeight: "bold",
//                 letterSpacing: "1px",
//                 cursor: "pointer",
//               }}
//             >
//               CONTINUE MISSION →
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 760px) {
//           .dossier-grid {
//             grid-template-columns: 1fr !important;
//           }

//           .dossier-actions {
//             flex-wrap: wrap;
//           }

//           .dossier-actions button {
//             flex: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }




// ------------------ pixelated version --------------

export default function CrewDetailsPage({ crew, onBack, onContinue }) {
  const crewStories = {
    "01-BIO": `Dr. Elena Vance spent six years studying extremophile microbial life
in the Atacama Desert before being selected for the Ares-VI mission. Her primary
motivation was understanding how organic molecules adapt to hyper-arid, high-radiation
environments—a passion born from childhood stargazing through her father's battered
Newtonian reflector in rural Oregon.

When the habitat's descent module suffered catastrophic thruster decompression during
landing, Elena's immediate concern was not her own survival, but the integrity of the
cryogenic biological samples stored in Sector 4. She fears losing years of irreplaceable
research that could prove microbial survivability on early Mars.

Calm under extreme pressure, Elena approaches survival through methodical analysis of
atmospheric chemistry and nutrient reclamation. Her deep scientific dedication keeps
the crew grounded when rations thin and despair threatens to take over.`,

    "02-ENG": `Maya Lin grew up maintaining high-altitude hydroelectric turbines in the Sichuan
mountains, developing an intuitive understanding of mechanical stress and thermal fatigue.
Joining Ares-VI was the culmination of a lifelong dream to design interplanetary habitats
capable of sustaining human life in raw, unyielding vacuums.

During the initial landing sequence, Maya fought valiantly at the manual override console
to divert auxiliary power to the dampening struts, saving the crew from fatal impact forces.
She carries a profound invisible weight: the haunting memory of an unheeded telemetry
warning sign that she believes precipitated the landing failure.

Pragmatic, fiercely independent, and mechanically brilliant, Maya works tirelessly through
freezing Martian nights to keep the habitat's thermal generators humming, driven by the
fierce determination to bring every remaining crew member home.`,

    "03-CMD": `Commander Thomas Reed is a veteran orbital flight instructor and former atmospheric
test pilot with over 4,000 hours in experimental craft. For Thomas, space exploration is
neither romantic nor political; it is an absolute duty to human curiosity and survival across
the cosmos.

Tasked with leading the Ares-VI crew after the mission profile collapsed on Sol 1,
Thomas bears the crushing psychological burden of command decisions. Every rationing
decree, every oxygen allocation, and every lost colleague rests squarely on his shoulders.
He secretly fears that Earth mission control has already written off their stranded party
as a tragic loss.

Stoic, unwavering, and deeply protective of his team, Thomas maintains rigid discipline
while quietly planning every contingency for the grueling 14-kilometer trek across the
Acidalia Planitia to the extraction vehicle.`,
  };

  const story = crewStories[crew.id] || "WRITE CHARACTER STORY HERE...";

  const COLORS = {
    background: "#050A14",
    card: "#0A1322",
    imageBackground: "#101F33",
    heading: "#E8EDF3",
    text: "#A8B5C7",
    muted: "#718198",
    accent: "#FF9F1C",
    primaryButton: "#199eb0",
    divider: "#27364A",
    heartRate: "#FF6262",
    stress: "#FF9F1C",
    suitIntegrity: "#2EC4B6",
    radiation: "#C792EA",
  };

  const stats = [
    {
      label: "HEART RATE",
      value: "084",
      unit: "BPM",
      color: COLORS.heartRate,
      percent: 70,
    },
    {
      label: "STRESS LEVEL",
      value: "32",
      unit: "%",
      color: COLORS.stress,
      percent: 32,
    },
    {
      label: "SUIT INTEGRITY",
      value: "96",
      unit: "%",
      color: COLORS.suitIntegrity,
      percent: 96,
    },
    {
      label: "RADIATION",
      value: "12",
      unit: "mSv",
      color: COLORS.radiation,
      percent: 12,
    },
  ];

  const pixelHeading = {
    fontFamily: "'Press Start 2P', monospace",
    fontWeight: "normal",
    lineHeight: 1.8,
    overflowWrap: "anywhere",
  };

  const pixelButton = {
    minHeight: "44px",
    padding: "12px",
    boxSizing: "border-box",
    borderRadius: 0,
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "9px",
    lineHeight: 1.8,
    cursor: "pointer",
    boxShadow: "4px 4px 0 #02050B",
    transition: "transform 0.1s, filter 0.1s",
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 28px 36px",
        boxSizing: "border-box",
        color: COLORS.heading,
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {/* PAGE LABEL */}
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto 22px",
          color: COLORS.accent,
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: "18px",
          letterSpacing: "2px",
        }}
      >
        MISSION CONTROL // PERSONNEL DOSSIER
      </div>

      {/* MAIN GRID */}
      <div
        className="dossier-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(280px, 0.85fr) minmax(350px, 1.4fr)",
          gap: "24px",
          maxWidth: "1250px",
          margin: "0 auto",
          alignItems: "stretch",
        }}
      >
        {/* LEFT: PROFILE */}
        <div
          className="pixel-dossier-card"
          style={{
            background: COLORS.card,
            border: `2px solid ${crew.border || COLORS.divider}`,
            padding: "20px",
            boxSizing: "border-box",
            minWidth: 0,
            boxShadow: "5px 5px 0 #02050B",
            position: "relative",
          }}
        >
          {/* ID */}
          <div
            style={{
              color: crew.tag?.text || COLORS.accent,
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: "17px",
              letterSpacing: "1px",
              marginBottom: "16px",
              overflowWrap: "anywhere",
            }}
          >
            &gt; PERSONNEL_ID: {crew.id}
          </div>

          {/* CHARACTER IMAGE */}
          <div
            style={{
              height: "clamp(170px, 26vh, 250px)",
              background: COLORS.imageBackground,
              border: `2px solid ${COLORS.divider}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              marginBottom: "22px",
              position: "relative",
              backgroundImage: `
                linear-gradient(rgba(168,181,199,0.035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168,181,199,0.035) 1px, transparent 1px)
              `,
              backgroundSize: "8px 8px",
            }}
          >
            {crew.image ? (
              <img
                src={crew.image}
                alt={crew.name}
                draggable="false"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  console.error("Failed to load crew image:", crew.image);
                }}
                style={{
                  display: "block",
                  height: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  imageRendering: "pixelated",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            ) : (
              <span
                style={{
                  color: COLORS.muted,
                  fontFamily: "'Pixelify Sans', monospace",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                CHARACTER IMAGE NOT AVAILABLE
              </span>
            )}

            {/* IMAGE BASELINE */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "5px",
                background: crew.stripe || COLORS.primaryButton,
              }}
            />
          </div>

          {/* NAME */}
          <h2
            style={{
              ...pixelHeading,
              fontSize: "clamp(13px, 1.5vw, 17px)",
              margin: "0 0 12px",
              overflowWrap: "anywhere",
            }}
          >
            {crew.name}
          </h2>

          {/* ROLE */}
          <p
            style={{
              color: crew.tag?.text || COLORS.primaryButton,
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: "18px",
              lineHeight: 1.5,
              margin: "0 0 22px",
            }}
          >
            {crew.role}
          </p>

          <div
            style={{
              height: "2px",
              background: COLORS.divider,
              marginBottom: "20px",
            }}
          />

          {/* BIOMETRICS HEADING */}
          <div
            style={{
              color: COLORS.accent,
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: "18px",
              letterSpacing: "2px",
              marginBottom: "22px",
            }}
          >
            &gt; LIVE BIOMETRICS
          </div>

          {/* STATS */}
          <div style={{ display: "grid", gap: "22px" }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      color: COLORS.text,
                      fontFamily: "'Pixelify Sans', monospace",
                      fontSize: "16px",
                    }}
                  >
                    {stat.label}
                  </span>

                  <span
                    style={{
                      color: stat.color,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "12px",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stat.value} {stat.unit}
                  </span>
                </div>

                {/* PIXEL PROGRESS BAR */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(20, minmax(0, 1fr))",
                    gap: "3px",
                    padding: "4px",
                    background: COLORS.background,
                    border: `1px solid ${COLORS.divider}`,
                  }}
                >
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      style={{
                        height: "9px",
                        minWidth: 0,
                        background:
                          index < Math.ceil(stat.percent / 5)
                            ? stat.color
                            : "#142030",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "22px",
              color: COLORS.muted,
              fontSize: "9px",
              letterSpacing: "1px",
            }}
          >
            SYSTEM STATUS:{" "}
            <span style={{ color: COLORS.suitIntegrity }}>● MONITORING</span>
          </div>
        </div>

        {/* RIGHT: STORY */}
        <div
          className="pixel-dossier-card"
          style={{
            background: COLORS.card,
            border: `2px solid ${COLORS.divider}`,
            padding: "clamp(18px, 3vw, 30px)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            boxShadow: "5px 5px 0 #02050B",
          }}
        >
          {/* STORY LABEL */}
          <div
            style={{
              color: COLORS.accent,
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: "17px",
              letterSpacing: "1px",
              marginBottom: "14px",
            }}
          >
            ARCHIVE FILE // 00{crew.id?.slice(0, 2) || "01"}
          </div>

          <h2
            style={{
              ...pixelHeading,
              fontSize: "clamp(12px, 1.4vw, 16px)",
              color: COLORS.primaryButton,
              margin: "0 0 20px",
            }}
          >
            PSYCHOLOGICAL PROFILE & NARRATIVE LOG
          </h2>

          <div
            style={{
              height: "2px",
              background: COLORS.divider,
              marginBottom: "24px",
            }}
          />

          {/* STORY */}
          <div
            style={{
              flex: 1,
              minHeight: "220px",
              color: COLORS.text,
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: "19px",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
              overflowWrap: "anywhere",
            }}
          >
            {story}
          </div>

          {/* FILE FOOTER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "24px",
              color: COLORS.muted,
              fontSize: "9px",
              letterSpacing: "1px",
            }}
          >
            <span>FILE: CREW_PROFILE.DAT</span>
            <span>ACCESS: AUTHORIZED</span>
          </div>

          <div
            style={{
              height: "2px",
              background: COLORS.divider,
              margin: "22px 0",
            }}
          />

          {/* ACTIONS */}
          <div
            className="dossier-actions"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: "16px",
            }}
          >
            <button
              onClick={onBack}
              style={{
                ...pixelButton,
                flex: "1 1 180px",
                background: "#101F33",
                border: `2px solid ${COLORS.divider}`,
                color: COLORS.text,
              }}
            >
              &lt; BACK TO CREW
            </button>

            <button
              onClick={onContinue}
              style={{
                ...pixelButton,
                flex: "1 1 200px",
                background: COLORS.primaryButton,
                border: "2px solid #65DCE5",
                color: COLORS.background,
              }}
            >
              CONTINUE MISSION &gt;
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .pixel-dossier-card {
          position: relative;
        }

        .pixel-dossier-card::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 18px;
          width: 42px;
          height: 4px;
          background: #FF9F1C;
        }

        .dossier-actions button {
          overflow-wrap: anywhere;
        }

        .dossier-actions button:hover {
          filter: brightness(1.15);
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #02050B;
        }

        .dossier-actions button:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #02050B;
        }

        @media (max-width: 760px) {
          .dossier-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .dossier-actions {
            flex-direction: column;
          }

          .dossier-actions button {
            width: 100%;
            flex: 1 1 auto !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dossier-actions button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}