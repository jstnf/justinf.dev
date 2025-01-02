"use client";

import { animated, useSpring } from "@react-spring/web";

export default function FloatingHeaderText({
  title,
  subtitle,
  canSelect = false
}: Readonly<{
  title: string,
  subtitle: string,
  canSelect?: boolean
}>) {
  const spring = useSpring({
    from: {transform: "translateY(0px)"},
    to: [
      {transform: "translateY(-10px)"},
      {transform: "translateY(0px)"},
    ],
    config: {
      duration: 1500,
      easing: (t) => t * t * (3 - 2 * t), // Smooth animation curve (ease in-out)
    },
    loop: true,
  });

  return (
    <animated.div style={spring} className={`flex flex-col w-full items-center ${canSelect ? '' : "select-none"}`}>
      <p className="text-6xl font-frutiger">{title}</p>
      <p className="text-xl font-frutiger">{subtitle}</p>
    </animated.div>
  )
}