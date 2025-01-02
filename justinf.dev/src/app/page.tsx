"use client";

import { MetroSign, MetroSignProps } from "@/components/MetroSign";
import FloatingHeaderText from "@/components/FloatingHeaderText";
import React from "react";
import { animated } from "@react-spring/web";

export default function Home() {
  return (
    <>
      <HomeContents />
    </>
  )
}

function HomeContents() {
  const [highlighted, setHighlighted] = React.useState<number | null>(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border">
      <header className="row-start-1 flex gap-6 items-center justify-center border">
        <p>About</p>
        <p>Works</p>
        <p>Contact</p>
      </header>

      <main className="flex flex-col row-start-2 gap-16 justify-items-center items-center sm:items-start text-4xl">
        <FloatingHeaderText title="Where to go?" subtitle="(click one)"/>
        <div className="flex flex-row gap-8">
          {signs.map((sign, index) => (
            <animated.div
              key={index}
              style={{
                opacity: highlighted === null || highlighted === index ? 1 : 0.6,
                transform: highlighted === null ? 'scale(1)' : (highlighted === index ? 'scale(1.1)' : 'scale(0.9)'),
                transition: 'opacity 0.3s, transform 0.3s',
              }}
              onMouseEnter={() => setHighlighted(index)}
              onMouseLeave={() => setHighlighted(null)}
            >
              <MetroSign signProps={sign}/>
            </animated.div>
          ))}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border">
        <h1>This is h1.</h1>
        <h2>This is h2.</h2>
        <h3>This is h3.</h3>
        <p>The quick brown fox jumped over the lazy dog.</p>
      </footer>
    </div>
  );
}

const signs: MetroSignProps[] = [
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "01",
    cityName: {
      kanji: "私について",
      hiragana: "わたしについて",
      romaji: "About me"
    }
  },
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "02",
    cityName: {
      kanji: "出来たこと",
      hiragana: "できたこと",
      romaji: "Past Work"
    }
  },
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "03",
    cityName: {
      kanji: "ブログ",
      hiragana: "ぶろぐ",
      romaji: "Blog"
    }
  },
  {
    accentColor: "purple",
    lineLetter: "J",
    stationNumber: "04",
    cityName: {
      kanji: "連絡",
      hiragana: "れんらく",
      romaji: "Contact"
    }
  }
]
