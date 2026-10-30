// import { crews } from '../data/crewData'
// import CrewCard from '../components/CrewCard'
// export default function CrewSelection({ onSelect }) {
//   return (
//     <main className="max-w- mx-auto px-6 pt-20 scanlines">
//       <h1 className="text-center text- font-black tracking-[0.06em] text-[#E8EDF3]" style={{ fontFamily: 'Orbitron' }}>SELECT SURVIVING CREW MEMBER</h1>
//       <p className="text-center text- tracking-[0.18em] text-[#1E8A8A] mt-3">CHOOSE YOUR PERSPECTIVE FOR THE MARS SURFACE SURVIVAL PROTOCOL</p>
//       <div className="flex gap-7 justify-center mt-14 flex-wrap">
//         {crews.map((c) => <CrewCard key={c.id} crew={c} onSelect={onSelect} />)}
//       </div>
//       <p className="text-center text- text-[#2A3545] mt-16 pb-6 tracking-widest">ARES-VI EDUCATIONAL SURVIVAL SIMULATION // SOL 12 // ALL TELEMETRY LOGGED</p>
//     </main>
//   )
// }