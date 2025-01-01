function MetroSignStripe({
  accentColor
}: Readonly<{
  accentColor: string
}>) {
  return (
    <div
      className="w-full h-4"
      style={{
        backgroundColor: accentColor,
      }}
    />
  )
}

function MetroSignEmblem({
  stationProps
}: Readonly<{
  stationProps: MetroSignStationProps
}>) {
  return (
    <div
      className="flex items-center justify-center w-20 h-20 rounded-full border-8 mx-auto mt-3 mb-4"
      style={{
        borderColor: stationProps.accentColor,
      }}
    >
      <ul className="flex flex-col items-center justify-center text-center">
        <li
          className="text-xl font-semibold font-futuraBold"
          style={{lineHeight: 1.2}}
        >
          {stationProps.lineLetter}
        </li>
        <li
          className="text-3xl font-bold font-futuraBold"
          style={{lineHeight: 1}}
        >
          {stationProps.stationNumber}
        </li>
      </ul>
    </div>
  )
}

function MetroSign({
  stationProps,
  cityProps
}: Readonly<{
  stationProps: MetroSignStationProps,
  cityProps: MetroSignCityProps
}>) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center border p-4 rounded-2xl">
      <div className="min-w-[275px]">
        <MetroSignStripe accentColor={stationProps.accentColor}/>
        <MetroSignEmblem stationProps={stationProps}/>
        <p className="text-5xl font-bold">{cityProps.kanji}</p>
        <p className="text-lg font-bold">{cityProps.hiragana}</p>
        <p
          className="text-2xl font-bold"
        >
          {cityProps.romaji}
        </p>
        <MetroSignStripe accentColor={stationProps.accentColor}/>
      </div>
    </div>
  )
}

type MetroSignStationProps = {
  accentColor: string,
  lineLetter: string,
  stationNumber: string
}

type MetroSignCityProps = {
  kanji: string,
  hiragana: string,
  romaji: string
}

export default MetroSign;