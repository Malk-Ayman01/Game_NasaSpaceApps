import React from "react";

const stars = Array.from({ length: 150 }, (_, i) => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() < 0.08 ? 3 : Math.random() < 0.25 ? 2 : 1,
  opacity: 0.25 + Math.random() * 0.65,
}));
// const stars = Array.from({ length: 120 }, (_, i) => ({
//   left: `${(i * 47.37) % 100}%`,
//   top: `${(i * 23.71) % 100}%`,
//   size: i % 12 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
//   opacity: i % 12 === 0 ? 0.9 : i % 4 === 0 ? 0.65 : 0.4,
// }));

export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#050A14",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {/* Stars */}


      {stars.map((star, index) => (
  <div
    key={index}
    style={{
      position: "absolute",
      left: `${star.left}%`,
      top: `${star.top}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      opacity: star.opacity,
      boxShadow:
        star.size >= 3
          ? "0 0 8px rgba(255,255,255,0.9)"
          : "none",
    }}
  />
))}

      {/* {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            opacity: star.opacity,
            boxShadow:
              star.size >= 3
                ? "0 0 8px rgba(255,255,255,0.9)"
                : "none",
          }}
        />
      ))} */}

      {/* Mars glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background:
            "linear-gradient(to top, rgba(90,25,15,0.55), transparent)",
        }}
      />
    </div>
  );
}