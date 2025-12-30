"use client";

import dynamic from "next/dynamic";
import animationData from "./Flower.json";

// Dynamically import the Player component with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
interface HealthProps {
  className?: string;
}

export default function Flower2() {
  return (
    <div className="w-[140px] ml-[-18px]">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%" , width : "140px"}}
      />
    </div>
  );
}
