"use client";

import dynamic from "next/dynamic";
import animationData from "./dentist.json";

// Dynamically import the Player component with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
interface DentistProps {
  className?: string;
}

export default function Dentist() {
  return (
    <div className="w-[140px] ml-[-18px]">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "140px" }}
      />
    </div>
  );
} 