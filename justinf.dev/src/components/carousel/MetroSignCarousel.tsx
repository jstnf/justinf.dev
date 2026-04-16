"use client";

import React from "react";

import { type AnimatedComponent, animated, useSpring } from "@react-spring/web";
import { Link } from "next-view-transitions";

import CarouselNavigationButton from "@/components/carousel/CarouselNavigationButton";
import { MetroSign, MetroSignProps } from "@/components/MetroSign";

// @react-spring/web v9 types map `children` through AnimatedProp<ReactNode> which
// resolves to `never` under React 19's revised types. This cast re-exposes `children`
// on the component type without losing SpringValue support on `style`. Will be removed
// when @react-spring/web is upgraded to v10 in Task 4.
const AnimatedDiv = animated.div as unknown as AnimatedComponent<"div"> & {
  (
    props: React.ComponentPropsWithRef<"div"> & { children?: React.ReactNode },
  ): React.ReactElement | null;
};

export default function MetroSignCarousel({
  signs,
}: Readonly<{
  signs: (MetroSignProps & { href: string })[];
}>) {
  const [highlighted, setHighlighted] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  React.useEffect(() => {
    const updateScrollState = () => {
      const container = containerRef.current;
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft + container.clientWidth < container.scrollWidth,
        );
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", updateScrollState);
    updateScrollState(); // Initial check

    return () => {
      container?.removeEventListener("scroll", updateScrollState);
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

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <AnimatedDiv
        ref={containerRef}
        className="hide-scrollbar flex w-full max-w-full gap-8 overflow-x-auto px-8 py-4 sm:px-16"
        style={{
          ...trainSlideInAnimation,
          overflowX: isOverflowVisible ? "visible" : "auto",
        }}
      >
        {signs.map((sign, index) => (
          <AnimatedDiv
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
          </AnimatedDiv>
        ))}
      </AnimatedDiv>
      {canScrollLeft && (
        <CarouselNavigationButton direction={"left"} onClick={scrollLeft} />
      )}
      {canScrollRight && (
        <CarouselNavigationButton direction={"right"} onClick={scrollRight} />
      )}
    </div>
  );
}
