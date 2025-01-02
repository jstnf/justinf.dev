import React from "react";

import FloatingHeaderText from "@/components/FloatingHeaderText";
import type {MetroSignProps} from "@/components/MetroSign";
import MetroSignCarousel from "@/components/MetroSignCarousel";
import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-20 pb-16 gap-16 font-frutiger">
      <header className="row-start-1 flex gap-6 items-center justify-center">
        <MetroStandaloneEmblem accentColor="purple" letter="J" viewTransitionName="logo"/>
      </header>

      <main className="flex flex-col row-start-2 gap-10 justify-items-center items-center sm:items-start text-4xl max-w-[100vw]">
        <div className="w-full">
          <FloatingHeaderText title="Where to go?" subtitle="(click one)"/>
        </div>
        <MetroSignCarousel signs={signs}/>
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
