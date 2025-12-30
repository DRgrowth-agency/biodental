"use client";

import dynamic from "next/dynamic";
import animationData from "./yoga.json";

// Dynamically import the Player component with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
interface YogaProps {
  className?: string;
}

export default function Yoga({ className = "w-[100px] h-[100px]" }: YogaProps) {
  return (
    <div className={className}>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
} 