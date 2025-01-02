"use client";

import React from "react";

import { animated, useSpring } from "@react-spring/web";
import { Link } from "next-view-transitions";

import { MetroSign, MetroSignProps } from "@/components/MetroSign";

export default function MetroSignCarousel({
  signs,
}: Readonly<{
  signs: (MetroSignProps & { href: string })[];
}>) {
  const [highlighted, setHighlighted] = React.useState<number | null>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      setHighlighted(null);
    };

    const container = document.querySelector(".hide-scrollbar");
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOverflowVisible, setIsOverflowVisible] =
    React.useState<boolean>(true);
  const trainSlideInAnimation = useSpring({
    from: {
      transform: "translateX(-150%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
    config: { duration: 1000, easing: (t: number) => t * t * (3 - 2 * t) }, // Ease-in-out effect
    onRest: () => {
      setIsOverflowVisible(false);
    },
  });

  return (
    <animated.div
      className="flex gap-8 w-full max-w-full px-8 py-4 sm:px-16 hide-scrollbar"
      style={{
        ...trainSlideInAnimation,
        overflowX: isOverflowVisible ? "visible" : "auto",
      }}
    >
      {signs.map((sign, index) => (
        <animated.div
          key={index}
          style={{
            opacity: highlighted === null || highlighted === index ? 1 : 0.6,
            transform:
              highlighted === null
                ? "scale(1)"
                : highlighted === index
                  ? "scale(1.1)"
                  : "scale(0.9)",
            transition: "opacity 0.3s, transform 0.3s",
          }}
          onMouseEnter={() => setHighlighted(index)}
          onMouseLeave={() => setHighlighted(null)}
        >
          <Link href={sign.href}>
            <MetroSign signProps={sign} />
          </Link>
        </animated.div>
      ))}
    </animated.div>
  );
}
