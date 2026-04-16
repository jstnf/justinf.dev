"use client";

import React from "react";

import { type AnimatedComponent, animated, useSpring } from "@react-spring/web";

// @react-spring/web v9 types map `children` through AnimatedProp<ReactNode> which
// resolves to `never` under React 19's revised types. This cast re-exposes `children`
// on the component type without losing SpringValue support on `style`. Will be removed
// when @react-spring/web is upgraded to v10 in Task 4.
const AnimatedDiv = animated.div as unknown as AnimatedComponent<"div"> & {
  (
    props: React.ComponentPropsWithRef<"div"> & { children?: React.ReactNode },
  ): React.ReactElement | null;
};

export default function FloatingHeaderText({
  title,
  subtitle,
  canSelect = false,
}: Readonly<{
  title: string;
  subtitle: string;
  canSelect?: boolean;
}>) {
  const spring = useSpring({
    from: { transform: "translateY(0px)" },
    to: [{ transform: "translateY(-10px)" }, { transform: "translateY(0px)" }],
    config: {
      duration: 1500,
      easing: (t) => t * t * (3 - 2 * t), // Smooth animation curve (ease in-out)
    },
    loop: true,
  });

  return (
    <AnimatedDiv
      className="flex flex-col items-center"
      style={{
        ...spring,
        userSelect: canSelect ? "auto" : "none",
      }}
    >
      <p className="text-4xl sm:text-6xl">{title}</p>
      <p className="text-lg sm:text-xl">{subtitle}</p>
    </AnimatedDiv>
  );
}
