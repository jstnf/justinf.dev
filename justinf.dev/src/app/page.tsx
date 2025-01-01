import MetroSign from "@/components/MetroSign";

export default function Home() {
  return (
    <>
      <HomeContents />
    </>
  )
}

function HomeContents() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border">
      <header className="row-start-1 flex gap-6 items-center justify-center border">
        <p>About</p>
        <p>Works</p>
        <p>Contact</p>
      </header>
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start text-4xl">
        <MetroSign
          stationProps={{
            accentColor: "purple",
            lineLetter: "J",
            stationNumber: "01"
          }}
          cityProps={{
            kanji: "私について",
            hiragana: "わたしについて",
            romaji: "About me"
          }}
        />
        <MetroSign
          stationProps={{
            accentColor: "purple",
            lineLetter: "J",
            stationNumber: "02"
          }}
          cityProps={{
            kanji: "出来たこと",
            hiragana: "できたこと",
            romaji: "Past Work"
          }}
        />
        <MetroSign
          stationProps={{
            accentColor: "purple",
            lineLetter: "J",
            stationNumber: "03"
          }}
          cityProps={{
            kanji: "連絡",
            hiragana: "れんらく",
            romaji: "Contact"
          }}
        />
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
