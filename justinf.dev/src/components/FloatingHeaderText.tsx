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
    <animated.div
      className="flex flex-col items-center"
      style={{
        ...spring,
        userSelect: canSelect ? "auto" : "none",
      }}
    >
      <p className="text-4xl sm:text-6xl">{title}</p>
      <p className="text-lg sm:text-xl">{subtitle}</p>
    </animated.div>
  )
}