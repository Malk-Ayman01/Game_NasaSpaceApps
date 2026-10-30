


// export default function CrewCard({ crew, onSelect }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         background: "#0C1426",
//         border: `1px solid ${crew.border}`,
//         borderRadius: "12px",
//         padding: "24px",
//         boxSizing: "border-box",
//         position: "relative",
//         boxShadow: `0 0 20px ${crew.glow}`,
//       }}
//     >
//       {/* ID */}
//       <span
//         style={{
//           position: "absolute",
//           top: "12px",
//           right: "12px",
//           fontFamily: "monospace",
//           fontSize: "10px",
//           padding: "5px 8px",
//           borderRadius: "4px",
//           background: crew.tag.bg,
//           border: `1px solid ${crew.tag.border}`,
//           color: crew.tag.text,
//         }}
//       >
//         ID: {crew.id}
//       </span>

//       {/* CHARACTER */}
//       <div
//         style={{
//           height: "260px",
//           marginTop: "20px",
//           background:
//             "linear-gradient(to bottom, #0E1A2E, #0A121E)",
//           border: "1px solid rgba(255,255,255,0.05)",
//           borderRadius: "8px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {crew.image ? (
//           <div
//             style={{
//               width: "100%",
//               height: "100%",
//               backgroundImage: `url("${crew.image}")`,
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               backgroundSize: "auto 100%",
//               imageRendering: "auto",
//             }}
//           />
//         ) : (
//           <div
//             style={{
//               color: "#4A5A6A",
//               fontFamily: "monospace",
//               fontSize: "11px",
//               letterSpacing: "1px",
//             }}
//           >
//             CREW IMAGE UNAVAILABLE
//           </div>
//         )}

//         {/* Glow */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: "80px",
//             background: `radial-gradient(
//               ellipse at center bottom,
//               ${crew.glow} 0%,
//               transparent 70%
//             )`,
//             pointerEvents: "none",
//           }}
//         />
//       </div>

//       {/* NAME */}
//       <h3
//         style={{
//           margin: "22px 0 0",
//           textAlign: "center",
//           color: "#E8EDF3",
//           fontFamily: "Orbitron, monospace",
//           fontSize: "18px",
//           fontWeight: "bold",
//           letterSpacing: "2px",
//         }}
//       >
//         {crew.name}
//       </h3>

//       {/* ROLE */}
//       <p
//         style={{
//           margin: "6px 0 0",
//           textAlign: "center",
//           color: crew.tag.text,
//           fontFamily: "monospace",
//           fontSize: "12px",
//         }}
//       >
//         {crew.role}
//       </p>

//       {/* QUOTE */}
//       <p
//         style={{
//           margin: "14px 0 0",
//           padding: "0 8px",
//           minHeight: "70px",
//           textAlign: "center",
//           color: "#6B7A8F",
//           fontFamily: "monospace",
//           fontSize: "13px",
//           lineHeight: "1.6",
//         }}
//       >
//         "{crew.quote}"
//       </p>

//       {/* SELECT */}
//       <button
//         onClick={() => onSelect(crew)}
//         style={{
//           width: "100%",
//           height: "42px",
//           marginTop: "18px",
//           borderRadius: "5px",
//           background: crew.btn.bg,
//           border: `1px solid ${crew.btn.border}`,
//           color: crew.btn.text,
//           fontFamily: "monospace",
//           fontSize: "14px",
//           fontWeight: "bold",
//           letterSpacing: "1.5px",
//           cursor: "pointer",
//         }}
//       >
//         SELECT SURVIVOR
//       </button>
//     </div>
//   );
// }





// ----------- pixelated version -------------



