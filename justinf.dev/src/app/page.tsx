"use client";

import { MetroSign, MetroSignProps } from "@/components/MetroSign";
import FloatingHeaderText from "@/components/FloatingHeaderText";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "next-view-transitions";
import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export default function Home() {
  const [highlighted, setHighlighted] = React.useState<number | null>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      setHighlighted(null);
    };

    const container = document.querySelector('.hide-scrollbar');
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOverflowVisible, setIsOverflowVisible] = React.useState<boolean>(true);
  const trainSlideInAnimation = useSpring({
    from: {
      transform: "translateX(-150%)",
      opacity: 0
    },
    to: {
      transform: "translateX(0)",
      opacity: 1
    },
    config: {duration: 1000, easing: (t: number) => t * t * (3 - 2 * t)}, // Ease-in-out effect
    onRest: () => {
      setIsOverflowVisible(false);
    },
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 pb-16 gap-16 font-frutiger">
      <header className="row-start-1 flex gap-6 items-center justify-center">
        <MetroStandaloneEmblem accentColor="purple" letter="J" viewTransitionName="logo"/>
      </header>

      <main className="flex flex-col row-start-2 gap-10 justify-items-center items-center sm:items-start text-4xl max-w-[100vw]">
        <div className="w-full">
          <FloatingHeaderText title="Where to go?" subtitle="(click one)"/>
        </div>
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
                transform: highlighted === null ? "scale(1)" : (highlighted === index ? "scale(1.1)" : "scale(0.9)"),
                transition: "opacity 0.3s, transform 0.3s",
              }}
              onMouseEnter={() => setHighlighted(index)}
              onMouseLeave={() => setHighlighted(null)}
            >
              <Link href={sign.href}><MetroSign signProps={sign}/></Link>
            </animated.div>
          ))}
        </animated.div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-xs opacity-20">© 2025 - All rights reserved.</p>
      </footer>
    </div>
  );
}

const signs: (MetroSignProps & { href: string })[] = [
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "01",
    cityName: {
      kanji: "私について",
      hiragana: "わたしについて",
      romaji: "About me"
    },
    href: "/about"
  },
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "02",
    cityName: {
      kanji: "出来たこと",
      hiragana: "できたこと",
      romaji: "Past Work"
    },
    href: "/works"
  },
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "03",
    cityName: {
      kanji: "ブログ",
      hiragana: "ぶろぐ",
      romaji: "Blog"
    },
    href: "/blog"
  },
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "04",
    cityName: {
      kanji: "連絡",
      hiragana: "れんらく",
      romaji: "Contact"
    },
    href: "/contact"
  }
]
