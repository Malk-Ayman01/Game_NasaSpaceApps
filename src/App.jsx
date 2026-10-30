import { useEffect, useState } from "react";

import Background from "./components/Background";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import CrewSelectionPage from "./components/CrewSelectionPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Startup placeholder لحد ما نربط التحميل بالأصول الحقيقية
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Background />
      <Header />

      <main style={{ position: "relative", zIndex: 30 }}>
        <CrewSelectionPage />
      </main>
    </div>
  );
}



// import Background from "./components/Background";
// import Header from "./components/Header";
// import CrewSelectionPage from "./components/CrewSelectionPage";

// export default function App() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       <Background />

//       <Header />

//       <main
//         style={{
//           position: "relative",
//           zIndex: 30,
//         }}
//       >
//         <CrewSelectionPage />
//       </main>
//     </div>
//   );
// }