export default function CrewCard({ crew, onSelect }) {
  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        padding: "20px",
        background: "#0A1322",
        border: `2px solid ${crew.border}`,
        borderRadius: "0",
        boxShadow: `4px 4px 0 #02050B, 0 0 12px ${crew.glow}`,
        imageRendering: "pixelated",
      }}
    >
      {/* PIXEL CORNERS */}
      {[
        { top: -2, left: -2 },
        { top: -2, right: -2 },
        { bottom: -2, left: -2 },
        { bottom: -2, right: -2 },
      ].map((corner, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            ...corner,
            width: "8px",
            height: "8px",
            background: crew.stripe,
            zIndex: 2,
          }}
        />
      ))}

      {/* CREW ID */}
      <div
        style={{
          display: "inline-block",
          padding: "6px 8px",
          background: "#101F33",
          border: `1px solid ${crew.tag.border}`,
          color: crew.tag.text,
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: "13px",
          letterSpacing: "1px",
        }}
      >
        ID: {crew.id}
      </div>

      {/* CHARACTER DISPLAY */}
      <div
        style={{
          height: "250px",
          marginTop: "16px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#101F33",
          border: "2px solid #27364A",
          borderRadius: "0",
          backgroundImage: `
            linear-gradient(rgba(168,181,199,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,181,199,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "8px 8px",
        }}
      >
        {/* PIXEL STARS */}
        {[
          { top: "12%", left: "15%" },
          { top: "22%", right: "18%" },
          { top: "40%", left: "9%" },
          { top: "16%", right: "35%" },
          { top: "55%", right: "10%" },
          { top: "32%", left: "80%" },
        ].map((star, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              ...star,
              width: "3px",
              height: "3px",
              background: "#A8B5C7",
              opacity: 0.7,
            }}
          />
        ))}

        {/* CHARACTER IMAGE */}
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
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center bottom",
              imageRendering: "pixelated",
              position: "relative",
              zIndex: 1,
            }}
          />
        ) : (
          <div
            style={{
              color: "#A8B5C7",
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            CREW IMAGE UNAVAILABLE
          </div>
        )}

        {/* BOTTOM COLOR STRIP */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background: crew.stripe,
            zIndex: 2,
            boxShadow: `0 0 12px ${crew.glow}`,
          }}
        />

        {/* IMAGE LABEL */}
        <div
          style={{
            position: "absolute",
            left: "8px",
            bottom: "12px",
            color: "#A8B5C7",
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            letterSpacing: "1px",
            zIndex: 3,
            textShadow: "1px 1px #050A14",
          }}
        >
          CREW_UNIT // {crew.id}
        </div>
      </div>

      {/* CHARACTER NAME */}
      <h3
        style={{
          margin: "22px 0 0",
          textAlign: "center",
          color: "#E8EDF3",
          fontFamily: "'Press Start 2P', monospace",
          fontSize: "13px",
          lineHeight: "1.8",
          fontWeight: "normal",
          overflowWrap: "anywhere",
        }}
      >
        {crew.name}
      </h3>

      {/* CHARACTER ROLE */}
      <p
        style={{
          margin: "12px 0 0",
          textAlign: "center",
          color: crew.tag.text,
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: "17px",
          letterSpacing: "0.5px",
        }}
      >
        {crew.role}
      </p>

      {/* DIVIDER */}
      <div
        style={{
          height: "2px",
          margin: "16px 0",
          background: "#27364A",
        }}
      />

      {/* CHARACTER QUOTE */}
      <p
        style={{
          margin: 0,
          minHeight: "76px",
          color: "#A8B5C7",
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: "16px",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        "{crew.quote}"
      </p>

      {/* SELECT BUTTON */}
      <button
        onClick={() => onSelect(crew)}
        onMouseEnter={(event) => {
          event.currentTarget.style.filter = "brightness(1.2)";
          event.currentTarget.style.transform = "translate(-2px, -2px)";
          event.currentTarget.style.boxShadow = "6px 6px 0 #02050B";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.filter = "brightness(1)";
          event.currentTarget.style.transform = "translate(0, 0)";
          event.currentTarget.style.boxShadow = "4px 4px 0 #02050B";
        }}
        style={{
          width: "100%",
          minHeight: "48px",
          marginTop: "20px",
          padding: "10px 6px",
          boxSizing: "border-box",
          background: "#199eb0",
          border: "2px solid #65DCE5",
          borderRadius: "0",
          color: "#050A14",
          fontFamily: "'Press Start 2P', monospace",
          fontSize: "9px",
          lineHeight: "1.8",
          cursor: "pointer",
          boxShadow: "4px 4px 0 #02050B",
          transition: "transform 0.1s, filter 0.1s, box-shadow 0.1s",
        }}
      >
        &gt; SELECT SURVIVOR
      </button>

      {/* STATUS */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-between",
          gap: "8px",
          color: "#718198",
          fontFamily: "'Space Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.5px",
        }}
      >
        <span>UNIT STATUS</span>
        <span style={{ color: "#2EC4B6" }}>● READY</span>
      </div>
    </div>
  );
}